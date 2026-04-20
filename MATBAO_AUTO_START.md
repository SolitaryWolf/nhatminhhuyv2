# Auto-Start Node.js App on MatBao

## Problem
The Node.js app runs when you start it via SSH, but stops when you close the SSH session.

## Solution: Configure in Plesk Panel

### Method 1: Use Plesk Node.js Extension (Recommended)

1. **Login to Plesk Panel**
2. **Go to: Domains → nhatminhhuy.com → Node.js**
3. **Configure:**
   - **Node.js version:** 24.x
   - **Application mode:** Production
   - **Document root:** `/var/www/vhosts/nhatminhhuy.com/app`
   - **Application startup file:** `server.js`
   - **Application URL:** Leave empty or `/`
   - **Custom environment variables:**
     ```
     NODE_ENV=production
     PORT=3000
     ```

4. **Click "Enable Node.js"**
5. **Click "NPM Install"** (if needed)
6. **Click "Restart App"**

### Method 2: Use PM2 Process Manager

If Plesk Node.js extension doesn't work, use PM2:

#### Install PM2 globally:
```bash
ssh your-username@server
cd /var/www/vhosts/nhatminhhuy.com/app
/opt/plesk/node/24/bin/npm install -g pm2
```

#### Start your app with PM2:
```bash
/opt/plesk/node/24/bin/pm2 start server.js --name nhatminhhuy
```

#### Save PM2 process list:
```bash
/opt/plesk/node/24/bin/pm2 save
```

#### Setup PM2 to start on boot:
```bash
/opt/plesk/node/24/bin/pm2 startup
# Copy and run the command it outputs
```

#### Useful PM2 commands:
```bash
# Check status
/opt/plesk/node/24/bin/pm2 status

# View logs
/opt/plesk/node/24/bin/pm2 logs nhatminhhuy

# Restart app
/opt/plesk/node/24/bin/pm2 restart nhatminhhuy

# Stop app
/opt/plesk/node/24/bin/pm2 stop nhatminhhuy

# Delete app from PM2
/opt/plesk/node/24/bin/pm2 delete nhatminhhuy
```

### Method 3: Create a Systemd Service

Create a service file:

```bash
sudo nano /etc/systemd/system/nhatminhhuy.service
```

Add this content:
```ini
[Unit]
Description=Nhat Minh Huy Next.js App
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/var/www/vhosts/nhatminhhuy.com/app
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/opt/plesk/node/24/bin/node server.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable nhatminhhuy
sudo systemctl start nhatminhhuy
```

Check status:
```bash
sudo systemctl status nhatminhhuy
```

### Method 4: Use Plesk Scheduled Tasks (Cron)

If you don't have root access, use a cron job to keep the app running:

1. **Plesk Panel → Domains → nhatminhhuy.com → Scheduled Tasks**
2. **Add new task:**
   - **Command:**
     ```bash
     /usr/bin/pgrep -f "node.*server.js" > /dev/null || cd /var/www/vhosts/nhatminhhuy.com/app && /opt/plesk/node/24/bin/node server.js >> /var/www/vhosts/nhatminhhuy.com/app/logs/app.log 2>&1 &
     ```
   - **Schedule:** Every 5 minutes
   - **Description:** Keep Node.js app running

This checks if the app is running every 5 minutes and starts it if it's not.

## Verification

After setting up auto-start, verify it works:

1. **Check if app is running:**
```bash
ps aux | grep node
```

2. **Check if port 3000 is listening:**
```bash
netstat -tulpn | grep 3000
```

3. **Test the website:**
```bash
curl http://localhost:3000/en
```

4. **Reboot server and check if app starts automatically:**
```bash
sudo reboot
# Wait a few minutes, then check again
ps aux | grep node
```

## Troubleshooting

### App stops after closing SSH
**Cause:** Process is attached to SSH session  
**Solution:** Use PM2 or systemd service

### App doesn't start on boot
**Cause:** No startup script configured  
**Solution:** Use PM2 startup or systemd enable

### Permission denied errors
**Cause:** Wrong user or file permissions  
**Solution:** 
```bash
chown -R your-username:your-username /var/www/vhosts/nhatminhhuy.com/app
chmod -R 755 /var/www/vhosts/nhatminhhuy.com/app
```

### Port 3000 already in use
**Cause:** Old process still running  
**Solution:**
```bash
fuser -k 3000/tcp
# or
lsof -ti:3000 | xargs kill -9
```

## Recommended Setup

For MatBao shared hosting, I recommend:

1. **Use Plesk Node.js Extension** (if available)
2. **Or use PM2** (most reliable for shared hosting)
3. **Set up monitoring** to restart if it crashes

## Monitoring

Add a health check cron job:

```bash
# Check every 5 minutes if app is responding
*/5 * * * * curl -f http://localhost:3000/en || /opt/plesk/node/24/bin/pm2 restart nhatminhhuy
```
