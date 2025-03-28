#!/bin/bash
cd /opt/app/whitehole-controller/backend
npm install
npm run build || true
pm2 restart whitehole-backend || pm2 start index.js --name whitehole-backend
