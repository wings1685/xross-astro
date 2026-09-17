import { atom } from "nanostores";

const serverStore = <T>(initialValue: T) => ({
	get value() { return initialValue },
	set: (newValue: T) => {},
	eq: (oldValue: T, newValue: T) => false,
	get: () =>  initialValue,
	get init() { return initialValue },
	get lc() { return initialValue },
	listen: (listener: (value: T, oldValue: T) => void) => () => {},
	notify: (oldValue?: T) => {},
	off: () => {},
	subscribe: (listener: (value: T, oldValue?: T) => void) => () => {},
});

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const nanoStartStore = {
	server: { $startStore: serverStore(initialStart) },
	client: () => ({ $startStore: atom(initialStart) }),
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const nanoNumberStore01 = {
	server: { $numberStore01: serverStore(initialNumber) },
	client: () => ({ $numberStore01: atom(initialNumber) }),
};
const nanoNumberStore02 = {
	server: { $numberStore02: serverStore(initialNumber) },
	client: () => ({ $numberStore02: atom(initialNumber) }),
};
const nanoNumberStore03 = {
	server: { $numberStore03: serverStore(initialNumber) },
	client: () => ({ $numberStore03: atom(initialNumber) }),
};
const nanoNumberStore04 = {
	server: { $numberStore04: serverStore(initialNumber) },
	client: () => ({ $numberStore04: atom(initialNumber) }),
};
const nanoNumberStore05 = {
	server: { $numberStore05: serverStore(initialNumber) },
	client: () => ({ $numberStore05: atom(initialNumber) }),
};
const nanoNumberStore06 = {
	server: { $numberStore06: serverStore(initialNumber) },
	client: () => ({ $numberStore06: atom(initialNumber) }),
};
const nanoNumberStore07 = {
	server: { $numberStore07: serverStore(initialNumber) },
	client: () => ({ $numberStore07: atom(initialNumber) }),
};
const nanoNumberStore08 = {
	server: { $numberStore08: serverStore(initialNumber) },
	client: () => ({ $numberStore08: atom(initialNumber) }),
};
const nanoNumberStore09 = {
	server: { $numberStore09: serverStore(initialNumber) },
	client: () => ({ $numberStore09: atom(initialNumber) }),
};
const nanoNumberStore10 = {
	server: { $numberStore10: serverStore(initialNumber) },
	client: () => ({ $numberStore10: atom(initialNumber) }),
};

type StringStore = string;
const initialString = '' as StringStore;
const nanoStringStore01 = {
	server: { $stringStore01: serverStore(initialString) },
	client: () => ({ $stringStore01: atom(initialString) }),
};
const nanoStringStore02 = {
	server: { $stringStore02: serverStore(initialString) },
	client: () => ({ $stringStore02: atom(initialString) }),
};
const nanoStringStore03 = {
	server: { $stringStore03: serverStore(initialString) },
	client: () => ({ $stringStore03: atom(initialString) }),
};
const nanoStringStore04 = {
	server: { $stringStore04: serverStore(initialString) },
	client: () => ({ $stringStore04: atom(initialString) }),
};
const nanoStringStore05 = {
	server: { $stringStore05: serverStore(initialString) },
	client: () => ({ $stringStore05: atom(initialString) }),
};
const nanoStringStore06 = {
	server: { $stringStore06: serverStore(initialString) },
	client: () => ({ $stringStore06: atom(initialString) }),
};
const nanoStringStore07 = {
	server: { $stringStore07: serverStore(initialString) },
	client: () => ({ $stringStore07: atom(initialString) }),
};
const nanoStringStore08 = {
	server: { $stringStore08: serverStore(initialString) },
	client: () => ({ $stringStore08: atom(initialString) }),
};
const nanoStringStore09 = {
	server: { $stringStore09: serverStore(initialString) },
	client: () => ({ $stringStore09: atom(initialString) }),
};
const nanoStringStore10 = {
	server: { $stringStore10: serverStore(initialString) },
	client: () => ({ $stringStore10: atom(initialString) }),
};

export const _nanoStores = {
	nanoStart: nanoStartStore,
	nanoNumber01: nanoNumberStore01,
	nanoNumber02: nanoNumberStore02,
	nanoNumber03: nanoNumberStore03,
	nanoNumber04: nanoNumberStore04,
	nanoNumber05: nanoNumberStore05,
	nanoNumber06: nanoNumberStore06,
	nanoNumber07: nanoNumberStore07,
	nanoNumber08: nanoNumberStore08,
	nanoNumber09: nanoNumberStore09,
	nanoNumber10: nanoNumberStore10,
	nanoString01: nanoStringStore01,
	nanoString02: nanoStringStore02,
	nanoString03: nanoStringStore03,
	nanoString04: nanoStringStore04,
	nanoString05: nanoStringStore05,
	nanoString06: nanoStringStore06,
	nanoString07: nanoStringStore07,
	nanoString08: nanoStringStore08,
	nanoString09: nanoStringStore09,
	nanoString10: nanoStringStore10,
};
