import 'dotenv/config'

// Object.freeze используем, чтобы запретить изменять конфиг,
// конфиг только для чтения
export default Object.freeze({
  // если хотим задать значения по-умолчанию, можно использовать оператор ??
  // @ts-expect-error TS(2591): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  baseURL: process.env.TEST_BOOKSTORE_API_URL ?? 'https://bookstore.demoqa.com',
  // @ts-expect-error TS(2591): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  userId: process.env.TEST_BOOKSTORE_USER_ID,
  // @ts-expect-error TS(2591): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  username: process.env.TEST_BOOKSTORE_USERNAME,
  // @ts-expect-error TS(2591): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  password: process.env.TEST_BOOKSTORE_PASSWORD
})