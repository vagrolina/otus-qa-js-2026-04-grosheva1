import { test } from '@playwright/test'
import {
  HomePageClass,
  DoctorsPageClass
} from '../framework'

test('Фильтрация специалистов по направлению', async ({ page }) => {
  const homePage = new HomePageClass(page)
  const doctorsPage = new DoctorsPageClass(page)

  await homePage.navigate()
  await homePage.openDoctors()

  await doctorsPage.filterBySpecialization('Ортодонты')

  await doctorsPage.checkDoctor(
    'Кедык Полина Викторовна'
  )

  await doctorsPage.checkDoctorSpecialization(
    'Стоматолог-ортодонт'
  )
})
