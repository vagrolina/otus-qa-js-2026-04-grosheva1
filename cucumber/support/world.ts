import {
World,
IWorldOptions,
setWorldConstructor
} from '@cucumber/cucumber'

import type {
Browser,
BrowserContext,
Page
} from 'playwright'

import {
HomePageClass,
DoctorsPageClass,
DoctorPageClass,
AppointmentPageClass,
PricesPageClass
} from '../../framework/pages'

export class CustomWorld extends World {
browser!: Browser
context!: BrowserContext
page!: Page

homePage!: HomePageClass
doctorsPage!: DoctorsPageClass
doctorPage!: DoctorPageClass
appointmentPage!: AppointmentPageClass
pricesPage!: PricesPageClass

constructor(options: IWorldOptions) {
super(options)
}
}

setWorldConstructor(CustomWorld)
