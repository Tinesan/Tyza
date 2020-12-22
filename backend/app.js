const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const http = require('http');
const https = require('https');
const cors = require('cors');

const corsOptions = {
  origin: '*',
//  credentials: true // <-- REQUIRED backend setting
};
//app.use(cors(corsOptions));

//app.use(cors());

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/kotdapes.by/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/kotdapes.by/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/kotdapes.by/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use((req, res, next) => {
        if (req.secure) {
                next();
        } else {
               res.redirect('https://' + req.headers.host + req.url);
        }
});

app.use("/", express.static(path.resolve(__dirname, "../", "build")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
});

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
