import type { Page } from 'playwright-core'

export class BasePageClass {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }

  async navigateTo(url: string) {
    await this.page.goto(url)
  }
}