import { describe, expect } from '@jest/globals';
import AuthService from '../../services/authService';

const authService = new AuthService();

describe('Testando o authService.cadastrarUsuario', () => {
  it(' O usuario deve possuir nome, email e senha', async () => {
    //arrange
    const userMock = {
      nome: 'João Victor',
      email: 'jv.ferreira@gamilcom',
    };

    //act
    const userSalvo = authService.cadastrarUsuario(userMock)

    //assert
    await expect(userSalvo).rejects.toThrowError('A senha do usuário é obrigatoria!')
  });
});
