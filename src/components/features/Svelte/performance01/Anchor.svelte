<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance01";
	import type { Snippet } from "svelte";

	type Props = {
		to: string;
		children: Snippet;
	};
	const { to, children }: Props = $props();
	const { svelteSetAtId } = useStore('svelteAtId');

	const handleClick = () => {
		recordStart('GlobalSignal');
		svelteSetAtId(to);
	};
</script>
<button onclick={ handleClick }>
	{@render children()}
</button>
