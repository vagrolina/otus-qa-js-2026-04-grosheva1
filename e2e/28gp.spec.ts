import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://28gp.by/')
})

test('Отображение главной страницы', async ({ page }) => {
  await expect(page.locator('body')).toContainText('28-я городская поликлиника')
  await expect(page.locator('body')).toContainText('ул. Гинтовта, 28, г. Минск, 220125')
  await expect(page.locator('a[href*="talon"]').first()).toHaveCount(1)
  await expect(page.locator('a[href*="raspisanie"]').first()).toHaveCount(1)
})

test('Поиск информации на сайте', async ({ page }) => {
  const search = page.getByPlaceholder('поиск...')
  await search.fill('врачи')
  await search.press('Enter')

  await expect(page).toHaveURL(/search|28gp\.by/i)
  await expect(page.locator('body')).toContainText(/врачи|результаты поиска/i)
})

test('Просмотр расписания врачей', async ({ page }) => {
  await page.goto('https://28gp.by/о-поликлинике/raspisanie-vrachei')

  await expect(page).toHaveURL(/raspisanie/i)
  await expect(page.locator('body')).toContainText(/расписание|график приема|врач/i)
})

test('Просмотр отделения поликлиники', async ({ page }) => {
  await page.goto(
    'https://28gp.by/о-поликлинике/отделения/отделение-общей-врачебной-практики-№1'
  )

  await expect(page.locator('body')).toContainText(
    'Отделение общей врачебной практики №1'
  )
})


test('Открытие новости', async ({ page }) => {
  await page.goto('https://28gp.by/')

  await page.locator('.close').click()

  await page.getByRole('link', { name: /Читать/i }).first().click()

  await expect(page.locator('body')).toContainText(
    /Кибербезопасность|Республиканская информационно-образовательная акция|Уважаемые пациенты/i
  )
})

