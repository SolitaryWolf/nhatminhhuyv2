#!/bin/bash

# Change to app directory
cd /var/www/vhosts/nhatminhhuy.com/app

# Set environment variables
export NODE_ENV=production
export PORT=3000
export HOST=0.0.0.0

# Start the server with full path to node
exec /opt/plesk/node/24/bin/node server.js
