import type { Page } from 'playwright-core'
import { BasePageClass } from './BasePageClass'

export class HomePageClass extends BasePageClass {
  private consultationButton = 'Записаться на консультацию'
  private allianceLink = 'Альянс'
  private pricesMenu = '#nav-menu-item-1285'
  private doctorsMenu = '#nav-menu-item-1286'

  constructor(page: Page) {
    super(page)
  }

  async navigate() {
    await super.navigateTo('/')
  }

  async openConsultation() {
    await this.page
      .getByRole('button', {
        name: this.consultationButton
      })
      .click()
  }

  async openAlliance() {
    await this.page
      .getByRole('link', {
        name: this.allianceLink
      })
      .click()
  }

  async openPrices() {
    await this.page
      .locator(this.pricesMenu)
      .getByRole('link', {
        name: 'Цены'
      })
      .click()
  }

  async openDoctors() {
    await this.page
      .locator(this.doctorsMenu)
      .getByRole('link', {
        name: 'Специалисты'
      })
      .click()
  }
}

