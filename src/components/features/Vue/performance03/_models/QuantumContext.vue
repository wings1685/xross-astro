<script lang="ts">
	import { ref, defineComponent, provide, inject, readonly } from "vue";
	import type { InjectionKey, PropType, Ref } from "vue";

	type QuantumData = number;
	const initialValue: QuantumData = 0;
	type QuantumDataRef = Ref<QuantumData>;
	const QuantumDataSymbol01: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol02: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol03: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol04: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol05: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol06: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol07: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol08: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol09: InjectionKey<QuantumDataRef> = Symbol();
	const QuantumDataSymbol10: InjectionKey<QuantumDataRef> = Symbol();

	const provideQuantumData = (value: QuantumDataRef) => {
		provide(QuantumDataSymbol01, value);
		provide(QuantumDataSymbol02, value);
		provide(QuantumDataSymbol03, value);
		provide(QuantumDataSymbol04, value);
		provide(QuantumDataSymbol05, value);
		provide(QuantumDataSymbol06, value);
		provide(QuantumDataSymbol07, value);
		provide(QuantumDataSymbol08, value);
		provide(QuantumDataSymbol09, value);
		provide(QuantumDataSymbol10, value);
	};

	export const useQuantumDataContexts = () => {
		const injected01 = inject(QuantumDataSymbol01);
		const injected02 = inject(QuantumDataSymbol02);
		const injected03 = inject(QuantumDataSymbol03);
		const injected04 = inject(QuantumDataSymbol04);
		const injected05 = inject(QuantumDataSymbol05);
		const injected06 = inject(QuantumDataSymbol06);
		const injected07 = inject(QuantumDataSymbol07);
		const injected08 = inject(QuantumDataSymbol08);
		const injected09 = inject(QuantumDataSymbol09);
		const injected10 = inject(QuantumDataSymbol10);
		if (!injected01 || !injected02 || !injected03 || !injected04 || !injected05 || !injected06 || !injected07 || !injected08 || !injected09 || !injected10) {
			return {
				quantumData01: readonly({ value: initialValue }),
				setQuantumData01: (_: QuantumData) => {},
				quantumData02: readonly({ value: initialValue }),
				setQuantumData02: (_: QuantumData) => {},
				quantumData03: readonly({ value: initialValue }),
				setQuantumData03: (_: QuantumData) => {},
				quantumData04: readonly({ value: initialValue }),
				setQuantumData04: (_: QuantumData) => {},
				quantumData05: readonly({ value: initialValue }),
				setQuantumData05: (_: QuantumData) => {},
				quantumData06: readonly({ value: initialValue }),
				setQuantumData06: (_: QuantumData) => {},
				quantumData07: readonly({ value: initialValue }),
				setQuantumData07: (_: QuantumData) => {},
				quantumData08: readonly({ value: initialValue }),
				setQuantumData08: (_: QuantumData) => {},
				quantumData09: readonly({ value: initialValue }),
				setQuantumData09: (_: QuantumData) => {},
				quantumData10: readonly({ value: initialValue }),
				setQuantumData10: (_: QuantumData) => {},
			}
		};

		const quantumData01 = readonly(injected01);
		const setQuantumData01 = (value: QuantumData) => { injected01.value = value; };

		const quantumData02 = readonly(injected02);
		const setQuantumData02 = (value: QuantumData) => { injected02.value = value; };

		const quantumData03 = readonly(injected03);
		const setQuantumData03 = (value: QuantumData) => { injected03.value = value; };

		const quantumData04 = readonly(injected04);
		const setQuantumData04 = (value: QuantumData) => { injected04.value = value; };

		const quantumData05 = readonly(injected05);
		const setQuantumData05 = (value: QuantumData) => { injected05.value = value; };

		const quantumData06 = readonly(injected06);
		const setQuantumData06 = (value: QuantumData) => { injected06.value = value; };

		const quantumData07 = readonly(injected07);
		const setQuantumData07 = (value: QuantumData) => { injected07.value = value; };

		const quantumData08 = readonly(injected08);
		const setQuantumData08 = (value: QuantumData) => { injected08.value = value; };

		const quantumData09 = readonly(injected09);
		const setQuantumData09 = (value: QuantumData) => { injected09.value = value; };

		const quantumData10 = readonly(injected10);
		const setQuantumData10 = (value: QuantumData) => { injected10.value = value; };

		return {
			quantumData01, setQuantumData01,
			quantumData02, setQuantumData02,
			quantumData03, setQuantumData03,
			quantumData04, setQuantumData04,
			quantumData05, setQuantumData05,
			quantumData06, setQuantumData06,
			quantumData07, setQuantumData07,
			quantumData08, setQuantumData08,
			quantumData09, setQuantumData09,
			quantumData10, setQuantumData10,
		};
	};
	export default defineComponent({
		name: 'Quantum',
		props: {
			quantum01: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum02: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum03: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum04: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum05: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum06: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum07: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum08: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum09: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
			quantum10: {
				type: Number as PropType<QuantumData>,
				default: initialValue,
			},
		},
		setup(props) {
			provide(QuantumDataSymbol01, ref(props.quantum01));
			provide(QuantumDataSymbol02, ref(props.quantum02));
			provide(QuantumDataSymbol03, ref(props.quantum03));
			provide(QuantumDataSymbol04, ref(props.quantum04));
			provide(QuantumDataSymbol05, ref(props.quantum05));
			provide(QuantumDataSymbol06, ref(props.quantum06));
			provide(QuantumDataSymbol07, ref(props.quantum07));
			provide(QuantumDataSymbol08, ref(props.quantum08));
			provide(QuantumDataSymbol09, ref(props.quantum09));
			provide(QuantumDataSymbol10, ref(props.quantum10));
		}
	});
</script>
<template>
	<slot />
</template>
