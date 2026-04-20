#!/bin/bash

# Deployment script for Matbao hosting
# Run this on your server after pulling from Git

set -e

echo "🚀 Starting deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Check if .next directory exists
if [ ! -d ".next" ]; then
    echo "⚠️  .next directory not found. Building the project..."
    npm run build
fi

# Create logs directory
mkdir -p logs

echo "✅ Deployment complete!"
echo ""
echo "To start the server, run:"
echo "  npm start"
echo ""
echo "Or use PM2 (recommended):"
echo "  pm2 start server.js --name nhatminhhuy"
echo "  pm2 save"
echo "  pm2 startup"
