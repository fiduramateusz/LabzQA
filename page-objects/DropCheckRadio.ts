import { expect, Locator, Page } from '@playwright/test';

export class DropCheckRadioPage {
	readonly page: Page;
	readonly mainHeader: Locator;

	constructor(page: Page) {
		this.page = page;
		this.mainHeader = page.locator('#main-header');
	}

	async visit() {
		await this.page.goto(
			'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/'
		);
	}

	async checkDCRPageHeader() {
		await expect(this.mainHeader).toContainText(
			'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)'
		);
	}

}
