import { test } from '@playwright/test'
import { DoctorPage } from '../framework'

test('Проверка информации о враче', async ({ page }) => {
  const doctorPage = DoctorPage({ page })

  await doctorPage.visit()

  await doctorPage.checkDoctor()
  await doctorPage.checkDoctorInfo()
})

