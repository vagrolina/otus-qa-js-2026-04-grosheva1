import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'

export function PricesPage({ page }: { page: Page }) {
  const selectCurrency = async (currency: string) => {
    await page
      .getByRole('button', { name: currency })
      .click()
  }

  const checkCurrencyColumn = async (currency: string) => {
    await expect(
      page.getByRole('cell', {
        name: `Цена, ${currency}`
      })
    ).toBeVisible()
  }

  const checkCariesService = async () => {
    await expect(
      page.getByRole('cell', {
        name: 'Лечение кариеса',
        exact: true
      })
    ).toBeVisible()
  }

  const checkCariesPrice = async (price: string) => {
    await expect(
      page.getByRole('cell', {
        name: price
      })
    ).toBeVisible()
  }

  return {
    selectCurrency,
    checkCurrencyColumn,
    checkCariesService,
    checkCariesPrice
  }
}
