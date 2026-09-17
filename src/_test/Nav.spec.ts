import { test, expect } from "@playwright/test";
import { TestHelper } from "./_models/testHelper";

test.describe('ページ内の操作テスト', () => {
	let helper: Readonly<TestHelper>;

	const path = '/solid/';

	test.beforeEach(async ({ page, baseURL }) => {
		helper = new TestHelper(page, baseURL);
		await helper.init(path);
	});

	test('次へボタンを押して表示が変わり、戻るボタンで戻れること', async ({ page }) => {
		const prevButton = page.locator('text=Prev');
		const nextButton = page.locator('text=Next');
		const page1 = page.locator('#luxury_catalog .luxury_page:nth-child(1)');
		const page2 = page.locator('#luxury_catalog .luxury_page:nth-child(2)');

		await test.step('指定した初期画面に戻るボタンと次へボタンが存在していること', async () => {
			await expect(page).toHaveURL(path);
			await expect(prevButton).toBeVisible();
			await expect(nextButton).toBeVisible();
		});

		await test.step('次へボタンを押して 2 枚目に表示が切り替わること', async () => {
			await nextButton.click();
			await expect(page2).toContainClass('catalog_active');
		});

		await test.step('戻るボタンを押して 1 枚目に表示が切り替わること', async () => {
			await prevButton.click();
			await expect(page2).not.toContainClass('catalog_active');
			await expect(page1).toContainClass('catalog_active');
		});
	});
});
