type Listener = () => void;
const serverStore = <T>(value: T) => ({
	getServerSnapshot() { return value; },
	getSnapshot() { return value; },
	subscribe(_: Listener) {},
	set(_: T) {},
});
const clientStore = <T>(initialValue: T) => () => {
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
	const set = (value: T) => {
		store = value;

		for (let listener of listeners) {
			listener();
		}
	};

	return { subscribe, getServerSnapshot, getSnapshot, set };
};

const initialStart = null as 'number' | 'string' | null;
const serverStartStore = { ...serverStore(initialStart) };
const usesStartStore = { server: serverStartStore, client: clientStore(initialStart) };

const initialNumber: number = 0;
const serverNumberStore = { ...serverStore(initialNumber) };
const usesNumberStore01 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore02 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore03 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore04 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore05 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore06 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore07 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore08 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore09 = { server: serverNumberStore, client: clientStore(initialNumber) };
const usesNumberStore10 = { server: serverNumberStore, client: clientStore(initialNumber) };

const initialString: string = '';
const serverStringStore = { ...serverStore(initialString) };
const usesStringStore01 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore02 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore03 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore04 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore05 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore06 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore07 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore08 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore09 = { server: serverStringStore, client: clientStore(initialString) };
const usesStringStore10 = { server: serverStringStore, client: clientStore(initialString) };

export const _uSESStores = {
	usesStart: usesStartStore,
	usesNumber01: usesNumberStore01,
	usesNumber02: usesNumberStore02,
	usesNumber03: usesNumberStore03,
	usesNumber04: usesNumberStore04,
	usesNumber05: usesNumberStore05,
	usesNumber06: usesNumberStore06,
	usesNumber07: usesNumberStore07,
	usesNumber08: usesNumberStore08,
	usesNumber09: usesNumberStore09,
	usesNumber10: usesNumberStore10,
	usesString01: usesStringStore01,
	usesString02: usesStringStore02,
	usesString03: usesStringStore03,
	usesString04: usesStringStore04,
	usesString05: usesStringStore05,
	usesString06: usesStringStore06,
	usesString07: usesStringStore07,
	usesString08: usesStringStore08,
	usesString09: usesStringStore09,
	usesString10: usesStringStore10,
};
