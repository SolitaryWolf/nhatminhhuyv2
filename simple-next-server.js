const { createServer } = require('http')
const { parse } = require('url')

console.log('Starting minimal Next.js test...')

// Check if Next.js is installed
try {
  const next = require('next')
  console.log('✓ Next.js module found')
  
  const dev = false
  const hostname = process.env.HOST || '0.0.0.0'
  const port = parseInt(process.env.PORT || '3000', 10)
  
  console.log('Environment:', process.env.NODE_ENV)
  console.log('Hostname:', hostname)
  console.log('Port:', port)
  
  // Check if .next folder exists
  const fs = require('fs')
  const path = require('path')
  const nextDir = path.join(__dirname, '.next')
  
  if (!fs.existsSync(nextDir)) {
    console.error('✗ .next folder not found! You need to build the app first.')
    console.error('Run: npm run build')
    process.exit(1)
  }
  console.log('✓ .next folder found')
  
  const app = next({ dev, hostname, port })
  const handle = app.getRequestHandler()
  
  console.log('Preparing Next.js app...')
  
  app.prepare()
    .then(() => {
      console.log('✓ Next.js app prepared successfully')
      
      createServer(async (req, res) => {
        try {
          const parsedUrl = parse(req.url, true)
          await handle(req, res, parsedUrl)
        } catch (err) {
          console.error('Request error:', err.message)
          res.statusCode = 500
          res.end('Internal server error')
        }
      })
        .listen(port, hostname, () => {
          console.log(`✓ Server ready on http://${hostname}:${port}`)
        })
        .on('error', (err) => {
          console.error('Server error:', err)
          process.exit(1)
        })
    })
    .catch((err) => {
      console.error('✗ Failed to prepare Next.js:', err.message)
      console.error('Full error:', err)
      process.exit(1)
    })
    
} catch (err) {
  console.error('✗ Cannot load Next.js:', err.message)
  console.error('Make sure you ran: npm install')
  process.exit(1)
}
