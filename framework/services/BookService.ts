// @ts-expect-error TS(7016): Could not find a declaration file for module 'supe... Remove this comment to see the full error message
import supertest from 'supertest'
import config from '../config/configBookstore'

const getBooks = async () => {
  const response = await supertest(config.baseURL)
    .get('/BookStore/v1/Books')

  return {
    headers: response.headers,
    status: response.status,
    data: response.body
  }
}

const getBookByISBN = async (isbn: any) => {
  const response = await supertest(config.baseURL)
    .get(`/BookStore/v1/Book?ISBN=${isbn}`)

  return {
    headers: response.headers,
    status: response.status,
    data: response.body
  }
}

export default {
  getAll: getBooks,
  getByISBN: getBookByISBN
}