const http = require('http')

const hostname = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

console.log('Starting simple test server...')
console.log('Hostname:', hostname)
console.log('Port:', port)

const server = http.createServer((req, res) => {
  console.log('Request received:', req.url)
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test Server</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f0f0f0;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          h1 { color: #ff6b35; }
          .info { color: #666; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>✅ Node.js Server is Working!</h1>
          <div class="info">Server: ${hostname}:${port}</div>
          <div class="info">Time: ${new Date().toISOString()}</div>
          <div class="info">URL: ${req.url}</div>
          <div class="info">Node Version: ${process.version}</div>
          <p>If you see this, your Plesk Node.js configuration is correct!</p>
        </div>
      </body>
    </html>
  `)
})

server.listen(port, hostname, () => {
  console.log(`✓ Server running at http://${hostname}:${port}/`)
})

server.on('error', (err) => {
  console.error('Server error:', err)
  process.exit(1)
})
