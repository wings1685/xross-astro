<script lang="ts">
	import { recordFinished, recordStart } from "@/_global/lib/performance02";
	import type { ReactiveTypeProps } from "@/_global/types/performance02";

	const { start }: ReactiveTypeProps = $props();

	let reactive = $state(0);

	$effect(() => {
		if (!start) return;

		recordStart('Primitive');
		reactive = start;
	});

	$effect(() => {
		if (!reactive) return;

		recordFinished('Primitive');
	});
</script>
