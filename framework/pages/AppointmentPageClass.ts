import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'
import { BasePageClass } from './BasePageClass'

export class AppointmentPageClass extends BasePageClass {
  private nameInput = 'Имя*'
  private phoneInput = 'Телефон*'
  private questionInput = 'Вопрос, причина обращения'
  private submitButton = 'Отправить'
  private doctorSelect = 'Врач, направление'
  private privacyPolicyLink = 'Политики конфиденциальности'
  private closeButton = '.modal__close-btn'

  constructor(page: Page) {
    super(page)
  }

  async checkForm() {
    const dialog = this.page.getByRole('dialog')

    await expect(dialog).toBeVisible()

    await expect(
      dialog.getByPlaceholder(this.nameInput)
    ).toBeVisible()

    await expect(
      dialog.getByPlaceholder(this.phoneInput)
    ).toBeVisible()

    await expect(
      dialog.getByPlaceholder(this.questionInput)
    ).toBeVisible()
  }

  async fillName(name: string) {
    await this.page
      .getByRole('dialog')
      .getByPlaceholder(this.nameInput)
      .fill(name)
  }

  async fillPhone(phone: string) {
    await this.page
      .getByRole('dialog')
      .getByPlaceholder(this.phoneInput)
      .fill(phone)
  }

  async fillQuestion(question: string) {
    await this.page
      .getByRole('dialog')
      .getByPlaceholder(this.questionInput)
      .fill(question)
  }

  async acceptPersonalData() {
    await this.page
      .getByRole('checkbox', {
        name: /Я согласен на обработку персональных данных/
      })
      .check()
  }

  async submit() {
    await this.page
      .getByRole('dialog')
      .getByRole('button', {
        name: this.submitButton
      })
      .click()
  }

  async checkSuccessMessage() {
    await expect(
      this.page.getByText(
        'Спасибо! Форма успешно отправлена'
      )
    ).toBeVisible()
  }

  async selectDoctor(doctorName: string) {
    const dialog = this.page.getByRole('dialog')

    await dialog
      .getByText(this.doctorSelect)
      .click()

    await dialog
      .getByText(doctorName)
      .click()
  }

  async checkSelectedDoctor(doctorName: string) {
    await expect(
      this.page
        .getByRole('dialog')
        .locator('.select__active')
    ).toHaveText(doctorName)
  }

  async openPrivacyPolicy() {
    const pagePromise = this.page.waitForEvent('popup')

    await this.page
      .getByRole('dialog')
      .getByRole('link', {
        name: this.privacyPolicyLink
      })
      .click()

    return await pagePromise
  }

  async checkPrivacyPolicy(privacyPage: Page) {
    await expect(
      privacyPage.getByRole('heading', {
        name: 'Политика конфиденциальности'
      })
    ).toBeVisible()
  }

  async close() {
    await this.page
      .locator(this.closeButton)
      .first()
      .click()
  }
}

