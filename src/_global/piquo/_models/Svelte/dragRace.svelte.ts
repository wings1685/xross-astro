type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const svelteStartStore = {
	server: {
		startStore: (): StartStore => initialStart,
		setStart: (_: StartStore) => {},
	},
	client: () => {
		let startStore = $state<StartStore>(initialStart);
		const setStart = (value: StartStore) => { startStore = value; };

		return {
			startStore: () => startStore, setStart,
		};
	},
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const svelteNumberStore01 = {
	server: { numberStore01: (): NumberStore => initialNumber, setNumber01: (_: NumberStore) => {} },
	client: () => {
		let numberStore01 = $state<NumberStore>(initialNumber);

		return { numberStore01: () => numberStore01, setNumber01: (value: NumberStore) => { numberStore01 = value; } };
	},
};
const svelteNumberStore02 = {
	server: { numberStore02: (): NumberStore => initialNumber, setNumber02: (_: NumberStore) => {} },
	client: () => {
		let numberStore02 = $state<NumberStore>(initialNumber);

		return { numberStore02: () => numberStore02, setNumber02: (value: NumberStore) => { numberStore02 = value; } };
	},
};
const svelteNumberStore03 = {
	server: { numberStore03: (): NumberStore => initialNumber, setNumber03: (_: NumberStore) => {} },
	client: () => {
		let numberStore03 = $state<NumberStore>(initialNumber);

		return { numberStore03: () => numberStore03, setNumber03: (value: NumberStore) => { numberStore03 = value; } };
	},
};
const svelteNumberStore04 = {
	server: { numberStore04: (): NumberStore => initialNumber, setNumber04: (_: NumberStore) => {} },
	client: () => {
		let numberStore04 = $state<NumberStore>(initialNumber);

		return { numberStore04: () => numberStore04, setNumber04: (value: NumberStore) => { numberStore04 = value; } };
	},
};
const svelteNumberStore05 = {
	server: { numberStore05: (): NumberStore => initialNumber, setNumber05: (_: NumberStore) => {} },
	client: () => {
		let numberStore05 = $state<NumberStore>(initialNumber);

		return { numberStore05: () => numberStore05, setNumber05: (value: NumberStore) => { numberStore05 = value; } };
	},
};
const svelteNumberStore06 = {
	server: { numberStore06: (): NumberStore => initialNumber, setNumber06: (_: NumberStore) => {} },
	client: () => {
		let numberStore06 = $state<NumberStore>(initialNumber);

		return { numberStore06: () => numberStore06, setNumber06: (value: NumberStore) => { numberStore06 = value; } };
	},
};
const svelteNumberStore07 = {
	server: { numberStore07: (): NumberStore => initialNumber, setNumber07: (_: NumberStore) => {} },
	client: () => {
		let numberStore07 = $state<NumberStore>(initialNumber);

		return { numberStore07: () => numberStore07, setNumber07: (value: NumberStore) => { numberStore07 = value; } };
	},
};
const svelteNumberStore08 = {
	server: { numberStore08: (): NumberStore => initialNumber, setNumber08: (_: NumberStore) => {} },
	client: () => {
		let numberStore08 = $state<NumberStore>(initialNumber);

		return { numberStore08: () => numberStore08, setNumber08: (value: NumberStore) => { numberStore08 = value; } };
	},
};
const svelteNumberStore09 = {
	server: { numberStore09: (): NumberStore => initialNumber, setNumber09: (_: NumberStore) => {} },
	client: () => {
		let numberStore09 = $state<NumberStore>(initialNumber);

		return { numberStore09: () => numberStore09, setNumber09: (value: NumberStore) => { numberStore09 = value; } };
	},
};
const svelteNumberStore10 = {
	server: { numberStore10: (): NumberStore => initialNumber, setNumber10: (_: NumberStore) => {} },
	client: () => {
		let numberStore10 = $state<NumberStore>(initialNumber);

		return { numberStore10: () => numberStore10, setNumber10: (value: NumberStore) => { numberStore10 = value; } };
	},
};

type StringStore = string;
const initialString = '' as StringStore;
const svelteStringStore01 = {
	server: { stringStore01: (): StringStore => initialString, setString01: (_: StringStore) => {} },
	client: () => {
		let stringStore01 = $state<StringStore>(initialString);

		return { stringStore01: () => stringStore01, setString01: (value: StringStore) => { stringStore01 = value; } };
	},
};
const svelteStringStore02 = {
	server: { stringStore02: (): StringStore => initialString, setString02: (_: StringStore) => {} },
	client: () => {
		let stringStore02 = $state<StringStore>(initialString);

		return { stringStore02: () => stringStore02, setString02: (value: StringStore) => { stringStore02 = value; } };
	},
};
const svelteStringStore03 = {
	server: { stringStore03: (): StringStore => initialString, setString03: (_: StringStore) => {} },
	client: () => {
		let stringStore03 = $state<StringStore>(initialString);

		return { stringStore03: () => stringStore03, setString03: (value: StringStore) => { stringStore03 = value; } };
	},
};
const svelteStringStore04 = {
	server: { stringStore04: (): StringStore => initialString, setString04: (_: StringStore) => {} },
	client: () => {
		let stringStore04 = $state<StringStore>(initialString);

		return { stringStore04: () => stringStore04, setString04: (value: StringStore) => { stringStore04 = value; } };
	},
};
const svelteStringStore05 = {
	server: { stringStore05: (): StringStore => initialString, setString05: (_: StringStore) => {} },
	client: () => {
		let stringStore05 = $state<StringStore>(initialString);

		return { stringStore05: () => stringStore05, setString05: (value: StringStore) => { stringStore05 = value; } };
	},
};
const svelteStringStore06 = {
	server: { stringStore06: (): StringStore => initialString, setString06: (_: StringStore) => {} },
	client: () => {
		let stringStore06 = $state<StringStore>(initialString);

		return { stringStore06: () => stringStore06, setString06: (value: StringStore) => { stringStore06 = value; } };
	},
};
const svelteStringStore07 = {
	server: { stringStore07: (): StringStore => initialString, setString07: (_: StringStore) => {} },
	client: () => {
		let stringStore07 = $state<StringStore>(initialString);

		return { stringStore07: () => stringStore07, setString07: (value: StringStore) => { stringStore07 = value; } };
	},
};
const svelteStringStore08 = {
	server: { stringStore08: (): StringStore => initialString, setString08: (_: StringStore) => {} },
	client: () => {
		let stringStore08 = $state<StringStore>(initialString);

		return { stringStore08: () => stringStore08, setString08: (value: StringStore) => { stringStore08 = value; } };
	},
};
const svelteStringStore09 = {
	server: { stringStore09: (): StringStore => initialString, setString09: (_: StringStore) => {} },
	client: () => {
		let stringStore09 = $state<StringStore>(initialString);

		return { stringStore09: () => stringStore09, setString09: (value: StringStore) => { stringStore09 = value; } };
	},
};
const svelteStringStore10 = {
	server: { stringStore10: (): StringStore => initialString, setString10: (_: StringStore) => {} },
	client: () => {
		let stringStore10 = $state<StringStore>(initialString);

		return { stringStore10: () => stringStore10, setString10: (value: StringStore) => { stringStore10 = value; } };
	},
};

export const _svelteDragRace = {
	svelteStart: svelteStartStore,
	svelteNumber01: svelteNumberStore01,
	svelteNumber02: svelteNumberStore02,
	svelteNumber03: svelteNumberStore03,
	svelteNumber04: svelteNumberStore04,
	svelteNumber05: svelteNumberStore05,
	svelteNumber06: svelteNumberStore06,
	svelteNumber07: svelteNumberStore07,
	svelteNumber08: svelteNumberStore08,
	svelteNumber09: svelteNumberStore09,
	svelteNumber10: svelteNumberStore10,
	svelteString01: svelteStringStore01,
	svelteString02: svelteStringStore02,
	svelteString03: svelteStringStore03,
	svelteString04: svelteStringStore04,
	svelteString05: svelteStringStore05,
	svelteString06: svelteStringStore06,
	svelteString07: svelteStringStore07,
	svelteString08: svelteStringStore08,
	svelteString09: svelteStringStore09,
	svelteString10: svelteStringStore10,
};
