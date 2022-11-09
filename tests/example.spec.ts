import { test, expect } from '@playwright/test';
import { MainPage } from '../page-objects/MainPage';

test.describe.parallel.only('Open main page', () => {
	let mainPage: MainPage;

	test.beforeEach(async ({ page }) => {
		mainPage = new MainPage(page);
		await mainPage.openMainPage();
	});

	test('Open a contact us page', async ({ page }) => {
		await mainPage.openContactUs();

		
	})

});

