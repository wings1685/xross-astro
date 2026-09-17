<script lang="ts">
	import { Child08 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child08 bind:relay={ relay } setRelay={ setRelay } />
