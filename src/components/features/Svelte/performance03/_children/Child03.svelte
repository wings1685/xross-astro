<script lang="ts">
	import { Child04 } from "./";
	import type { RelayProps } from "../_models/types";

	let { relay = $bindable(), setRelay }: RelayProps = $props();
</script>
<Child04 bind:relay={ relay } setRelay={ setRelay } />
