import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'

export function AppointmentPage({ page }: { page: Page }) {
  const checkForm = async () => {
    await expect(page.getByRole('dialog')).toBeVisible()

    await expect(
      page.getByRole('dialog').getByPlaceholder('Имя*')
    ).toBeVisible()

    await expect(
      page.getByRole('dialog').getByPlaceholder('Телефон*')
    ).toBeVisible()

    await expect(
      page
        .getByRole('dialog')
        .getByPlaceholder('Вопрос, причина обращения')
    ).toBeVisible()
  }

  const fillName = async (name: string) => {
    await page
      .getByRole('dialog')
      .getByPlaceholder('Имя*')
      .fill(name)
  }

  const fillPhone = async (phone: string) => {
    await page
      .getByRole('dialog')
      .getByPlaceholder('Телефон*')
      .fill(phone)
  }

  const fillQuestion = async (question: string) => {
    await page
      .getByRole('dialog')
      .getByPlaceholder('Вопрос, причина обращения')
      .fill(question)
  }

  const acceptPersonalData = async () => {
    await page
      .getByRole('checkbox', {
        name: /Я согласен на обработку персональных данных/
      })
      .check()
  }

  const submit = async () => {
    await page
      .getByRole('dialog')
      .getByRole('button', { name: 'Отправить' })
      .click()
  }

  const checkSuccessMessage = async () => {
    await expect(
      page.getByText('Спасибо! Форма успешно отправлена')
    ).toBeVisible()
  }

  const selectDoctor = async (doctorName: string) => {
    await page
      .getByRole('dialog')
      .getByText('Врач, направление')
      .click()

    await page
      .getByRole('dialog')
      .getByText(doctorName)
      .click()
  }

  const checkSelectedDoctor = async (doctorName: string) => {
  await expect(
    page
      .getByRole('dialog')
      .locator('.select__active')
  ).toHaveText(doctorName)
}

  const openPrivacyPolicy = async () => {
    const pagePromise = page.waitForEvent('popup')

    await page
      .getByRole('dialog')
      .getByRole('link', {
        name: 'Политики конфиденциальности'
      })
      .click()

    return await pagePromise
  }

  const checkPrivacyPolicy = async (privacyPage: Page) => {
    await expect(
      privacyPage.getByRole('heading', {
        name: 'Политика конфиденциальности'
      })
    ).toBeVisible()
  }

  const close = async () => {
    await page
      .locator('.modal__close-btn')
      .first()
      .click()
  }

  return {
    checkForm,
    fillName,
    fillPhone,
    fillQuestion,
    acceptPersonalData,
    submit,
    checkSuccessMessage,
    selectDoctor,
    checkSelectedDoctor,
    openPrivacyPolicy,
    checkPrivacyPolicy,
    close
  }
}
