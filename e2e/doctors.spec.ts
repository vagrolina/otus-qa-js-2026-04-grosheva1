import { test } from '@playwright/test'
import {
  HomePage,
  DoctorsPage
} from '../framework'

test('Фильтрация специалистов по направлению', async ({ page }) => {
  const homePage = HomePage({ page })
  const doctorsPage = DoctorsPage({ page })

  await homePage.visit()
  await homePage.clickDoctors()

  await doctorsPage.filterBySpecialization('Ортодонты')

  await doctorsPage.checkDoctor(
    'Кедык Полина Викторовна'
  )

  await doctorsPage.checkDoctorSpecialization(
    'Стоматолог-ортодонт'
  )
})

