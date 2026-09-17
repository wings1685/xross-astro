import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from "vitest";
import { Link } from '@/components/shared';

describe('Link コンポーネント内の文字整形テスト', () => {
	it('href / name / testid が整形されているか検証', async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Link, {
			props: {
				path: 'astro',
			},
		});
		expect(result).toContain('href="/astro/"');
		expect(result).toContain('Astro');
		expect(result).toContain('data-testid="link-astro"');
	});
});
