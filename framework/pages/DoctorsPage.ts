import type { Page } from 'playwright-core'
import { expect } from '@playwright/test'

export function DoctorsPage({ page }: { page: Page }) {
  const filterBySpecialization = async (
    specialization: string
  ) => {
    await page
      .getByRole('button', {
        name: specialization
      })
      .click()
  }

  const checkDoctor = async (doctorName: string) => {
    await expect(
      page.getByText(doctorName).first()
    ).toBeVisible()
  }

  const openDoctor = async (doctorName: string) => {
    await page
      .getByRole('link', {
        name: doctorName
      })
      .click()
  }

  const checkDoctorSpecialization = async (
    specialization: string
  ) => {
    await expect(
      page.getByText(specialization).first()
    ).toBeVisible()
  }

  return {
    filterBySpecialization,
    checkDoctor,
    openDoctor,
    checkDoctorSpecialization
  }
}
