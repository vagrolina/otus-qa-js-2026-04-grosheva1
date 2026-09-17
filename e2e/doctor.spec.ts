import { test } from '@playwright/test'
import {
  DoctorPage,
  AppointmentPage
} from '../framework'

test('Запись на прием к врачу', async ({ page }) => {
  const doctorPage = DoctorPage({ page })
  const appointmentPage = AppointmentPage({ page })

  await doctorPage.visit()

  await doctorPage.checkDoctor()

  await doctorPage.clickAppointment()

  await appointmentPage.checkForm()

  await appointmentPage.selectDoctor(
    'Кедык Полина Викторовна, Стоматолог-ортодонт'
  )

  await appointmentPage.checkSelectedDoctor(
    'Кедык Полина Викторовна, Стоматолог-ортодонт'
  )
})
