import { test } from '@playwright/test'
import {
  HomePage,
  AppointmentPage
} from '../framework'

test('Отправка заявки на консультацию', async ({ page }) => {
  const homePage = HomePage({ page })
  const appointmentPage = AppointmentPage({ page })

  await homePage.visit()
  await homePage.clickConsultation()

  await appointmentPage.checkForm()

  await appointmentPage.fillName('Василина')
  await appointmentPage.fillPhone('+375291234567')
  await appointmentPage.fillQuestion('Лечение кариеса')
  await appointmentPage.acceptPersonalData()

  await appointmentPage.submit()

  await appointmentPage.checkSuccessMessage()
})
