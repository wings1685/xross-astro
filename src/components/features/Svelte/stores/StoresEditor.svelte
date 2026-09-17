<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { solidQuery, solidSetQuery } = useStore('solidQuery');
	const { solidIsChecked, solidSetChecked } = useStore('solidIsChecked');
	const { svelteQuery, svelteSetQuery } = useStore('svelteQuery');
	const { svelteIsChecked, svelteSetChecked } = useStore('svelteIsChecked');
	const { vueQuery, vueSetQuery } = useStore('vueQuery');
	const { vueIsChecked, vueSetChecked } = useStore('vueIsChecked');
</script>
<div>
	<p>
		<span>(created) Solid = </span>
		<input type="text" value={ solidQuery() } oninput={ e => solidSetQuery(e.currentTarget.value) } />
		<input type="checkbox" checked={ solidIsChecked() } onchange={ e => solidSetChecked(e.currentTarget.checked) } />
	</p>
	<p>
		<span>(created) Svelte = </span>
		<input type="text" value={ svelteQuery() } oninput={ e => svelteSetQuery(e.currentTarget.value) } />
		<input type="checkbox" checked={ svelteIsChecked() } onchange={ e => svelteSetChecked(e.currentTarget.checked) } />
	</p>
	<p>
		<span>(created) Vue = </span>
		<input type="text" value={ vueQuery() } oninput={ e => vueSetQuery(e.currentTarget.value) } />
		<input type="checkbox" checked={ vueIsChecked() } onchange={ e => vueSetChecked(e.currentTarget.checked) } />
	</p>
</div>
