import config from '../../framework/config/configBookstore'
import {
  AuthService,
  BookService,
  UserBookService,
  UserService
} from '../../framework'

import { books } from '../../framework/fixtures/Books.json'

describe('Book CRUD', () => {
  const userId = config.userId

  const [book1, book2, book3] = books

  let token

  beforeAll(async () => {
    const { data } = await AuthService.generateToken({
      userName: config.username,
      password: config.password
    })

    token = data.token
  })

  beforeEach(async () => {
    await UserBookService.removeAll({
      userId,
      token
    })
  })

  describe('GET /BookStore/v1/Book', () => {
    it.each([
      [book1.isbn],
      [book2.isbn],
      [book3.isbn]
    ])('Получение информации о книге ISBN=%s', async isbn => {
      const response = await BookService.getByISBN(isbn)

      expect(response.status).toBe(200)

      expect(response.data).toMatchObject({
        isbn,
        title: expect.any(String),
        author: expect.any(String),
        publisher: expect.any(String),
        pages: expect.any(Number)
      })
    })
  })

  describe('POST /BookStore/v1/Books', () => {
    it('Добавление книги пользователю', async () => {
      const response = await UserBookService.addList({
        userId,
        isbns: [book1.isbn],
        token
      })

      expect(response.status).toBe(201)

      expect(response.data).toEqual({
        books: [
          {
            isbn: book1.isbn
          }
        ]
      })

      const userResponse = await UserService.get({
        userId,
        token
      })

      expect(
  userResponse.data.books.some(book => book.isbn === book1.isbn)
).toBe(true)
    })
  })

  describe('PUT /BookStore/v1/Books/{ISBN}', () => {
    it('Обновление книги в коллекции пользователя', async () => {
      await UserBookService.addList({
        userId,
        isbns: [book1.isbn],
        token
      })

      const response = await UserBookService.replace({
        userId,
        fromIsbn: book1.isbn,
        toIsbn: book2.isbn,
        token
      })

      expect(response.status).toBe(200)

      expect(response.data).toMatchObject({
        userId,
        username: config.username,
        books: [book2]
      })
    })
  })

  describe('DELETE /BookStore/v1/Book', () => {
    it('Удаление книги из коллекции пользователя', async () => {
      await UserBookService.addList({
        userId,
        isbns: [book1.isbn],
        token
      })

      const response = await UserBookService.remove({
        userId,
        isbn: book1.isbn,
        token
      })

      expect(response.status).toBe(204)

      const userResponse = await UserService.get({
        userId,
        token
      })

      expect(userResponse.data.books).toEqual([])
    })
  })
})