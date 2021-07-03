const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https');
const http = require('http');
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
const privateKey  = fs.readFileSync('./privatekey.pem', 'utf8');
const certificate = fs.readFileSync('./certificate.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, function() {
    console.log('HTTP Server is running on: http://localhost:8080');
});

