import express from 'express';
import ogs from 'open-graph-scraper';

import { PORT } from './config.js';
import { hello, api } from './src/routes/api.js';

const app = express();

const AllowHosts = ['http://localhost:5173', 'http://localhost:5174'];

app.all('/ogscrapper', (req, res) => {
  AllowHosts.includes(req.headers.origin)
    ? res.header('Access-Control-Allow-Origin', req.headers.origin)
    : res.header('Access-Control-Allow-Origin', AllowHosts[0]);

  res.header('Access-Control-Allow-Credentials', true); //ajax for diff domain
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept, Authorization, SocketID'
  // );
  res.header('Access-Control-Allow-Headers', 'SocketID');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PATCH, PUT, POST, DELETE, OPTIONS'
  );

  ogs({ url: req.query.url }).then(({ error, result }) => {
    error ? res.status(500).json({ message: error.message }) : res.json(result);
  });
});

app.get('/', hello);
// app.get('api/:appid/:version/:schemas', listApi);
app.all('/api/:appid/:version/:schemas/:idcmd', api);

// console.log(import.meta.url);

const server = app.listen(PORT, () => {
  console.log(`B&M Server listening on port ${PORT}`);
});

export { app, server };
