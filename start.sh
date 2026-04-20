#!/bin/bash

# Kill any existing Node.js processes
pkill -f "node server.js"

# Wait a moment
sleep 2

# Start the server in background
nohup node server.js > logs/server.log 2>&1 &

# Get the process ID
echo $! > server.pid

echo "Server started with PID: $(cat server.pid)"
echo "Check logs at: logs/server.log"
