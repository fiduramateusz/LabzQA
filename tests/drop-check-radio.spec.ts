import { test, expect } from '@playwright/test';
import { DropCheckRadioPage } from '../page-objects/DropCheckRadio';

const dropdownValues1 = [
	{
		name: 'Python',
		value: 'python',
	},
	{
		name: 'JAVA',
		value: 'java',
	},
	{
		name: 'C#',
		value: 'c#',
	},

	{
		name: 'SQL',
		value: 'sql',
	},
];
const dropdownValues2 = [
	{
		name: 'Eclipse',
		value: 'eclipse',
	},
	{
		name: 'Maven',
		value: 'maven',
	},
	{
		name: 'TestNG',
		value: 'testng',
	},
	{
		name: 'JUnit',
		value: 'junit',
	},
];
const dropdownValues3 = [
	{
		name: 'HTML',
		value: 'html',
	},
	{
		name: 'CSS',
		value: 'css',
	},
	{
		name: 'JavaScript',
		value: 'javascript',
	},
	{
		name: 'JQuery',
		value: 'jquery',
	},
];

const checkboxOption = [
	{
		option: 'Option 1',
	},
	{
		option: 'Option 2',
	},
	{
		option: 'Option 3',
	},
	{
		option: 'Option 4',
	},
];

const radioButtons = [
	{
		name: "input[value='green']",
	},
	{
		name: "input[value='blue']",
	},
	{
		name: "input[value='yellow']",
	},
	{
		name: "input[value='orange']",
	},
	{
		name: "input[value='purple']",
	},
];

test.describe('Dropdown Menu(s)', () => {
	let dropCheckRadioPage: DropCheckRadioPage;

	test.beforeEach(async ({ page }) => {
		dropCheckRadioPage = new DropCheckRadioPage(page);
		await dropCheckRadioPage.visit();
	});

	test('Open a Dropdown Menu(s), Checkboxe(s) Radio Button(s) page', async ({
		page,
	}) => {
		await dropCheckRadioPage.checkDCRPageHeader();
	});

	dropdownValues1.forEach((data) => {
		test(`Pick the options and check if they values are correct to: ${data.name}`, async ({
			page,
		}) => {
			await page.selectOption('#dropdowm-menu-1', {
				label: data.name,
			});
			expect(page.locator('#dropdowm-menu-1')).toHaveValue(data.value);
		});
	});
	dropdownValues2.forEach((data) => {
		test(`Pick the option and check if the value is set to: ${data.name}`, async ({
			page,
		}) => {
			await page.selectOption('#dropdowm-menu-2', {
				label: data.name,
			});
			expect(page.locator('#dropdowm-menu-2')).toHaveValue(data.value);
		});
	});
	dropdownValues3.forEach((data) => {
		test(`Pick the options and check if they values are correct to: ${data.name}`, async ({
			page,
		}) => {
			await page.selectOption('#dropdowm-menu-3', {
				label: data.name,
			});
			expect(page.locator('#dropdowm-menu-3')).toHaveValue(data.value);
		});
	});
});

test.describe('Checkboxe(s)', () => {
	let dropCheckRadioPage: DropCheckRadioPage;

	test.beforeEach(async ({ page }) => {
		dropCheckRadioPage = new DropCheckRadioPage(page);
		await dropCheckRadioPage.visit();
	});

	test('Open a Dropdown Menu(s), Checkboxe(s) Radio Button(s) page', async ({
		page,
	}) => {
		await dropCheckRadioPage.checkDCRPageHeader();
	});

	checkboxOption.forEach((data) => {
		test(`Select checkbox: ${data.option}`, async ({ page }) => {
			await page.getByLabel(data.option).check();
			expect(await page.getByLabel(data.option).isChecked()).toBeTruthy();
		});
	});
	test('Select all checkboxes and unselect 2 & 4', async ({ page }) => {
		await page.getByLabel('Option 1').check();
		expect(await page.getByLabel('Option 1').isChecked()).toBeTruthy();
		await page.getByLabel('Option 2').check();
		expect(await page.getByLabel('Option 2').isChecked()).toBeTruthy();
		await page.getByLabel('Option 3').check();
		expect(await page.getByLabel('Option 3').isChecked()).toBeTruthy();
		await page.getByLabel('Option 4').check();
		expect(await page.getByLabel('Option 4').isChecked()).toBeTruthy();
		await page.getByLabel('Option 2').uncheck();
		await page.getByLabel('Option 4').uncheck();
		expect(await page.getByLabel('Option 2').isChecked()).not.toBeTruthy();
		expect(await page.getByLabel('Option 4').isChecked()).not.toBeTruthy();
	});
});

test.describe('Radio Buttons(s)', () => {
	let dropCheckRadioPage: DropCheckRadioPage;

	test.beforeEach(async ({ page }) => {
		dropCheckRadioPage = new DropCheckRadioPage(page);
		await dropCheckRadioPage.visit();
	});

	test('Open a Dropdown Menu(s), Checkboxe(s) Radio Button(s) page', async ({
		page,
	}) => {
		await dropCheckRadioPage.checkDCRPageHeader();
		expect(await page.locator('#radio-buttons').isVisible());
	});

	radioButtons.forEach((data) => {
		test(`Select checkbox: ${data.name}`, async ({ page }) => {
			await page.check(data.name);
			expect(await page.isChecked(data.name)).toBeTruthy()
		});
	});
});
