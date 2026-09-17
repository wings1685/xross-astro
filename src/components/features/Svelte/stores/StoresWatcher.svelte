<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { svelteQuery } = useStore('svelteQuery');
	const { svelteIsChecked } = useStore('svelteIsChecked');
</script>
<hr />
<div>
	<p>
		<span>Svelte Store = </span>
		{ svelteQuery() } / { svelteIsChecked().toString() }
	</p>
</div>
