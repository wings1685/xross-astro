import { create } from "zustand";

type Store = number;
const initialValue: Store = 0;
const serverStoreGetter = initialValue;
const serverStoreSetter = (_: Store) => {};

const zustandServerStore01 = () => ({ store01: serverStoreGetter, setStore01: serverStoreSetter });
const zustandStore01 = {
	server: zustandServerStore01,
	client: () => {
		return create<ReturnType<typeof zustandServerStore01>>(set => ({
			store01: 0,
			setStore01: (value: Store = 0) => set({ store01: value }),
		}));
	},
};
const zustandServerStore02 = () => ({ store02: serverStoreGetter, setStore02: serverStoreSetter });
const zustandStore02 = {
	server: zustandServerStore02,
	client: () => {
		return create<ReturnType<typeof zustandServerStore02>>(set => ({
			store02: 0,
			setStore02: (value: Store = 0) => set({ store02: value }),
		}));
	},
};
const zustandServerStore03 = () => ({ store03: serverStoreGetter, setStore03: serverStoreSetter });
const zustandStore03 = {
	server: zustandServerStore03,
	client: () => {
		return create<ReturnType<typeof zustandServerStore03>>(set => ({
			store03: 0,
			setStore03: (value: Store = 0) => set({ store03: value }),
		}));
	},
};
const zustandServerStore04 = () => ({ store04: serverStoreGetter, setStore04: serverStoreSetter });
const zustandStore04 = {
	server: zustandServerStore04,
	client: () => {
		return create<ReturnType<typeof zustandServerStore04>>(set => ({
			store04: 0,
			setStore04: (value: Store = 0) => set({ store04: value }),
		}));
	},
};
const zustandServerStore05 = () => ({ store05: serverStoreGetter, setStore05: serverStoreSetter });
const zustandStore05 = {
	server: zustandServerStore05,
	client: () => {
		return create<ReturnType<typeof zustandServerStore05>>(set => ({
			store05: 0,
			setStore05: (value: Store = 0) => set({ store05: value }),
		}));
	},
};
const zustandServerStore06 = () => ({ store06: serverStoreGetter, setStore06: serverStoreSetter });
const zustandStore06 = {
	server: zustandServerStore06,
	client: () => {
		return create<ReturnType<typeof zustandServerStore06>>(set => ({
			store06: 0,
			setStore06: (value: Store = 0) => set({ store06: value }),
		}));
	},
};
const zustandServerStore07 = () => ({ store07: serverStoreGetter, setStore07: serverStoreSetter });
const zustandStore07 = {
	server: zustandServerStore07,
	client: () => {
		return create<ReturnType<typeof zustandServerStore07>>(set => ({
			store07: 0,
			setStore07: (value: Store = 0) => set({ store07: value }),
		}));
	},
};
const zustandServerStore08 = () => ({ store08: serverStoreGetter, setStore08: serverStoreSetter });
const zustandStore08 = {
	server: zustandServerStore08,
	client: () => {
		return create<ReturnType<typeof zustandServerStore08>>(set => ({
			store08: 0,
			setStore08: (value: Store = 0) => set({ store08: value }),
		}));
	},
};
const zustandServerStore09 = () => ({ store09: serverStoreGetter, setStore09: serverStoreSetter });
const zustandStore09 = {
	server: zustandServerStore09,
	client: () => {
		return create<ReturnType<typeof zustandServerStore09>>(set => ({
			store09: 0,
			setStore09: (value: Store = 0) => set({ store09: value }),
		}));
	},
};
const zustandServerStore10 = () => ({ store10: serverStoreGetter, setStore10: serverStoreSetter });
const zustandStore10 = {
	server: zustandServerStore10,
	client: () => {
		return create<ReturnType<typeof zustandServerStore10>>(set => ({
			store10: 0,
			setStore10: (value: Store = 0) => set({ store10: value }),
		}));
	},
};

const zustandStores = {
	store01: zustandStore01,
	store02: zustandStore02,
	store03: zustandStore03,
	store04: zustandStore04,
	store05: zustandStore05,
	store06: zustandStore06,
	store07: zustandStore07,
	store08: zustandStore08,
	store09: zustandStore09,
	store10: zustandStore10,
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
