# Deployment Guide for MatBao.net

## Prerequisites
- Node.js 18+ installed on the server
- SSH access to your hosting
- Git installed on server (recommended)

## Quick Start

### SSH into your server and run:
```bash
cd /var/www/vhosts/nhatminhhuy.com/app
git pull origin main
chmod +x deploy.sh
./deploy.sh
```

## Detailed Deployment Steps

### 1. First Time Setup

**SSH into server:**
```bash
ssh your-username@nhatminhhuy.com
cd /var/www/vhosts/nhatminhhuy.com/app
```

**Clone repository:**
```bash
git clone https://github.com/SolitaryWolf/nhatminhhuy v2.git .
```

**Run deployment script:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 2. Install Dependencies (Critical!)

**⚠️ IMPORTANT:** node_modules is NOT in Git. You MUST install on server:
```bash
npm install --production
```

This will install all required packages including 'next', 'react', etc.

### 3. Verify .next directory

The `.next/` production build IS included in Git. If missing:
```bash
npm run build
```

### 4. Start the server
```bash
npm start
```

### 4. Configure Apache/Nginx Reverse Proxy

#### For Apache (add to .htaccess or virtual host):
```apache
<IfModule mod_proxy.c>
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</IfModule>
```

#### For Nginx:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### 5. Keep the server running with PM2 (recommended)
```bash
# Install PM2 globally
npm install -g pm2

# Start the app
pm2 start server.js --name nhatminhhuy

# Save PM2 configuration
pm2 save

# Setup PM2 to start on server reboot
pm2 startup
```

### 6. Environment Variables
Create a `.env.production` file if needed:
```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

## Troubleshooting

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

### Permission issues
```bash
# Make sure server.js is executable
chmod +x server.js
```

### Check logs
```bash
# If using PM2
pm2 logs nhatminhhuy

# If running directly
node server.js
```
