<script lang="ts">
	import { Child07 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child07 bind:relay={ relay } setRelay={ setRelay } />
