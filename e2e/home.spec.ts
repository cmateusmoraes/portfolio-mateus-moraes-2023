import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Mateus Moraes/i)
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Mateus Moraes')).toBeVisible()
  })

  test('should have portfolio section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#portfolio')).toBeVisible()
  })

  test('should have about section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#about')).toBeVisible()
  })

  test('should navigate to portfolio section', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="#portfolio"]')
    await expect(page.locator('#portfolio')).toBeInViewport()
  })
})
