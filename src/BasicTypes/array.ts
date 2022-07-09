//Array<T> - T[]

function multiplyArgs(...args: Array<number>): number{
	return args.reduce((ac, value)=> ac*value, 1);
}

function stringsTogether(...args: string[]): string{
	return args.reduce((ac, value)=> ac + value);
}

const mult = multiplyArgs(1,2,3);
const strings = stringsTogether("A", "B", "C");

console.log(mult + '\n' + strings);

export default {};