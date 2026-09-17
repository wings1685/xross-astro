import { atom } from "jotai";

type StartStore = 'number' | 'string' | null;
const initialStart = null as StartStore;
const jotaiStartStore = {
	server: ({ startStore: initialStart }),
	client: () => ({ startStore: atom(initialStart) }),
};

type NumberStore = number;
const initialNumber = 0 as NumberStore;
const jotaiNumberStore01 = {
	server: ({ numberStore01: initialNumber }),
	client: () => ({ numberStore01: atom(initialNumber)}),
};
const jotaiNumberStore02 = {
	server: ({ numberStore02: initialNumber }),
	client: () => ({ numberStore02: atom(initialNumber)}),
};
const jotaiNumberStore03 = {
	server: ({ numberStore03: initialNumber }),
	client: () => ({ numberStore03: atom(initialNumber)}),
};
const jotaiNumberStore04 = {
	server: ({ numberStore04: initialNumber }),
	client: () => ({ numberStore04: atom(initialNumber)}),
};
const jotaiNumberStore05 = {
	server: ({ numberStore05: initialNumber }),
	client: () => ({ numberStore05: atom(initialNumber)}),
};
const jotaiNumberStore06 = {
	server: ({ numberStore06: initialNumber }),
	client: () => ({ numberStore06: atom(initialNumber)}),
};
const jotaiNumberStore07 = {
	server: ({ numberStore07: initialNumber }),
	client: () => ({ numberStore07: atom(initialNumber)}),
};
const jotaiNumberStore08 = {
	server: ({ numberStore08: initialNumber }),
	client: () => ({ numberStore08: atom(initialNumber)}),
};
const jotaiNumberStore09 = {
	server: ({ numberStore09: initialNumber }),
	client: () => ({ numberStore09: atom(initialNumber)}),
};
const jotaiNumberStore10 = {
	server: ({ numberStore10: initialNumber }),
	client: () => ({ numberStore10: atom(initialNumber)}),
};

type StringStore = string;
const initialString = '' as StringStore;
const jotaiStringStore01 = {
	server: ({ stringStore01: initialString }),
	client: () => ({ stringStore01: atom(initialString)}),
};
const jotaiStringStore02 = {
	server: ({ stringStore02: initialString }),
	client: () => ({ stringStore02: atom(initialString)}),
};
const jotaiStringStore03 = {
	server: ({ stringStore03: initialString }),
	client: () => ({ stringStore03: atom(initialString)}),
};
const jotaiStringStore04 = {
	server: ({ stringStore04: initialString }),
	client: () => ({ stringStore04: atom(initialString)}),
};
const jotaiStringStore05 = {
	server: ({ stringStore05: initialString }),
	client: () => ({ stringStore05: atom(initialString)}),
};
const jotaiStringStore06 = {
	server: ({ stringStore06: initialString }),
	client: () => ({ stringStore06: atom(initialString)}),
};
const jotaiStringStore07 = {
	server: ({ stringStore07: initialString }),
	client: () => ({ stringStore07: atom(initialString)}),
};
const jotaiStringStore08 = {
	server: ({ stringStore08: initialString }),
	client: () => ({ stringStore08: atom(initialString)}),
};
const jotaiStringStore09 = {
	server: ({ stringStore09: initialString }),
	client: () => ({ stringStore09: atom(initialString)}),
};
const jotaiStringStore10 = {
	server: ({ stringStore10: initialString }),
	client: () => ({ stringStore10: atom(initialString)}),
};

export const _jotaiStores = {
	jotaiStart: jotaiStartStore,
	jotaiNumber01: jotaiNumberStore01,
	jotaiNumber02: jotaiNumberStore02,
	jotaiNumber03: jotaiNumberStore03,
	jotaiNumber04: jotaiNumberStore04,
	jotaiNumber05: jotaiNumberStore05,
	jotaiNumber06: jotaiNumberStore06,
	jotaiNumber07: jotaiNumberStore07,
	jotaiNumber08: jotaiNumberStore08,
	jotaiNumber09: jotaiNumberStore09,
	jotaiNumber10: jotaiNumberStore10,
	jotaiString01: jotaiStringStore01,
	jotaiString02: jotaiStringStore02,
	jotaiString03: jotaiStringStore03,
	jotaiString04: jotaiStringStore04,
	jotaiString05: jotaiStringStore05,
	jotaiString06: jotaiStringStore06,
	jotaiString07: jotaiStringStore07,
	jotaiString08: jotaiStringStore08,
	jotaiString09: jotaiStringStore09,
	jotaiString10: jotaiStringStore10,
};
