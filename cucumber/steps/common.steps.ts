import { Given } from '@cucumber/cucumber'

import { CustomWorld } from '../support/world'

Given(
'пользователь находится на главной странице сайта',
async function (this: CustomWorld) {
await this.homePage.navigate()
}
)

