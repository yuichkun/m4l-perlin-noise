// @ts-nocheck
inlets = 2;
outlets = 8;

let counter = 0;

const log = (...args) => {
	post(`${args.join(", ")}\n`);
};

const msg_int = number => log(++counter);