import { jest } from '@jest/globals';
import request from 'supertest';
import { send } from '../utils/mailer.js';
/**
 * send: token, emailBody(userName, button with token and id)
 * apply: check token by user
 */

describe('mailsender', () => {
  test('send mail', () => {
    console.log(new URL('./testmail.html', import.meta.url).pathname);
    send({
      from: '"bnm <akswnd55@gmail.com>',
      to: 'enne123@naver.com',
      subject: '타이틀',
      text: '본문내용',
      html: RegistEmail(
        '홍길동',
        'dfafsdadf23124r3oldefdjsal',
        'http://localhost:4001'
      ),
      attachments: [
        {
          filename: 'testmail.html',
          path: new URL('./testmail.html', import.meta.url).pathname,
        },
      ],
    });
  });
  test('confirm token', () => {});
});
