# Xross Astro

同一 Astro 上で Solid / Svelte / Vue / React を動作させる実験場です。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Stacks

─ Astro 6.3.8

─ Astro Solid 6.0.1
─ Astro Svelte 8.1.2
─ Astro React 5.0.5
─ Astro Vue 6.0.1

─ Legendapp State
─ Jotai
─ Nanostores
─ Valtio
─ Zustand
─ Redux

─ Valibot

## Experiments

この実験場では以下を行いました。

- SSR 状態汚染の無いグローバルストアの考察・構築
- 各フレームワーク標準機能のみを使用した、同一機能を供給するフォーム機構の考察・構築
- 各フレームワークの状態管理（外部ライブラリを含む）の伝播速度計測

## Related Articles

- Astro 上の Solid / Svelte / Vue にグローバルストアを持たせたい: https://wings.hatenablog.com/entry/AstroGlobalStores
- フォームライブラリの使用をやめてみた: https://wings.hatenablog.com/entry/withoutFormLibraries
- フォームライブラリの使用をやめてみた（SolidStart 編）: https://wings.hatenablog.com/entry/solidForm
- フォームライブラリの使用をやめてみた（SvelteKit 編）: https://wings.hatenablog.com/entry/svelteForm
- フォームライブラリの使用をやめてみた（Nuxt 編）: https://wings.hatenablog.com/entry/vueForm
- フォームライブラリの使用をやめてみた（Next 編）: https://wings.hatenablog.com/entry/reactForm
- フォームライブラリの使用をやめてみた（Qwik 編）: https://wings.hatenablog.com/entry/qwikForm
- 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）: https://wings.hatenablog.com/entry/benchmark
- 【第 2 回】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）: https://wings.hatenablog.com/entry/benchmarkSecond
- 【第 3 回】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）: https://wings.hatenablog.com/entry/benchmarkThird
- 【番外編】 同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（おまけで Qwik）: https://wings.hatenablog.com/entry/benchmarkFinal
- 【極限編】同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（Qwik は無し）: https://wings.hatenablog.com/entry/benchmarkExtreme

## Folder Map

```
src/
├─ _global/
│ ├─ lib/
│ ├─ piquo/
│ │ ├─ _models/
│ │ │ ├─ Solid/
│ │ │ ├─ Svelte/
│ │ │ ├─ Vue/
│ ├─ styles/
│ ├─ types/
├─ _test/
├─ components/
│ ├─ features/
│ │ ├─ Solid/
│ │ │ ├─ form/
│ │ │ ├─ stores/
│ │ │ ├─ performance01/
│ │ │ ├─ performance02/
│ │ │ ├─ performance03/
│ │ │ ├─ performance04/
│ │ │ ├─ dragRace/
│ │ ├─ Svelte/
│ │ │ ├─ form/
│ │ │ ├─ stores/
│ │ │ ├─ performance01/
│ │ │ ├─ performance02/
│ │ │ ├─ performance03/
│ │ │ ├─ performance04/
│ │ │ ├─ dragRace/
│ │ ├─ React/
│ │ │ ├─ form/
│ │ │ ├─ stores/
│ │ │ ├─ performance01/
│ │ │ ├─ performance02/
│ │ │ ├─ performance03/
│ │ │ ├─ performance04/
│ │ │ ├─ dragRace/
│ │ ├─ Vue/
│ │ │ ├─ form/
│ │ │ ├─ stores/
│ │ │ ├─ performance01/
│ │ │ ├─ performance02/
│ │ │ ├─ performance03/
│ │ │ ├─ performance04/
│ │ │ ├─ dragRace/
│ ├─ pages/
│ ├─ shared/
├─ layouts/
├─ pages/
```
