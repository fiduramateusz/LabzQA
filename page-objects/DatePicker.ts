import { expect, Locator, Page } from '@playwright/test';

export class DatePickerPage {
	readonly page: Page;
	readonly mainHeader: Locator;

	constructor(page: Page) {
		this.page = page;
		this.mainHeader = page.locator('#main-header');
	}

	async visit() {
		await this.page.goto('https://webdriveruniversity.com/Datepicker/');
	}

	async checkDCRPageHeader() {
		await expect(this.mainHeader).toContainText('Datepicker');
	}

	async setDate() {
		await this.page.locator('#datepicker').click();
		await this.page.locator("//td[contains(text(),'23')]").click();
		// assertion to add
	}
}
