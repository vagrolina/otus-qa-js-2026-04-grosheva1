import { fullTrim, getTotal, nameIsValid } from '../src/app.js';

describe('nameIsValid', () => {
  test('возвращает true для корректного имени', () => {
    expect(nameIsValid('vasilina')).toBe(true)
  })

  test('возвращает false если имя короче 2 символов', () => {
    expect(nameIsValid('i')).toBe(false)
  })

  test('возвращает false если есть заглавные буквы', () => {
    expect(nameIsValid('Vasilina')).toBe(false)
  })

  test('возвращает false если имя содержит цифры', () => {
    expect(nameIsValid('vasya123')).toBe(false)
  })
})

describe('fullTrim', () => {
  test('удаляет пробелы внутри строки', () => {
    expect(fullTrim(' hello world ')).toBe('helloworld')
  })

  test('удаляет табы и переносы строк', () => {
    expect(fullTrim(' h\ne\tl l o ')).toBe('hello')
  })

  test('возвращает пустую строку если передан null', () => {
    expect(fullTrim(null)).toBe('')
  })

  test('возвращает пустую строку если передан undefined', () => {
    expect(fullTrim(undefined)).toBe('')
  })
})

describe('getTotal', () => {
  test('считает сумму одного товара', () => {
    expect(
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
      getTotal([{ price: 10, quantity: 2 }])
    ).toBe(20)
  })

  test('считает сумму нескольких товаров', () => {
    expect(
      getTotal([
        // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
        { price: 10, quantity: 2 },
        // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
        { price: 5, quantity: 4 }
      ])
    ).toBe(40)
  })

  test('применяет скидку', () => {
    expect(
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
      getTotal([{ price: 100, quantity: 1 }], 10)
    ).toBe(90)
  })

  test('выбрасывает ошибку если скидка не число', () => {
    expect(() => {
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
      getTotal([{ price: 10, quantity: 1 }], 'string')
    }).toThrow('Скидка должна быть числом')
  })

  test('выбрасывает ошибку если скидка меньше 0', () => {
    expect(() => {
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
      getTotal([{ price: 10, quantity: 1 }], -1)
    }).toThrow('Процент скидки должен быть от 0 до 99')
  })

  test('выбрасывает ошибку если скидка больше или равна 100', () => {
    expect(() => {
      // @ts-expect-error TS(2322): Type 'number' is not assignable to type 'never'.
      getTotal([{ price: 10, quantity: 1 }], 100)
    }).toThrow('Процент скидки должен быть от 0 до 99')
  })

  // параметризованный тест
  test.each([
    [[{ price: 10, quantity: 1 }], 0, 10],
    [[{ price: 10, quantity: 2 }], 50, 10],
    [[{ price: 20, quantity: 5 }], 10, 90]
  ])(
    'корректно считает total для items=%o и discount=%i',
    (items, discount, expected) => {
      // @ts-expect-error TS(2345): Argument of type '{ price: number; quantity: numbe... Remove this comment to see the full error message
      expect(getTotal(items, discount)).toBe(expected)
    }
  )
})