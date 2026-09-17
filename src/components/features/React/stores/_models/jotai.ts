import { atom } from "jotai";

type Store = number;
const initialValue: Store = 0;
const serverStore = initialValue;

const jotaiStore01 = {
	server: () => ({ store01: serverStore }),
	client: () => {
		const store01 = atom(initialValue);

		return { store01 };
	},
};
const jotaiStore02 = {
	server: () => ({ store02: serverStore }),
	client: () => {
		const store02 = atom(initialValue);

		return { store02 };
	},
};
const jotaiStore03 = {
	server: () => ({ store03: serverStore }),
	client: () => {
		const store03 = atom(initialValue);

		return { store03 };
	},
};
const jotaiStore04 = {
	server: () => ({ store04: serverStore }),
	client: () => {
		const store04 = atom(initialValue);

		return { store04 };
	},
};
const jotaiStore05 = {
	server: () => ({ store05: serverStore }),
	client: () => {
		const store05 = atom(initialValue);

		return { store05 };
	},
};
const jotaiStore06 = {
	server: () => ({ store06: serverStore }),
	client: () => {
		const store06 = atom(initialValue);

		return { store06 };
	},
};
const jotaiStore07 = {
	server: () => ({ store07: serverStore }),
	client: () => {
		const store07 = atom(initialValue);

		return { store07 };
	},
};
const jotaiStore08 = {
	server: () => ({ store08: serverStore }),
	client: () => {
		const store08 = atom(initialValue);

		return { store08 };
	},
};
const jotaiStore09 = {
	server: () => ({ store09: serverStore }),
	client: () => {
		const store09 = atom(initialValue);

		return { store09 };
	},
};
const jotaiStore10 = {
	server: () => ({ store10: serverStore }),
	client: () => {
		const store10 = atom(initialValue);

		return { store10 };
	},
};

const jotaiStores = {
	store01: jotaiStore01,
	store02: jotaiStore02,
	store03: jotaiStore03,
	store04: jotaiStore04,
	store05: jotaiStore05,
	store06: jotaiStore06,
	store07: jotaiStore07,
	store08: jotaiStore08,
	store09: jotaiStore09,
	store10: jotaiStore10,
} as const;
export type JotaiStores = typeof jotaiStores;
export type JotaiStoreKeys = keyof JotaiStores;

const createServerStore = (key: JotaiStoreKeys): JotaiStores[typeof key]['server'] => jotaiStores[key].server;

type CreateClientStore = ReturnType<JotaiStores[JotaiStoreKeys]['client']>;
const createClientStore = (key: JotaiStoreKeys): CreateClientStore => jotaiStores[key].client();

type ClientStoreInstance = Record<JotaiStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(jotaiStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useJotaiStore = <K extends JotaiStoreKeys, R extends ReturnType<JotaiStores[K]['client']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	return clientStoreInstance[key] as R;
};
