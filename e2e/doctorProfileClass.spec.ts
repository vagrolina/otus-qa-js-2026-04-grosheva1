import { test } from '@playwright/test'
import { DoctorPageClass } from '../framework'

test('Проверка информации о враче', async ({ page }) => {
  const doctorPage = new DoctorPageClass(page)

  await doctorPage.navigate()
  await doctorPage.checkDoctor()
  await doctorPage.checkDoctorInfo()
})
