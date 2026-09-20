import type { Page } from 'playwright-core'

export function HomePage({ page }: { page: Page }) {
  const visit = async () => {
    await page.goto('/')
  }

  const clickConsultation = async () => {
    await page
      .getByRole('button', { name: 'Записаться на консультацию' })
      .click()
  }

  const clickAlliance = async () => {
    await page
      .getByRole('link', { name: 'Альянс' })
      .click()
  }

  const clickPrices = async () => {
    await page
      .locator('#nav-menu-item-1285')
      .getByRole('link', { name: 'Цены' })
      .click()
  }

  const clickDoctors = async () => {
    await page
      .locator('#nav-menu-item-1286')
      .getByRole('link', { name: 'Специалисты' })
      .click()
  }

  return {
    visit,
    clickConsultation,
    clickAlliance,
    clickPrices,
    clickDoctors
  }
}

