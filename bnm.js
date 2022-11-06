import express from 'express';
import { PORT } from './config.js';
import { hello, api } from './routes/api.js';
const app = express();

app.get('/', hello);
// app.get('api/:appid/:version/:schemas', listApi);
app.all('/api/:appid/:version/:schemas/:idcmd', api);

console.log(import.meta.url);

const server = app.listen(PORT, () => {
  console.log(`B&M Server listening on port ${PORT}`);
});

export { app, server };
