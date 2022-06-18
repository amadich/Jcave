const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static('public'));

let port = process.env.PORT || 8080;
  server.listen(port, () => {
      console.log('listening on :', "port : Welcome ",port);
  })