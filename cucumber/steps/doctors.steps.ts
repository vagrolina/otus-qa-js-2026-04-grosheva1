import {
When,
Then
} from '@cucumber/cucumber'

import { CustomWorld } from '../support/world'

When(
'пользователь открывает раздел специалистов',
async function (this: CustomWorld) {
await this.homePage.openDoctors()
}
)

When(
'пользователь фильтрует специалистов по направлению {string}',
async function (
this: CustomWorld,
specialization: string
) {
await this.doctorsPage.filterBySpecialization(
specialization
)
}
)

Then(
'пользователь видит врача {string}',
async function (
this: CustomWorld,
doctorName: string
) {
await this.doctorsPage.checkDoctor(doctorName)
}
)

Then(
'пользователь видит специализацию врача {string}',
async function (
this: CustomWorld,
specialization: string
) {
await this.doctorsPage.checkDoctorSpecialization(
specialization
)
}
)
