import request from 'supertest';
import { describe } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => { // inicia o servidor pra testar
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => { // finaliza o servidor no final de cada test
  server.close();
});

describe('Testarndo rota de login POST', () => {
  it('O login deve possuir email e senha', async () => {
    const loginMock = {
      email: 'jv.ferreira@gamilcom',
    };

    await request(servidor)
      .post('/login')
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });
});
