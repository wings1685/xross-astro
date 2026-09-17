<script lang="ts">
	import { Child05 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child05 bind:relay={ relay } setRelay={ setRelay } />
