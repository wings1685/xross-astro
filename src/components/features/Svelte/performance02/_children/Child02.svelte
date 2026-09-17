<script lang="ts">
	import { Child03 } from "./";
	import type { RelayProps } from "../_models/RelayContext.svelte";

	const { relay }: RelayProps = $props();
</script>
<Child03 relay={ relay } />
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
