<script lang="ts">
	import { Child02 } from "./";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();
</script>
<Child02 relay={ relay } />
<!-- <p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p>
<p>{ relay }</p> -->
