import { test } from '@playwright/test';
import { AutocompletePage } from '../page-objects/AutocompletePage';

test.describe('Autocomplete TextField', () => {
	let autocompletePage: AutocompletePage;
	test.beforeEach(async ({ page }) => {
		autocompletePage = new AutocompletePage(page);
		await autocompletePage.visit();
	});

	test('Checking the Autocomplete TextField header', async ({ page }) => {
		await autocompletePage.checkDCRPageHeader()
	});

    test('Should type thre chars and select second item', async( {page}) => {
        await autocompletePage.typeThreeCharsAndSelectSecondItem('gra')
    
    })
});
