import {
  Given,
  When,
  Then
} from '@cucumber/cucumber'

import { CustomWorld } from '../support/world'

Given(
  'пользователь открывает раздел цен',
  async function (this: CustomWorld) {
    await this.homePage.openAlliance()
    await this.homePage.openPrices()
  }
)

Given(
  'пользователь видит услугу Лечение кариеса',
  async function (this: CustomWorld) {
    await this.pricesPage.checkCariesService()
  }
)

When(
  'пользователь выбирает валюту {string}',
  async function (this: CustomWorld, currency: string) {
    await this.pricesPage.selectCurrency(currency)
  }
)

Then(
  'пользователь видит выбранную валюту {string}',
  async function (this: CustomWorld, currency: string) {
    await this.pricesPage.checkCurrency(currency)
  }
)

Then(
  'пользователь видит цену лечения кариеса {string}',
  async function (this: CustomWorld, price: string) {
    await this.pricesPage.checkCariesPrice(price)
  }
)
