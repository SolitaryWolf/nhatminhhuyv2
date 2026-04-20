#!/bin/bash

echo "=== Starting Nhat Minh Huy with PM2 ==="

# Use Plesk Node.js path
NODE_PATH="/opt/plesk/node/24/bin"
PM2="$NODE_PATH/pm2"

# Check if PM2 is installed
if ! command -v $PM2 &> /dev/null; then
    echo "PM2 not found. Installing PM2..."
    $NODE_PATH/npm install -g pm2
fi

# Stop existing process if any
echo "Stopping existing process..."
$PM2 stop nhatminhhuy 2>/dev/null || true
$PM2 delete nhatminhhuy 2>/dev/null || true

# Start the app
echo "Starting app with PM2..."
$PM2 start ecosystem.config.js

# Save PM2 process list
echo "Saving PM2 process list..."
$PM2 save

# Show status
echo ""
echo "=== PM2 Status ==="
$PM2 status

echo ""
echo "=== App Logs ==="
echo "View logs with: $PM2 logs nhatminhhuy"
echo "Monitor with: $PM2 monit"
echo ""
echo "✓ App started successfully!"
