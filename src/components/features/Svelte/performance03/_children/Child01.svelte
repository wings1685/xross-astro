<script lang="ts">
	import { Child02 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child02 bind:relay={ relay } setRelay={ setRelay } />
