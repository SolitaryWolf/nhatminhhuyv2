#!/bin/bash

if [ -f server.pid ]; then
    PID=$(cat server.pid)
    echo "Stopping server with PID: $PID"
    kill $PID
    rm server.pid
    echo "Server stopped"
else
    echo "No PID file found. Killing all node processes..."
    pkill -f "node server.js"
fi
