import { test } from '@playwright/test'
import {
  HomePage,
  PricesPage
} from '../framework'

test('Переключение валюты в разделе цен', async ({ page }) => {
  const homePage = HomePage({ page })
  const pricesPage = PricesPage({ page })

  await homePage.visit()
  await homePage.clickAlliance()
  await homePage.clickPrices()

  await pricesPage.checkCariesService()

  await pricesPage.selectCurrency('BYN')
  await pricesPage.checkCurrencyColumn('BYN')
  await pricesPage.checkCariesPrice('От 250 до')

  await pricesPage.selectCurrency('EUR')
  await pricesPage.checkCurrencyColumn('EUR')
  await pricesPage.checkCariesPrice('От 73 до')
})
