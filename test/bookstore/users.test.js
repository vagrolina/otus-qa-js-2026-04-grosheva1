import { AuthService, UserService, UserFixture } from '../../framework'

describe('Users', () => {
  let token
  let userId
  let newUser

  beforeAll(async () => {
    newUser = UserFixture.generateUserCredentials()
  })

  it('Авторизован ли пользователь?', async () => {
    const responseCreateUser = await UserService.create(newUser)
    userId = responseCreateUser.data.userID

    const { data: authorizedBeforeLogin } = await AuthService.authorized(newUser)

    const responseToken = await AuthService.generateToken(newUser)
    token = responseToken.data.token

    const { data: authorizedAfterLogin } = await AuthService.authorized(newUser)

    expect(authorizedBeforeLogin).toBe(false)
    expect(authorizedAfterLogin).toBe(true)
  })

   it('Получение информации о пользователе по ID', async () => {
    // Получаем данные пользователя по userId
    const response = await UserService.get({ userId, token })

    // Проверяем статус и корректность данных
    expect(response.status).toBe(200)
    expect(response.data).toMatchObject({
       userId,
       username: newUser.userName,
       books: expect.any(Array)
    })

  it('Удаление юзера', async () => {
    const response = await UserService.remove({ userId, token })
    expect(response.status).toBe(204)
    expect(response.data).toBe('')
  })
})
