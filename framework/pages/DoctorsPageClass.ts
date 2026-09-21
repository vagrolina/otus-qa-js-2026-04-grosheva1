import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'
import { BasePageClass } from './BasePageClass'

export class DoctorsPageClass extends BasePageClass {
  constructor(page: Page) {
    super(page)
  }

  async filterBySpecialization(specialization: string) {
    await this.page
      .getByRole('button', {
        name: specialization
      })
      .click()
  }

  async checkDoctor(doctorName: string) {
    await expect(
      this.page.getByText(doctorName).first()
    ).toBeVisible()
  }

  async openDoctor(doctorName: string) {
    await this.page
      .getByRole('link', {
        name: doctorName
      })
      .click()
  }

  async checkDoctorSpecialization(specialization: string) {
    await expect(
      this.page.getByText(specialization).first()
    ).toBeVisible()
  }
}
