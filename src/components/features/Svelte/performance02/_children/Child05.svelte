<script lang="ts">
	import { Child06 } from "./";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();
</script>
<Child06 relay={ relay } />
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
