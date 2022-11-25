import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../page-objects/DatePicker';

test.describe('DatePicker', () => {
	let datePickerPage: DatePickerPage;
	test.beforeEach(async ({ page }) => {
		datePickerPage = new DatePickerPage(page);
		await datePickerPage.visit();
	});

	test('Enter the date and check if the date is correct', async ({ page }) => {
		await datePickerPage.setDate();
	});
});
