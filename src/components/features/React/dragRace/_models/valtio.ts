import { proxy } from "valtio";

const serverStore = <T>(initialValue: T) => ({
	startStore: initialValue,
	setStart: (_: T) => {},
});

type StartStore = { value: 'number' | 'string' | null };
const initialStart: StartStore['value'] = null;
const valtioStartStore = {
	server: serverStore(initialStart),
	client: () => {
		const startStore = proxy<StartStore>({ value: initialStart });

		return { startStore, setStart: (value: StartStore['value']) => { startStore.value = value; } };
	},
};

type NumberStore = { value: number };
const initialNumber: NumberStore['value'] = 0;
const valtioNumberStore01 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore01 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore01, setNumber01: (value: NumberStore['value']) => { numberStore01.value = value; } };
	},
};
const valtioNumberStore02 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore02 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore02, setNumber02: (value: NumberStore['value']) => { numberStore02.value = value; } };
	},
};
const valtioNumberStore03 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore03 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore03, setNumber03: (value: NumberStore['value']) => { numberStore03.value = value; } };
	},
};
const valtioNumberStore04 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore04 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore04, setNumber04: (value: NumberStore['value']) => { numberStore04.value = value; } };
	},
};
const valtioNumberStore05 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore05 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore05, setNumber05: (value: NumberStore['value']) => { numberStore05.value = value; } };
	},
};
const valtioNumberStore06 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore06 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore06, setNumber06: (value: NumberStore['value']) => { numberStore06.value = value; } };
	},
};
const valtioNumberStore07 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore07 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore07, setNumber07: (value: NumberStore['value']) => { numberStore07.value = value; } };
	},
};
const valtioNumberStore08 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore08 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore08, setNumber08: (value: NumberStore['value']) => { numberStore08.value = value; } };
	},
};
const valtioNumberStore09 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore09 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore09, setNumber09: (value: NumberStore['value']) => { numberStore09.value = value; } };
	},
};
const valtioNumberStore10 = {
	server: serverStore(initialNumber),
	client: () => {
		const numberStore10 = proxy<NumberStore>({ value: initialNumber });

		return { numberStore10, setNumber10: (value: NumberStore['value']) => { numberStore10.value = value; } };
	},
};

type StringStore = { value: string };
const initialString: StringStore['value'] = '';
const valtioStringStore01 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore01 = proxy<StringStore>({ value: initialString });

		return { stringStore01, setString01: (value: StringStore['value']) => { stringStore01.value = value; } };
	},
};
const valtioStringStore02 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore02 = proxy<StringStore>({ value: initialString });

		return { stringStore02, setString02: (value: StringStore['value']) => { stringStore02.value = value; } };
	},
};
const valtioStringStore03 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore03 = proxy<StringStore>({ value: initialString });

		return { stringStore03, setString03: (value: StringStore['value']) => { stringStore03.value = value; } };
	},
};
const valtioStringStore04 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore04 = proxy<StringStore>({ value: initialString });

		return { stringStore04, setString04: (value: StringStore['value']) => { stringStore04.value = value; } };
	},
};
const valtioStringStore05 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore05 = proxy<StringStore>({ value: initialString });

		return { stringStore05, setString05: (value: StringStore['value']) => { stringStore05.value = value; } };
	},
};
const valtioStringStore06 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore06 = proxy<StringStore>({ value: initialString });

		return { stringStore06, setString06: (value: StringStore['value']) => { stringStore06.value = value; } };
	},
};
const valtioStringStore07 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore07 = proxy<StringStore>({ value: initialString });

		return { stringStore07, setString07: (value: StringStore['value']) => { stringStore07.value = value; } };
	},
};
const valtioStringStore08 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore08 = proxy<StringStore>({ value: initialString });

		return { stringStore08, setString08: (value: StringStore['value']) => { stringStore08.value = value; } };
	},
};
const valtioStringStore09 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore09 = proxy<StringStore>({ value: initialString });

		return { stringStore09, setString09: (value: StringStore['value']) => { stringStore09.value = value; } };
	},
};
const valtioStringStore10 = {
	server: serverStore(initialString),
	client: () => {
		const stringStore10 = proxy<StringStore>({ value: initialString });

		return { stringStore10, setString10: (value: StringStore['value']) => { stringStore10.value = value; } };
	},
};

export const _valtioStores = {
	valtioStart: valtioStartStore,
	valtioNumber01: valtioNumberStore01,
	valtioNumber02: valtioNumberStore02,
	valtioNumber03: valtioNumberStore03,
	valtioNumber04: valtioNumberStore04,
	valtioNumber05: valtioNumberStore05,
	valtioNumber06: valtioNumberStore06,
	valtioNumber07: valtioNumberStore07,
	valtioNumber08: valtioNumberStore08,
	valtioNumber09: valtioNumberStore09,
	valtioNumber10: valtioNumberStore10,
	valtioString01: valtioStringStore01,
	valtioString02: valtioStringStore02,
	valtioString03: valtioStringStore03,
	valtioString04: valtioStringStore04,
	valtioString05: valtioStringStore05,
	valtioString06: valtioStringStore06,
	valtioString07: valtioStringStore07,
	valtioString08: valtioStringStore08,
	valtioString09: valtioStringStore09,
	valtioString10: valtioStringStore10,
};
