import { expect, Locator, Page } from '@playwright/test';

export class AjaxLoaderPage {
	readonly page: Page;
	readonly button1: Locator;

	constructor(page: Page) {
		this.page = page;
		this.button1 = page.locator('#button1');
	}

	async visit() {
		await this.page.goto('https://webdriveruniversity.com/Ajax-Loader/');
	}

	async waitForButton() {
		await this.page.waitForSelector('#button1');
		await this.button1.click();
		await this.page.waitForSelector('h4')
	}
}
