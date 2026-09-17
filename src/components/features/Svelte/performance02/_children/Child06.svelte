<script lang="ts">
	import { Child07 } from "./";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();
</script>
<Child07 relay={ relay } />
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
