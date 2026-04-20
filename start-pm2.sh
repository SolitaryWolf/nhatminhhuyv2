#!/bin/bash
cd /var/www/vhosts/nhatminhhuy.com/app
export NODE_ENV=production
export PORT=3000
export HOST=0.0.0.0
/opt/plesk/node/24/bin/node ./node_modules/.bin/pm2 start server.js --name nhatminhhuy --interpreter /opt/plesk/node/24/bin/node
