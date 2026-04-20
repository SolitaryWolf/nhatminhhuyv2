// Wrapper to run the standalone Next.js server
const path = require('path')

console.log('Starting standalone Next.js server...')
console.log('Environment:', process.env.NODE_ENV)
console.log('Port:', process.env.PORT || 3000)

// The standalone server is in .next/standalone
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js')

try {
  require(standaloneServer)
} catch (err) {
  console.error('Failed to start standalone server:', err.message)
  console.error('Make sure .next/standalone/server.js exists')
  process.exit(1)
}
