<script lang="ts">
	import { Child06 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child06 bind:relay={ relay } setRelay={ setRelay } />
