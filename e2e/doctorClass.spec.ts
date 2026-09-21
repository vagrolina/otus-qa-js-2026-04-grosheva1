import { test } from '@playwright/test'
import {
  DoctorPageClass,
  AppointmentPageClass
} from '../framework'

test('Запись на прием к врачу', async ({ page }) => {
  const doctorPage = new DoctorPageClass(page)
  const appointmentPage = new AppointmentPageClass(page)

  await doctorPage.navigate()
  await doctorPage.checkDoctor()
  await doctorPage.openAppointment()

  await appointmentPage.checkForm()

  await appointmentPage.selectDoctor(
    'Кедык Полина Викторовна, Стоматолог-ортодонт'
  )

  await appointmentPage.checkSelectedDoctor(
    'Кедык Полина Викторовна, Стоматолог-ортодонт'
  )
})
