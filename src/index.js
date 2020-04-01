inlets = 1;
outlets = 1;

const { Noise } = require('./noise')

const log = (...args) => {
	post(`${args.join(", ")}\n`);
};

const noise = new Noise()
const msg_int = number => { 
	const value = noise.noise(number);
	log(value);
	outlet(0, value)
}