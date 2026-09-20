import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'

export function DoctorPage({ page }: { page: Page }) {
  const visit = async () => {
    await page.goto('/doctor/kedyk-polina-viktorovna/')
  }

  const checkDoctor = async () => {
    await expect(
      page.getByRole('img', {
        name: 'Кедык Полина Викторовна'
      })
    ).toBeVisible()

    await expect(
      page.getByRole('heading', {
        name: 'Кедык Полина Викторовна'
      })
    ).toBeVisible()
  }

  const checkDoctorInfo = async () => {
    await expect(
      page.getByText(
        'Врач-стоматолог-ортодонт 2-ой квалификационной категории'
      )
    ).toBeVisible()

    await expect(
      page.getByText('Сфера интересов')
    ).toBeVisible()

    await expect(
      page.getByText('Дополнительное образование:')
    ).toBeVisible()

    await expect(
      page.getByText('Образование:', { exact: true })
    ).toBeVisible()

    await expect(
      page.getByText('Опыт работы:')
    ).toBeVisible()

    await expect(
      page.getByRole('heading', {
        name: 'Примеры работ'
      })
    ).toBeVisible()
  }

  const clickAppointment = async () => {
    await page
      .getByRole('button', {
        name: 'Записаться на прием'
      })
      .click()
  }

  return {
    visit,
    checkDoctor,
    checkDoctorInfo,
    clickAppointment
  }
}

