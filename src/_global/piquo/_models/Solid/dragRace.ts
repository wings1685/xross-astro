import { createSignal } from "solid-js";

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const solidStartStore = {
	server: {
		startStore: (): StartStore => initialStart,
		setStart: (_: StartStore) => {},
	},
	client: () => {
		const [ startStore, setStart ] = createSignal<StartStore>(initialStart);

		return { startStore, setStart };
	},
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const solidNumberStore01 = {
	server: { numberStore01: (): NumberStore => initialNumber, setNumber01: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore01, setNumber01 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore01, setNumber01 };
	},
};
const solidNumberStore02 = {
	server: { numberStore02: (): NumberStore => initialNumber, setNumber02: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore02, setNumber02 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore02, setNumber02 };
	},
};
const solidNumberStore03 = {
	server: { numberStore03: (): NumberStore => initialNumber, setNumber03: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore03, setNumber03 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore03, setNumber03 };
	},
};
const solidNumberStore04 = {
	server: { numberStore04: (): NumberStore => initialNumber, setNumber04: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore04, setNumber04 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore04, setNumber04 };
	},
};
const solidNumberStore05 = {
	server: { numberStore05: (): NumberStore => initialNumber, setNumber05: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore05, setNumber05 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore05, setNumber05 };
	},
};
const solidNumberStore06 = {
	server: { numberStore06: (): NumberStore => initialNumber, setNumber06: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore06, setNumber06 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore06, setNumber06 };
	},
};
const solidNumberStore07 = {
	server: { numberStore07: (): NumberStore => initialNumber, setNumber07: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore07, setNumber07 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore07, setNumber07 };
	},
};
const solidNumberStore08 = {
	server: { numberStore08: (): NumberStore => initialNumber, setNumber08: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore08, setNumber08 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore08, setNumber08 };
	},
};
const solidNumberStore09 = {
	server: { numberStore09: (): NumberStore => initialNumber, setNumber09: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore09, setNumber09 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore09, setNumber09 };
	},
};
const solidNumberStore10 = {
	server: { numberStore10: (): NumberStore => initialNumber, setNumber10: (_: NumberStore) => {} },
	client: () => {
		const [ numberStore10, setNumber10 ] = createSignal<NumberStore>(initialNumber);

		return { numberStore10, setNumber10 };
	},
};

type StringStore = string;
const initialString = '' as StringStore;
const solidStringStore01 = {
	server: { stringStore01: (): StringStore => initialString, setString01: (_: StringStore) => {} },
	client: () => {
		const [ stringStore01, setString01 ] = createSignal<StringStore>(initialString);

		return { stringStore01, setString01 };
	},
};
const solidStringStore02 = {
	server: { stringStore02: (): StringStore => initialString, setString02: (_: StringStore) => {} },
	client: () => {
		const [ stringStore02, setString02 ] = createSignal<StringStore>(initialString);

		return { stringStore02, setString02 };
	},
};
const solidStringStore03 = {
	server: { stringStore03: (): StringStore => initialString, setString03: (_: StringStore) => {} },
	client: () => {
		const [ stringStore03, setString03 ] = createSignal<StringStore>(initialString);

		return { stringStore03, setString03 };
	},
};
const solidStringStore04 = {
	server: { stringStore04: (): StringStore => initialString, setString04: (_: StringStore) => {} },
	client: () => {
		const [ stringStore04, setString04 ] = createSignal<StringStore>(initialString);

		return { stringStore04, setString04 };
	},
};
const solidStringStore05 = {
	server: { stringStore05: (): StringStore => initialString, setString05: (_: StringStore) => {} },
	client: () => {
		const [ stringStore05, setString05 ] = createSignal<StringStore>(initialString);

		return { stringStore05, setString05 };
	},
};
const solidStringStore06 = {
	server: { stringStore06: (): StringStore => initialString, setString06: (_: StringStore) => {} },
	client: () => {
		const [ stringStore06, setString06 ] = createSignal<StringStore>(initialString);

		return { stringStore06, setString06 };
	},
};
const solidStringStore07 = {
	server: { stringStore07: (): StringStore => initialString, setString07: (_: StringStore) => {} },
	client: () => {
		const [ stringStore07, setString07 ] = createSignal<StringStore>(initialString);

		return { stringStore07, setString07 };
	},
};
const solidStringStore08 = {
	server: { stringStore08: (): StringStore => initialString, setString08: (_: StringStore) => {} },
	client: () => {
		const [ stringStore08, setString08 ] = createSignal<StringStore>(initialString);

		return { stringStore08, setString08 };
	},
};
const solidStringStore09 = {
	server: { stringStore09: (): StringStore => initialString, setString09: (_: StringStore) => {} },
	client: () => {
		const [ stringStore09, setString09 ] = createSignal<StringStore>(initialString);

		return { stringStore09, setString09 };
	},
};
const solidStringStore10 = {
	server: { stringStore10: (): StringStore => initialString, setString10: (_: StringStore) => {} },
	client: () => {
		const [ stringStore10, setString10 ] = createSignal<StringStore>(initialString);

		return { stringStore10, setString10 };
	},
};

export const _solidDragRace = {
	solidStart: solidStartStore,
	solidNumber01: solidNumberStore01,
	solidNumber02: solidNumberStore02,
	solidNumber03: solidNumberStore03,
	solidNumber04: solidNumberStore04,
	solidNumber05: solidNumberStore05,
	solidNumber06: solidNumberStore06,
	solidNumber07: solidNumberStore07,
	solidNumber08: solidNumberStore08,
	solidNumber09: solidNumberStore09,
	solidNumber10: solidNumberStore10,
	solidString01: solidStringStore01,
	solidString02: solidStringStore02,
	solidString03: solidStringStore03,
	solidString04: solidStringStore04,
	solidString05: solidStringStore05,
	solidString06: solidStringStore06,
	solidString07: solidStringStore07,
	solidString08: solidStringStore08,
	solidString09: solidStringStore09,
	solidString10: solidStringStore10,
};
