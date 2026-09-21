import { test } from '@playwright/test'
import {
  HomePageClass,
  AppointmentPageClass
} from '../framework'

test('Отправка заявки на консультацию', async ({ page }) => {
  const homePage = new HomePageClass(page)
  const appointmentPage = new AppointmentPageClass(page)

  await homePage.navigate()
  await homePage.openConsultation()

  await appointmentPage.checkForm()
  await appointmentPage.fillName('Василина')
  await appointmentPage.fillPhone('+375291234567')
  await appointmentPage.fillQuestion('Лечение кариеса')
  await appointmentPage.acceptPersonalData()
  await appointmentPage.submit()
  await appointmentPage.checkSuccessMessage()
})
