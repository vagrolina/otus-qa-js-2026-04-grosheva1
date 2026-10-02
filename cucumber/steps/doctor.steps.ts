import {
Given,
Then
} from '@cucumber/cucumber'

import { CustomWorld } from '../support/world'

Given(
'пользователь открыл профиль врача Кедык Полина Викторовна',
async function (this: CustomWorld) {
await this.doctorPage.navigate()
await this.doctorPage.checkDoctor()
}
)

Then(
'пользователь видит информацию о враче',
async function (this: CustomWorld) {
await this.doctorPage.checkDoctorInfo()
}
)
