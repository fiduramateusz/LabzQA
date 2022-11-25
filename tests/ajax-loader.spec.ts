import { test, expect } from '@playwright/test';
import { AjaxLoaderPage } from '../page-objects/AjaxLoaderPage';

test.describe('Ajax Loader', () => {
	let ajaxLoader: AjaxLoaderPage;
	test.beforeEach(async ({ page }) => {
		ajaxLoader = new AjaxLoaderPage(page);
		await ajaxLoader.visit();
	});

	test('Wait for the Click me button', async ({ page }) => {
		await ajaxLoader.waitForButton();
	});
});
