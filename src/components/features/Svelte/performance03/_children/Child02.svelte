<script lang="ts">
	import { Child03 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child03 bind:relay={ relay } setRelay={ setRelay } />
