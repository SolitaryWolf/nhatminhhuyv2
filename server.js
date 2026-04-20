const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs')
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true })
}

// Custom logging function
const logFile = path.join(logsDir, 'app.log')
const log = (message) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}\n`
  console.log(message)
  fs.appendFileSync(logFile, logMessage)
}

// Try to kill any process on port 3000
const killPort = (port) => {
  return new Promise((resolve) => {
    exec(`fuser -k ${port}/tcp 2>/dev/null || lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, (err) => {
      // Ignore errors, just try to kill
      setTimeout(resolve, 1000) // Wait 1 second
    })
  })
}

// Reduce memory usage
process.env.NODE_OPTIONS = '--max-old-space-size=512'

// Force production mode if not set
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production'
}

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

log('Starting Next.js server...')
log(`Environment: ${process.env.NODE_ENV}`)
log(`Hostname: ${hostname}`)
log(`Port: ${port}`)

// Try to kill anything on the port first
killPort(port).then(() => {
  log('Attempted to clear port...')
  
  const app = next({ 
    dev, 
    hostname, 
    port,
    customServer: true,
    conf: {
      experimental: {
        workerThreads: false,
        cpus: 1,
      }
    }
  })
  const handle = app.getRequestHandler()

  app.prepare()
    .then(() => {
      log('Next.js app prepared successfully')
      
      createServer(async (req, res) => {
        try {
          const parsedUrl = parse(req.url, true)
          await handle(req, res, parsedUrl)
        } catch (err) {
          log(`Error occurred handling ${req.url}: ${err.message}`)
          console.error('Error occurred handling', req.url, err)
          res.statusCode = 500
          res.end('internal server error')
        }
      })
        .once('error', (err) => {
          log(`Server error: ${err.message}`)
          console.error('Server error:', err)
          process.exit(1)
        })
        .listen(port, hostname, () => {
          log(`> Ready on http://${hostname}:${port}`)
          log('> Server is running and accepting connections')
        })
    })
    .catch((err) => {
      log(`Failed to prepare Next.js app: ${err.message}`)
      console.error('Failed to prepare Next.js app:', err)
      process.exit(1)
    })
})

// Log uncaught exceptions
process.on('uncaughtException', (err) => {
  log(`Uncaught Exception: ${err.message}`)
  console.error('Uncaught Exception:', err)
})

process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection: ${reason}`)
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
