# Deployment Guide for MatBao.net

## Prerequisites
- Node.js 18+ installed on the server
- SSH access to your hosting

## Deployment Steps

### 1. Build the application locally or on server
```bash
npm install
npm run build
```

### 2. Files to upload to server
Upload these files/folders to your hosting:
- `.next/` (entire folder after build)
- `node_modules/` (or run npm install on server)
- `public/` (all static assets)
- `package.json`
- `package-lock.json`
- `server.js`
- `next.config.ts`
- `middleware.ts`
- `i18n.config.ts`

### 3. On the server, run:
```bash
# Install dependencies (if not uploaded)
npm install --production

# Start the server
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
