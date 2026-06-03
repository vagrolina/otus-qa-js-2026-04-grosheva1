const axios = require('axios');

const BASE_URL = 'https://bookstore.demoqa.com/Account/v1';

describe('Bookstore API Tests', () => {

  // Создание пользователя успешно
  test('Создание пользователя успешно', async () => {
    const user = {
      userName: `new_user_${Date.now()}`,
      password: 'ValidPass123!'
    };

    const response = await axios.post(`${BASE_URL}/User`, user);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('userID');
    expect(response.data.username).toBe(user.userName);
  });

   // Создание пользователя с ошибкой: логин уже используется
  const client = axios.create({
  baseURL: BASE_URL,
  validateStatus: () => true // 
});

test('Создание пользователя с ошибкой: логин уже используется', async () => {
  const user = {
    userName: `existing_user_${Date.now()}`,
    password: 'ValidPass123!'
  };

  // Сначала создаем пользователя
  await client.post('/User', user);

  // Пытаемся создать повторно
  const response = await client.post('/User', user);

  expect(response.status).toBe(406);
  expect(response.data.message).toContain('User exists');
});

  // Создание пользователя с ошибкой: пароль не подходит
  test('Создание пользователя с ошибкой: пароль не подходит', async () => {
  const user = {
    userName: `invalid_pass_${Date.now()}`,
    password: '123'
  };

  const response = await client.post('/User', user);

  expect(response.status).toBe(400);
  expect(response.data.message).toContain('Passwords must have');
});

  // Генерация токена успешно
  test('Генерация токена успешно', async () => {
    const user = {
      userName: `token_user_${Date.now()}`,
      password: 'ValidPass123!'
    };

    // Создаем пользователя
    await axios.post(`${BASE_URL}/User`, user);

    const response = await axios.post(`${BASE_URL}/GenerateToken`, {
      userName: user.userName,
      password: user.password
    });

    expect(response.status).toBe(200);
    expect(response.data.status).toBe('Success');
    expect(response.data.token).toBeDefined();
  });

  // Генерация токена с ошибкой
  test('Генерация токена с ошибкой', async () => {
    const credentials = {
      userName: 'nonexistent_user',
      password: 'WrongPass123!'
    };

    const response = await axios.post(`${BASE_URL}/GenerateToken`, credentials);

    expect(response.status).toBe(200); // API возвращает 200 даже при ошибке
    expect(response.data.status).toBe('Failed');
    expect(response.data.result).toContain('User authorization failed');
  }); 
 
});
