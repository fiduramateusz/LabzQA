import { test, expect } from '@playwright/test';
import { MainPage } from '../page-objects/MainPage';

test.describe.parallel('Open main page', () => {
	let mainPage: MainPage;

	test.beforeEach(async ({ page }) => {
		mainPage = new MainPage(page);
		await mainPage.openMainPage();
	});
});
