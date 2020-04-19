const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://nani:nani@clu-qomqw.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(routes);
server.listen(3333);
