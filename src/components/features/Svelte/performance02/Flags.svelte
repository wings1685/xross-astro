<script lang="ts">
	import { recordFinished, recordStart } from "@/_global/lib/performance02";
	import type { ReactiveTypeProps } from "@/_global/types/performance02";

	const { start }: ReactiveTypeProps = $props();

	const reactive = $state({
		dummy01a: 0,
		dummy01b: 0,
		dummy01c: 0,
		dummy01d: 0,
		dummy01e: 0,
		dummy01f: 0,
		dummy01g: 0,
		dummy01h: 0,
		dummy01i: 0,
		dummy01j: 0,
		dummy01k: 0,
		dummy01l: 0,
		dummy01m: 0,
		dummy01n: 0,
		dummy01o: 0,
		dummy01p: 0,
		dummy01q: 0,
		dummy01r: 0,
		dummy01s: 0,
		dummy01t: 0,
		dummy01u: 0,
		dummy01v: 0,
		dummy01w: 0,
		dummy01x: 0,
		dummy01y: 0,
		active01z: 0,
	});

	$effect(() => {
		if (!start) return;

		recordStart('Flags');
		reactive.active01z = start;
	});

	$effect(() => {
		if (!reactive.active01z) return;

		recordFinished('Flags');
	});
</script>
