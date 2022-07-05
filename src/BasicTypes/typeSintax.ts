//Basic Types

//types added by inference
let name: string = "Luca"; // "Maria" "Kant" 'djwqjdowp' `${variable}`
let age: number = 16; // 1 -1 -0.75 0xf00d
let alive: boolean = true; // true or false
let symbol: symbol = Symbol('some-symbol');
let big: bigint = 10n;

//Arrays

let arrayOfNumbers: Array<number> = [1,2,3];
let otherArrayOfNumbers: number[] = [1,2,3];
let arrayOfStrings: Array<string> = ["A", "B", "C"];
let otherArrayOfStrings: string[] = ["A", "B", "C"];


// Objects

let person: {name: string, age: number, isAlive?: boolean} = {
	name: "Machado de Assis",
	age: 120,
	isAlive: false
};

//Functions

function add(x: number, y: number): number{
	return x + y;
}

const result = add(2,2);

const multiply: (x: number, y: number)=> number = (x,y) => x*y;
console.log(multiply(2,2));

export default {}