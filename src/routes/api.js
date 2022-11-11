// .../api/:appid/:version/:schemas/:idcmd?searchStr=abc
export const api = (req, res) => {
  console.log(req.params);
  const { appid, version, schemas, idcmd } = req.params;
  //   const { searchStr } = req.query;
  req.method === 'GET' && isNaN(Number(idcmd)) ? '' : '';

  res.json({ appid, version, schemas, idcmd, query: req.query });
};

export const hello = (req, res) => {
  res.send('Hello World!');
};
/*
const create = (req, res) => {};
const read = (req, res) => {};
const update = (req, res) => {};
const del = (req, res) => {};
const execute = (req, res) => {
  switch (req.method) {
    case 'GET':
      break;
    default:
      return;
  }
};
*/
