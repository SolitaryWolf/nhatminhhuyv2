#!/bin/bash

echo "=== Stopping Nhat Minh Huy ==="

# Use Plesk Node.js path
NODE_PATH="/opt/plesk/node/24/bin"
PM2="$NODE_PATH/pm2"

# Check if PM2 is installed
if command -v $PM2 &> /dev/null; then
    echo "Stopping PM2 process..."
    $PM2 stop nhatminhhuy
    $PM2 delete nhatminhhuy
    echo "✓ PM2 process stopped"
else
    echo "PM2 not found, killing node processes..."
    # Kill node processes on port 3000
    fuser -k 3000/tcp 2>/dev/null || true
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    pkill -f "node.*server.js" 2>/dev/null || true
    echo "✓ Node processes killed"
fi

echo ""
echo "=== Checking if any process is still running ==="
ps aux | grep node | grep -v grep || echo "No node processes running"
