import { ref } from "vue";

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const refStartStore = {
	server: {
		startStore: (): StartStore => initialStart,
		setStart: (_: StartStore) => {},
	},
	client: () => {
		const startStore = ref<StartStore>(initialStart);
		const setStart = (value: StartStore) => { startStore.value = value; };

		return {
			startStore: () => startStore.value, setStart,
		};
	},
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const refNumberStore01 = {
	server: { numberStore01: (): NumberStore => initialNumber, setNumber01: (_: NumberStore) => {} },
	client: () => {
		const numberStore01 = ref<NumberStore>(initialNumber);

		return { numberStore01: () => numberStore01.value, setNumber01: (value: NumberStore) => { numberStore01.value = value; } };
	},
};
const refNumberStore02 = {
	server: { numberStore02: (): NumberStore => initialNumber, setNumber02: (_: NumberStore) => {} },
	client: () => {
		const numberStore02 = ref<NumberStore>(initialNumber);

		return { numberStore02: () => numberStore02.value, setNumber02: (value: NumberStore) => { numberStore02.value = value; } };
	},
};
const refNumberStore03 = {
	server: { numberStore03: (): NumberStore => initialNumber, setNumber03: (_: NumberStore) => {} },
	client: () => {
		const numberStore03 = ref<NumberStore>(initialNumber);

		return { numberStore03: () => numberStore03.value, setNumber03: (value: NumberStore) => { numberStore03.value = value; } };
	},
};
const refNumberStore04 = {
	server: { numberStore04: (): NumberStore => initialNumber, setNumber04: (_: NumberStore) => {} },
	client: () => {
		const numberStore04 = ref<NumberStore>(initialNumber);

		return { numberStore04: () => numberStore04.value, setNumber04: (value: NumberStore) => { numberStore04.value = value; } };
	},
};
const refNumberStore05 = {
	server: { numberStore05: (): NumberStore => initialNumber, setNumber05: (_: NumberStore) => {} },
	client: () => {
		const numberStore05 = ref<NumberStore>(initialNumber);

		return { numberStore05: () => numberStore05.value, setNumber05: (value: NumberStore) => { numberStore05.value = value; } };
	},
};
const refNumberStore06 = {
	server: { numberStore06: (): NumberStore => initialNumber, setNumber06: (_: NumberStore) => {} },
	client: () => {
		const numberStore06 = ref<NumberStore>(initialNumber);

		return { numberStore06: () => numberStore06.value, setNumber06: (value: NumberStore) => { numberStore06.value = value; } };
	},
};
const refNumberStore07 = {
	server: { numberStore07: (): NumberStore => initialNumber, setNumber07: (_: NumberStore) => {} },
	client: () => {
		const numberStore07 = ref<NumberStore>(initialNumber);

		return { numberStore07: () => numberStore07.value, setNumber07: (value: NumberStore) => { numberStore07.value = value; } };
	},
};
const refNumberStore08 = {
	server: { numberStore08: (): NumberStore => initialNumber, setNumber08: (_: NumberStore) => {} },
	client: () => {
		const numberStore08 = ref<NumberStore>(initialNumber);

		return { numberStore08: () => numberStore08.value, setNumber08: (value: NumberStore) => { numberStore08.value = value; } };
	},
};
const refNumberStore09 = {
	server: { numberStore09: (): NumberStore => initialNumber, setNumber09: (_: NumberStore) => {} },
	client: () => {
		const numberStore09 = ref<NumberStore>(initialNumber);

		return { numberStore09: () => numberStore09.value, setNumber09: (value: NumberStore) => { numberStore09.value = value; } };
	},
};
const refNumberStore10 = {
	server: { numberStore10: (): NumberStore => initialNumber, setNumber10: (_: NumberStore) => {} },
	client: () => {
		const numberStore10 = ref<NumberStore>(initialNumber);

		return { numberStore10: () => numberStore10.value, setNumber10: (value: NumberStore) => { numberStore10.value = value; } };
	},
};

type StringStore = string;
const initialString = '' as StringStore;
const refStringStore01 = {
	server: { stringStore01: (): StringStore => initialString, setNumber01: (_: StringStore) => {} },
	client: () => {
		const stringStore01 = ref<StringStore>(initialString);

		return { stringStore01: () => stringStore01.value, setNumber01: (value: StringStore) => { stringStore01.value = value; } };
	},
};
const refStringStore02 = {
	server: { stringStore02: (): StringStore => initialString, setNumber02: (_: StringStore) => {} },
	client: () => {
		const stringStore02 = ref<StringStore>(initialString);

		return { stringStore02: () => stringStore02.value, setNumber02: (value: StringStore) => { stringStore02.value = value; } };
	},
};
const refStringStore03 = {
	server: { stringStore03: (): StringStore => initialString, setNumber03: (_: StringStore) => {} },
	client: () => {
		const stringStore03 = ref<StringStore>(initialString);

		return { stringStore03: () => stringStore03.value, setNumber03: (value: StringStore) => { stringStore03.value = value; } };
	},
};
const refStringStore04 = {
	server: { stringStore04: (): StringStore => initialString, setNumber04: (_: StringStore) => {} },
	client: () => {
		const stringStore04 = ref<StringStore>(initialString);

		return { stringStore04: () => stringStore04.value, setNumber04: (value: StringStore) => { stringStore04.value = value; } };
	},
};
const refStringStore05 = {
	server: { stringStore05: (): StringStore => initialString, setNumber05: (_: StringStore) => {} },
	client: () => {
		const stringStore05 = ref<StringStore>(initialString);

		return { stringStore05: () => stringStore05.value, setNumber05: (value: StringStore) => { stringStore05.value = value; } };
	},
};
const refStringStore06 = {
	server: { stringStore06: (): StringStore => initialString, setNumber06: (_: StringStore) => {} },
	client: () => {
		const stringStore06 = ref<StringStore>(initialString);

		return { stringStore06: () => stringStore06.value, setNumber06: (value: StringStore) => { stringStore06.value = value; } };
	},
};
const refStringStore07 = {
	server: { stringStore07: (): StringStore => initialString, setNumber07: (_: StringStore) => {} },
	client: () => {
		const stringStore07 = ref<StringStore>(initialString);

		return { stringStore07: () => stringStore07.value, setNumber07: (value: StringStore) => { stringStore07.value = value; } };
	},
};
const refStringStore08 = {
	server: { stringStore08: (): StringStore => initialString, setNumber08: (_: StringStore) => {} },
	client: () => {
		const stringStore08 = ref<StringStore>(initialString);

		return { stringStore08: () => stringStore08.value, setNumber08: (value: StringStore) => { stringStore08.value = value; } };
	},
};
const refStringStore09 = {
	server: { stringStore09: (): StringStore => initialString, setNumber09: (_: StringStore) => {} },
	client: () => {
		const stringStore09 = ref<StringStore>(initialString);

		return { stringStore09: () => stringStore09.value, setNumber09: (value: StringStore) => { stringStore09.value = value; } };
	},
};
const refStringStore10 = {
	server: { stringStore10: (): StringStore => initialString, setNumber10: (_: StringStore) => {} },
	client: () => {
		const stringStore10 = ref<StringStore>(initialString);

		return { stringStore10: () => stringStore10.value, setNumber10: (value: StringStore) => { stringStore10.value = value; } };
	},
};

export const _vueDragRace = {
	vueStart: refStartStore,
	vueNumber01: refNumberStore01,
	vueNumber02: refNumberStore02,
	vueNumber03: refNumberStore03,
	vueNumber04: refNumberStore04,
	vueNumber05: refNumberStore05,
	vueNumber06: refNumberStore06,
	vueNumber07: refNumberStore07,
	vueNumber08: refNumberStore08,
	vueNumber09: refNumberStore09,
	vueNumber10: refNumberStore10,
	vueString01: refStringStore01,
	vueString02: refStringStore02,
	vueString03: refStringStore03,
	vueString04: refStringStore04,
	vueString05: refStringStore05,
	vueString06: refStringStore06,
	vueString07: refStringStore07,
	vueString08: refStringStore08,
	vueString09: refStringStore09,
	vueString10: refStringStore10,
};
