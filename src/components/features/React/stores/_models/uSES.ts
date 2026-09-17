type Store = number;
const initialValue: number = 0;
type Listener = () => void;

const serverStore = {
	subscribe(_: Listener) {},
	getServerSnapshot() { return initialValue; },
	getSnapshot() { return initialValue; },
	setStore(_: Store) {},
};
const clientStore = () => {
	let store = initialValue;
	let listeners: Listener[] = [];
	const subscribe = (listener: Listener) => {
		listeners = [...listeners, listener];

		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};
	const getServerSnapshot = () => initialValue;
	const getSnapshot = () => store;
	const setStore = (value: Store) => {
		store = value;

		for (let listener of listeners) {
			listener();
		}
	};

	return { subscribe, getServerSnapshot, getSnapshot, setStore };
};
const uSESStore01 = { server: serverStore, client: clientStore };
const uSESStore02 = { server: serverStore, client: clientStore };
const uSESStore03 = { server: serverStore, client: clientStore };
const uSESStore04 = { server: serverStore, client: clientStore };
const uSESStore05 = { server: serverStore, client: clientStore };
const uSESStore06 = { server: serverStore, client: clientStore };
const uSESStore07 = { server: serverStore, client: clientStore };
const uSESStore08 = { server: serverStore, client: clientStore };
const uSESStore09 = { server: serverStore, client: clientStore };
const uSESStore10 = { server: serverStore, client: clientStore };

export const _uSESStores = {
	store01: uSESStore01,
	store02: uSESStore02,
	store03: uSESStore03,
	store04: uSESStore04,
	store05: uSESStore05,
	store06: uSESStore06,
	store07: uSESStore07,
	store08: uSESStore08,
	store09: uSESStore09,
	store10: uSESStore10,
};
