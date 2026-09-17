<script setup lang="ts">
	import { reactive, ref, shallowRef, triggerRef, watch } from "vue";
	import { recordFinished, recordStart } from "@/_global/lib/performance02";
	import type { ReactiveTypeProps } from "@/_global/types/performance02";

	const props = defineProps<ReactiveTypeProps>();

	const initialValues = {
		dummy01a: { dummy02a: { dummy03a: { dummy04a: { dummy05a: 0 } } } },
		dummy01b: { dummy02b: { dummy03b: { dummy04b: { dummy05b: 0 } } } },
		dummy01c: { dummy02c: { dummy03c: { dummy04c: { dummy05c: 0 } } } },
		dummy01d: { dummy02d: { dummy03d: { dummy04d: { dummy05d: 0 } } } },
		dummy01e: { dummy02e: { dummy03e: { dummy04e: { dummy05e: 0 } } } },
		dummy01f: { dummy02f: { dummy03f: { dummy04f: { dummy05f: 0 } } } },
		dummy01g: { dummy02g: { dummy03g: { dummy04g: { dummy05g: 0 } } } },
		dummy01h: { dummy02h: { dummy03h: { dummy04h: { dummy05h: 0 } } } },
		dummy01i: { dummy02i: { dummy03i: { dummy04i: { dummy05i: 0 } } } },
		dummy01j: { dummy02j: { dummy03j: { dummy04j: { dummy05j: 0 } } } },
		dummy01k: { dummy02k: { dummy03k: { dummy04k: { dummy05k: 0 } } } },
		dummy01l: { dummy02l: { dummy03l: { dummy04l: { dummy05l: 0 } } } },
		dummy01m: { dummy02m: { dummy03m: { dummy04m: { dummy05m: 0 } } } },
		dummy01n: { dummy02n: { dummy03n: { dummy04n: { dummy05n: 0 } } } },
		dummy01o: { dummy02o: { dummy03o: { dummy04o: { dummy05o: 0 } } } },
		dummy01p: { dummy02p: { dummy03p: { dummy04p: { dummy05p: 0 } } } },
		dummy01q: { dummy02q: { dummy03q: { dummy04q: { dummy05q: 0 } } } },
		dummy01r: { dummy02r: { dummy03r: { dummy04r: { dummy05r: 0 } } } },
		dummy01s: { dummy02s: { dummy03s: { dummy04s: { dummy05s: 0 } } } },
		dummy01t: { dummy02t: { dummy03t: { dummy04t: { dummy05t: 0 } } } },
		dummy01u: { dummy02u: { dummy03u: { dummy04u: { dummy05u: 0 } } } },
		dummy01v: { dummy02v: { dummy03v: { dummy04v: { dummy05v: 0 } } } },
		dummy01w: { dummy02w: { dummy03w: { dummy04w: { dummy05w: 0 } } } },
		dummy01x: { dummy02x: { dummy03x: { dummy04x: { dummy05x: 0 } } } },
		dummy01y: { dummy02y: { dummy03y: { dummy04y: { dummy05y: 0 } } } },
		active01z: { active02z: { active03z: { active04z: { active05z: 0 } } } },
	};

	const dataRef = ref(initialValues);
	const dataReactive = reactive(initialValues);
	const dataShallowRef = shallowRef(initialValues);

	watch(
		() => props.start,
		() => {
			if (!props.start) return;

			recordStart('NestObject');
			dataRef.value.active01z.active02z.active03z.active04z.active05z = props.start;

			recordStart('NestObjectReactive');
			dataReactive.active01z.active02z.active03z.active04z.active05z = props.start;

			recordStart('NestObjectShallowRef');
			dataShallowRef.value.active01z.active02z.active03z.active04z.active05z = props.start;
			triggerRef(dataShallowRef);
		},
		{ immediate: true }
	);

	watch(
		() => dataRef.value.active01z.active02z.active03z.active04z.active05z,
		() => {
			if (!dataRef.value.active01z.active02z.active03z.active04z.active05z) return;

			recordFinished('NestObject', 'NestObjectRef');
		},
		{ immediate: true }
	);

	watch(
		() => dataReactive.active01z.active02z.active03z.active04z.active05z,
		() => {
			if (!dataReactive.active01z.active02z.active03z.active04z.active05z) return;

			recordFinished('NestObjectReactive');
		},
		{ immediate: true }
	);

	watch(
		() => dataShallowRef.value.active01z.active02z.active03z.active04z.active05z,
		() => {
			if (!dataShallowRef.value.active01z.active02z.active03z.active04z.active05z) return;

			recordFinished('NestObjectShallowRef');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
