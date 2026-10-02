import {
When,
Then
} from '@cucumber/cucumber'

import { CustomWorld } from '../support/world'

When(
'пользователь открывает форму записи на консультацию',
async function (this: CustomWorld) {
await this.homePage.openConsultation()
}
)

When(
'пользователь заполняет имя {string}',
async function (this: CustomWorld, name: string) {
await this.appointmentPage.fillName(name)
}
)

When(
'пользователь заполняет номер телефона {string}',
async function (this: CustomWorld, phone: string) {
await this.appointmentPage.fillPhone(phone)
}
)

When(
'пользователь указывает причину обращения {string}',
async function (this: CustomWorld, question: string) {
await this.appointmentPage.fillQuestion(question)
}
)

When(
'пользователь соглашается на обработку персональных данных',
async function (this: CustomWorld) {
await this.appointmentPage.acceptPersonalData()
}
)

When(
'пользователь отправляет заявку',
async function (this: CustomWorld) {
await this.appointmentPage.submit()
}
)

Then(
'пользователь видит сообщение об успешной отправке заявки',
async function (this: CustomWorld) {
await this.appointmentPage.checkSuccessMessage()
}
)

When(
'пользователь открывает форму записи на прием',
async function (this: CustomWorld) {
await this.doctorPage.openAppointment()
}
)

When(
'пользователь выбирает врача Кедык Полина Викторовна, Стоматолог-ортодонт',
async function (this: CustomWorld) {
await this.appointmentPage.selectDoctor(
'Кедык Полина Викторовна, Стоматолог-ортодонт'
)
}
)

Then(
'пользователь видит выбранного врача в форме записи',
async function (this: CustomWorld) {
await this.appointmentPage.checkSelectedDoctor(
'Кедык Полина Викторовна, Стоматолог-ортодонт'
)
}
)

