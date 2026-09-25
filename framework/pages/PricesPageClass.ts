import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'
import { BasePageClass } from './BasePageClass'

export class PricesPageClass extends BasePageClass {
  private readonly currencyButton = (currency: string) =>
    this.page.getByRole('button', {
      name: currency,
      exact: true
    })

  private readonly pricesTable = this.page.getByRole('table')

  constructor(page: Page) {
    super(page)
  }

  async selectCurrency(currency: string) {
    await this.currencyButton(currency).click()
  }

  async checkCurrency(currency: string) {
    await expect(
      this.pricesTable.getByRole('cell', {
        name: `Цена, ${currency}`,
        exact: true
      })
    ).toBeVisible()
  }

  async checkCariesService() {
    await expect(
      this.pricesTable.getByRole('cell', {
        name: 'Лечение кариеса',
        exact: true
      })
    ).toBeVisible()
  }

  async checkCariesPrice(price: string) {
    const cariesRow = this.pricesTable.getByRole('row').filter({
      has: this.page.getByRole('cell', {
        name: 'Лечение кариеса',
        exact: true
      })
    })

    await expect(cariesRow).toContainText(price)
  }
}
