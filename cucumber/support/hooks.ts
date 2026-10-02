import {
Before,
After,
setDefaultTimeout
} from '@cucumber/cucumber'

import { chromium } from 'playwright'

import {
HomePageClass,
DoctorsPageClass,
DoctorPageClass,
AppointmentPageClass,
PricesPageClass
} from '../../framework/pages'

import { CustomWorld } from './world'

setDefaultTimeout(15000)

Before(async function (this: CustomWorld) {
this.browser = await chromium.launch({
headless: true
})

this.context = await this.browser.newContext({
baseURL: 'https://aldent.by'
})

this.page = await this.context.newPage()

this.homePage = new HomePageClass(this.page)
this.doctorsPage = new DoctorsPageClass(this.page)
this.doctorPage = new DoctorPageClass(this.page)
this.appointmentPage = new AppointmentPageClass(this.page)
this.pricesPage = new PricesPageClass(this.page)
})

After(async function (this: CustomWorld) {
if (this.context) {
await this.context.close()
}

if (this.browser) {
await this.browser.close()
}
})
