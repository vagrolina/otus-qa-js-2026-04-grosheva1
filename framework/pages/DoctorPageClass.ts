import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'
import { BasePageClass } from './BasePageClass'

export class DoctorPageClass extends BasePageClass {
  private doctorUrl = '/doctor/kedyk-polina-viktorovna/'
  private doctorName = 'Кедык Полина Викторовна'
  private appointmentButton = 'Записаться на прием'

  constructor(page: Page) {
    super(page)
  }

  async navigate() {
    await super.navigateTo(this.doctorUrl)
  }

  async checkDoctor() {
    await expect(
      this.page.getByRole('img', {
        name: this.doctorName
      })
    ).toBeVisible()

    await expect(
      this.page.getByRole('heading', {
        name: this.doctorName
      })
    ).toBeVisible()
  }

  async checkDoctorInfo() {
    await expect(
      this.page.getByText(
        'Врач-стоматолог-ортодонт 2-ой квалификационной категории'
      )
    ).toBeVisible()

    await expect(
      this.page.getByText('Сфера интересов')
    ).toBeVisible()

    await expect(
      this.page.getByText('Дополнительное образование:')
    ).toBeVisible()

    await expect(
      this.page.getByText('Образование:', {
        exact: true
      })
    ).toBeVisible()

    await expect(
      this.page.getByText('Опыт работы:')
    ).toBeVisible()

    await expect(
      this.page.getByRole('heading', {
        name: 'Примеры работ'
      })
    ).toBeVisible()
  }

  async openAppointment() {
    await this.page
      .getByRole('button', {
        name: this.appointmentButton
      })
      .click()
  }
}

