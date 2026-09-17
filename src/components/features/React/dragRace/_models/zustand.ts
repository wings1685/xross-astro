import { create } from "zustand";

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const startServerStore = () => ({
	startStore: initialStart,
	setStart: (_: StartStore) => {},
});
const zustandStartStore = {
	server: startServerStore,
	client: () => {
		return create<ReturnType<typeof startServerStore>>(set => ({
			startStore: initialStart,
			setStart: (value: StartStore) => set({ startStore: value }),
		}));
	},
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const numberServerStore01 = () => ({ numberStore01: initialNumber, setNumber01: (_: NumberStore) => {} });
const zustandNumberStore01 = {
	server: numberServerStore01,
	client: () => {
		return create<ReturnType<typeof numberServerStore01>>(set => ({
			numberStore01: initialNumber,
			setNumber01: (value: NumberStore) => set({ numberStore01: value }),
		}));
	},
};
const numberServerStore02 = () => ({ numberStore02: initialNumber, setNumber02: (_: NumberStore) => {} });
const zustandNumberStore02 = {
	server: numberServerStore02,
	client: () => {
		return create<ReturnType<typeof numberServerStore02>>(set => ({
			numberStore02: initialNumber,
			setNumber02: (value: NumberStore) => set({ numberStore02: value }),
		}));
	},
};
const numberServerStore03 = () => ({ numberStore03: initialNumber, setNumber03: (_: NumberStore) => {} });
const zustandNumberStore03 = {
	server: numberServerStore03,
	client: () => {
		return create<ReturnType<typeof numberServerStore03>>(set => ({
			numberStore03: initialNumber,
			setNumber03: (value: NumberStore) => set({ numberStore03: value }),
		}));
	},
};
const numberServerStore04 = () => ({ numberStore04: initialNumber, setNumber04: (_: NumberStore) => {} });
const zustandNumberStore04 = {
	server: numberServerStore04,
	client: () => {
		return create<ReturnType<typeof numberServerStore04>>(set => ({
			numberStore04: initialNumber,
			setNumber04: (value: NumberStore) => set({ numberStore04: value }),
		}));
	},
};
const numberServerStore05 = () => ({ numberStore05: initialNumber, setNumber05: (_: NumberStore) => {} });
const zustandNumberStore05 = {
	server: numberServerStore05,
	client: () => {
		return create<ReturnType<typeof numberServerStore05>>(set => ({
			numberStore05: initialNumber,
			setNumber05: (value: NumberStore) => set({ numberStore05: value }),
		}));
	},
};
const numberServerStore06 = () => ({ numberStore06: initialNumber, setNumber06: (_: NumberStore) => {} });
const zustandNumberStore06 = {
	server: numberServerStore06,
	client: () => {
		return create<ReturnType<typeof numberServerStore06>>(set => ({
			numberStore06: initialNumber,
			setNumber06: (value: NumberStore) => set({ numberStore06: value }),
		}));
	},
};
const numberServerStore07 = () => ({ numberStore07: initialNumber, setNumber07: (_: NumberStore) => {} });
const zustandNumberStore07 = {
	server: numberServerStore07,
	client: () => {
		return create<ReturnType<typeof numberServerStore07>>(set => ({
			numberStore07: initialNumber,
			setNumber07: (value: NumberStore) => set({ numberStore07: value }),
		}));
	},
};
const numberServerStore08 = () => ({ numberStore08: initialNumber, setNumber08: (_: NumberStore) => {} });
const zustandNumberStore08 = {
	server: numberServerStore08,
	client: () => {
		return create<ReturnType<typeof numberServerStore08>>(set => ({
			numberStore08: initialNumber,
			setNumber08: (value: NumberStore) => set({ numberStore08: value }),
		}));
	},
};
const numberServerStore09 = () => ({ numberStore09: initialNumber, setNumber09: (_: NumberStore) => {} });
const zustandNumberStore09 = {
	server: numberServerStore09,
	client: () => {
		return create<ReturnType<typeof numberServerStore09>>(set => ({
			numberStore09: initialNumber,
			setNumber09: (value: NumberStore) => set({ numberStore09: value }),
		}));
	},
};
const numberServerStore10 = () => ({ numberStore10: initialNumber, setNumber10: (_: NumberStore) => {} });
const zustandNumberStore10 = {
	server: numberServerStore10,
	client: () => {
		return create<ReturnType<typeof numberServerStore10>>(set => ({
			numberStore10: initialNumber,
			setNumber10: (value: NumberStore) => set({ numberStore10: value }),
		}));
	},
};

type StringStore = string;
const initialString = '' as StringStore;
const stringServerStore01 = () => ({ stringStore01: initialString, setString01: (_: StringStore) => {} });
const zustandStringStore01 = {
	server: stringServerStore01,
	client: () => {
		return create<ReturnType<typeof stringServerStore01>>(set => ({
			stringStore01: initialString,
			setString01: (value: StringStore) => set({ stringStore01: value }),
		}));
	},
};
const stringServerStore02 = () => ({ stringStore02: initialString, setString02: (_: StringStore) => {} });
const zustandStringStore02 = {
	server: stringServerStore02,
	client: () => {
		return create<ReturnType<typeof stringServerStore02>>(set => ({
			stringStore02: initialString,
			setString02: (value: StringStore) => set({ stringStore02: value }),
		}));
	},
};
const stringServerStore03 = () => ({ stringStore03: initialString, setString03: (_: StringStore) => {} });
const zustandStringStore03 = {
	server: stringServerStore03,
	client: () => {
		return create<ReturnType<typeof stringServerStore03>>(set => ({
			stringStore03: initialString,
			setString03: (value: StringStore) => set({ stringStore03: value }),
		}));
	},
};
const stringServerStore04 = () => ({ stringStore04: initialString, setString04: (_: StringStore) => {} });
const zustandStringStore04 = {
	server: stringServerStore04,
	client: () => {
		return create<ReturnType<typeof stringServerStore04>>(set => ({
			stringStore04: initialString,
			setString04: (value: StringStore) => set({ stringStore04: value }),
		}));
	},
};
const stringServerStore05 = () => ({ stringStore05: initialString, setString05: (_: StringStore) => {} });
const zustandStringStore05 = {
	server: stringServerStore05,
	client: () => {
		return create<ReturnType<typeof stringServerStore05>>(set => ({
			stringStore05: initialString,
			setString05: (value: StringStore) => set({ stringStore05: value }),
		}));
	},
};
const stringServerStore06 = () => ({ stringStore06: initialString, setString06: (_: StringStore) => {} });
const zustandStringStore06 = {
	server: stringServerStore06,
	client: () => {
		return create<ReturnType<typeof stringServerStore06>>(set => ({
			stringStore06: initialString,
			setString06: (value: StringStore) => set({ stringStore06: value }),
		}));
	},
};
const stringServerStore07 = () => ({ stringStore07: initialString, setString07: (_: StringStore) => {} });
const zustandStringStore07 = {
	server: stringServerStore07,
	client: () => {
		return create<ReturnType<typeof stringServerStore07>>(set => ({
			stringStore07: initialString,
			setString07: (value: StringStore) => set({ stringStore07: value }),
		}));
	},
};
const stringServerStore08 = () => ({ stringStore08: initialString, setString08: (_: StringStore) => {} });
const zustandStringStore08 = {
	server: stringServerStore08,
	client: () => {
		return create<ReturnType<typeof stringServerStore08>>(set => ({
			stringStore08: initialString,
			setString08: (value: StringStore) => set({ stringStore08: value }),
		}));
	},
};
const stringServerStore09 = () => ({ stringStore09: initialString, setString09: (_: StringStore) => {} });
const zustandStringStore09 = {
	server: stringServerStore09,
	client: () => {
		return create<ReturnType<typeof stringServerStore09>>(set => ({
			stringStore09: initialString,
			setString09: (value: StringStore) => set({ stringStore09: value }),
		}));
	},
};
const stringServerStore10 = () => ({ stringStore10: initialString, setString10: (_: StringStore) => {} });
const zustandStringStore10 = {
	server: stringServerStore10,
	client: () => {
		return create<ReturnType<typeof stringServerStore10>>(set => ({
			stringStore10: initialString,
			setString10: (value: StringStore) => set({ stringStore10: value }),
		}));
	},
};

const zustandStores = {
	zustandStart: zustandStartStore,
	zustandNumber01: zustandNumberStore01,
	zustandNumber02: zustandNumberStore02,
	zustandNumber03: zustandNumberStore03,
	zustandNumber04: zustandNumberStore04,
	zustandNumber05: zustandNumberStore05,
	zustandNumber06: zustandNumberStore06,
	zustandNumber07: zustandNumberStore07,
	zustandNumber08: zustandNumberStore08,
	zustandNumber09: zustandNumberStore09,
	zustandNumber10: zustandNumberStore10,
	zustandString01: zustandStringStore01,
	zustandString02: zustandStringStore02,
	zustandString03: zustandStringStore03,
	zustandString04: zustandStringStore04,
	zustandString05: zustandStringStore05,
	zustandString06: zustandStringStore06,
	zustandString07: zustandStringStore07,
	zustandString08: zustandStringStore08,
	zustandString09: zustandStringStore09,
	zustandString10: zustandStringStore10,
} as const;
export type ZustandStores = typeof zustandStores;
export type ZustandStoreKeys = keyof ZustandStores;

const createServerStore = (key: ZustandStoreKeys): ZustandStores[typeof key]['server'] => zustandStores[key].server;

type CreateClientStore = ReturnType<ZustandStores[ZustandStoreKeys]['client']>;
const createClientStore = (key: ZustandStoreKeys): CreateClientStore => zustandStores[key].client();

type ClientStoreInstance = Record<ZustandStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(zustandStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useZustandStore = <K extends ZustandStoreKeys, R extends ReturnType<ZustandStores[K]['server']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	const useHook = clientStoreInstance[key]!;
	return useHook() as R;
};
