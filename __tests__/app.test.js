import { jest } from '@jest/globals';
import { query } from 'express';
import request from 'supertest';
import { server } from '../bnm';

// let server = null;

// beforeEach(async () => {
// });

afterEach(() => {
  server.close();
});

const makeQuery = (query) => {
  const rets = [];
  for (const k in query) {
    rets.push([`${k}=${query[k]}`]);
  }
  return rets.join('&');
  // return [...Object.entries(query)].reduce((s, [key, value])=> `${s}${key}=${value}` )
};
const makeUrl = ({ appid, version, schemas, idcmd, query }) =>
  `/api/${appid}/${version}/${schemas}/${idcmd}?${makeQuery(query)}`;

describe('query && url', () => {
  test('makeQuery', () => {
    const query = { searchStr: 11 };
    const res = makeQuery(query);
    expect(res).toEqual('searchStr=11');
  });
  test('makeUrl', () => {
    const pq = {
      appid: 'www',
      version: '0.0.1',
      schemas: 'users',
      idcmd: 'all',
      query: { searchStr: 11 },
    };
    const res = makeUrl(pq);

    const expectData = `/api/www/0.0.1/users/all?searchStr=11`;
    expect(res).toEqual(expectData);
  });
});

test('home', async () => {
  //   const response = await request(app).get('/');
  const response = await request(server).get('/');
  expect(response.statusCode).toBe(200);
  //   console.log('res>>>', response);
  server.close();
});

// .../api/:appid/:version/:schemas/:idcmd?searchStr=abc

describe('api - paramparam', () => {
  test('api - sample', async () => {
    const expectData = {
      appid: 'www',
      version: '0.0.1',
      schemas: 'users',
      idcmd: 'all',
      query: { searchStr: '11' },
    };
    const sampleUrl = makeUrl(expectData);
    //   const req = {};
    //   const res = { send: jest.fn() };
    const response = await request(server).get(sampleUrl);
    // console.log(response.body, expectData);
    expect(response.body).toEqual(expectData);
  });
});
