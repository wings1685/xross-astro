import { test, expect } from "@playwright/test";
import { TestHelper } from "./_models/testHelper";

test.describe('画面表示・ページ遷移テスト', () => {
	let helper: Readonly<TestHelper>;

	test.beforeEach(async ({ page, baseURL }) => {
		helper = new TestHelper(page, baseURL);
		await helper.init();
	});

	test('画面が期待通りの内容になっていること', async ({ page }) => {
		await expect(page).toHaveURL(helper.baseURL);
		await expect(page.locator('text=Astro Test')).toBeVisible();
	});

	test('Solid コンポーネントのページに遷移すること', async ({ page }) => {
		const path = '/solid/';
		const link = page.locator(`a[href="${path}"]`);
		await link.click();
		await expect(page).toHaveURL(path);
		await expect(page.locator('text=Prev')).toBeVisible();
	});
});
