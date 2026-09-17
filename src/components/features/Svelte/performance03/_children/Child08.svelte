<script lang="ts">
	import { Child09 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child09 bind:relay={ relay } setRelay={ setRelay } />
