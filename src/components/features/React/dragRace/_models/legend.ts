import { observable } from "@legendapp/state";
import type { GetOptions, ListenerFn, TrackingType } from "@legendapp/state";

const serverStore = <T>(initialValue: T) => ({
	delete: () => {},
	set: (_: T) => {},
	peek: () => initialValue,
	get: (_?: TrackingType | GetOptions) => initialValue,
	onChange: (cb: ListenerFn<number>, options?: {}) => {},
});

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const legendStartStore$ = {
	server: ({ startStore$: serverStore(initialStart) }),
	client: () => ({ startStore$: observable<StartStore>(initialStart) }),
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const legendNumberStore01$ = {
	server: ({ numberStore01$: serverStore(initialNumber) }),
	client: () => ({ numberStore01$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore02$ = {
	server: ({ numberStore02$: serverStore(initialNumber) }),
	client: () => ({ numberStore02$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore03$ = {
	server: ({ numberStore03$: serverStore(initialNumber) }),
	client: () => ({ numberStore03$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore04$ = {
	server: ({ numberStore04$: serverStore(initialNumber) }),
	client: () => ({ numberStore04$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore05$ = {
	server: ({ numberStore05$: serverStore(initialNumber) }),
	client: () => ({ numberStore05$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore06$ = {
	server: ({ numberStore06$: serverStore(initialNumber) }),
	client: () => ({ numberStore06$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore07$ = {
	server: ({ numberStore07$: serverStore(initialNumber) }),
	client: () => ({ numberStore07$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore08$ = {
	server: ({ numberStore08$: serverStore(initialNumber) }),
	client: () => ({ numberStore08$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore09$ = {
	server: ({ numberStore09$: serverStore(initialNumber) }),
	client: () => ({ numberStore09$: observable<NumberStore>(initialNumber) }),
};
const legendNumberStore10$ = {
	server: ({ numberStore10$: serverStore(initialNumber) }),
	client: () => ({ numberStore10$: observable<NumberStore>(initialNumber) }),
};

type StringStore = string;
const initialString = '' as StringStore;
const legendStringStore01$ = {
	server: ({ stringStore01$: serverStore(initialString) }),
	client: () => ({ stringStore01$: observable<StringStore>(initialString) }),
};
const legendStringStore02$ = {
	server: ({ stringStore02$: serverStore(initialString) }),
	client: () => ({ stringStore02$: observable<StringStore>(initialString) }),
};
const legendStringStore03$ = {
	server: ({ stringStore03$: serverStore(initialString) }),
	client: () => ({ stringStore03$: observable<StringStore>(initialString) }),
};
const legendStringStore04$ = {
	server: ({ stringStore04$: serverStore(initialString) }),
	client: () => ({ stringStore04$: observable<StringStore>(initialString) }),
};
const legendStringStore05$ = {
	server: ({ stringStore05$: serverStore(initialString) }),
	client: () => ({ stringStore05$: observable<StringStore>(initialString) }),
};
const legendStringStore06$ = {
	server: ({ stringStore06$: serverStore(initialString) }),
	client: () => ({ stringStore06$: observable<StringStore>(initialString) }),
};
const legendStringStore07$ = {
	server: ({ stringStore07$: serverStore(initialString) }),
	client: () => ({ stringStore07$: observable<StringStore>(initialString) }),
};
const legendStringStore08$ = {
	server: ({ stringStore08$: serverStore(initialString) }),
	client: () => ({ stringStore08$: observable<StringStore>(initialString) }),
};
const legendStringStore09$ = {
	server: ({ stringStore09$: serverStore(initialString) }),
	client: () => ({ stringStore09$: observable<StringStore>(initialString) }),
};
const legendStringStore10$ = {
	server: ({ stringStore10$: serverStore(initialString) }),
	client: () => ({ stringStore10$: observable<StringStore>(initialString) }),
};

export const _legendStores = {
	legendStart: legendStartStore$,
	legendNumber01: legendNumberStore01$,
	legendNumber02: legendNumberStore02$,
	legendNumber03: legendNumberStore03$,
	legendNumber04: legendNumberStore04$,
	legendNumber05: legendNumberStore05$,
	legendNumber06: legendNumberStore06$,
	legendNumber07: legendNumberStore07$,
	legendNumber08: legendNumberStore08$,
	legendNumber09: legendNumberStore09$,
	legendNumber10: legendNumberStore10$,
	legendString01: legendStringStore01$,
	legendString02: legendStringStore02$,
	legendString03: legendStringStore03$,
	legendString04: legendStringStore04$,
	legendString05: legendStringStore05$,
	legendString06: legendStringStore06$,
	legendString07: legendStringStore07$,
	legendString08: legendStringStore08$,
	legendString09: legendStringStore09$,
	legendString10: legendStringStore10$,
};
