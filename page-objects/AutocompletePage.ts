import { expect, Locator, Page } from '@playwright/test';

let textInput = '#myInput';
let secondItem = 'Grapes';
let itemLocator = '//*[@id="myInputautocomplete-list"]/div[2]';

export class AutocompletePage {
	readonly page: Page;
	readonly mainHeader: Locator;

	constructor(page: Page) {
		this.page = page;
		this.mainHeader = page.locator('h2');
	}

	async visit() {
		await this.page.goto(
			'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'
		);
	}

	async checkDCRPageHeader() {
		await expect(this.mainHeader).toContainText('Autocomplete TextField');
	}

	async typeThreeCharsAndSelectSecondItem(typedWord: string) {
		await this.page.locator(textInput).type(typedWord);
		await this.page.locator(itemLocator).click();
		expect(this.page.locator(textInput)).toHaveValue(secondItem);
	}
}
