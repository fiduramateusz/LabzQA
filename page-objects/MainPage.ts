import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
	readonly mainPage: Page;
	readonly contactUS: Locator;
	readonly loginPortal: Locator;
	readonly buttonClicks: Locator;
	readonly toDoList: Locator;
	readonly pageObject: Locator;
	readonly accordin: Locator;
	readonly dropDown: Locator;
	readonly ajaxLoader: Locator;
	readonly action: Locator;
	readonly scrollingAround: Locator;
	readonly popUpAlerts: Locator;
	readonly iframe: Locator;
	readonly hidenElements: Locator;
	readonly data: Locator;
	readonly autocomplete: Locator;
	readonly fileUpload: Locator;
	readonly datePicker: Locator;

	constructor(page: Page) {
		this.mainPage = page;
		this.contactUS = page.locator('#contact-us');
	}

	async openMainPage() {
		await this.mainPage.goto('https://webdriveruniversity.com/');
	}
}
