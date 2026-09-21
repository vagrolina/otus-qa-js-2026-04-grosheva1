import { test } from '@playwright/test'

import {
  HomePageClass,
  PricesPageClass
} from '../framework'

test('Переключение валюты в разделе цен', async ({ page }) => {
  const homePage = new HomePageClass(page)
  const pricesPage = new PricesPageClass(page)

  await homePage.navigate()
  await homePage.openAlliance()
  await homePage.openPrices()

  await pricesPage.checkCariesService()

  await pricesPage.selectCurrency('BYN')
  await pricesPage.checkCurrency('BYN')
  await pricesPage.checkCariesPrice('От 250 до 350')

  await pricesPage.selectCurrency('EUR')
  await pricesPage.checkCurrency('EUR')
  await pricesPage.checkCariesPrice('От 73 до 102')
})

