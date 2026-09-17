<script lang="ts">
	import { Child10 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child10 bind:relay={ relay } setRelay={ setRelay } />
