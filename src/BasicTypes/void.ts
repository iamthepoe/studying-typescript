function noReturn(...args: string[]): void{
	console.log(args);
}

noReturn("Luca", "Poe");

const person = {
	name: "Ludwig",
	lastName: "Wittgenstein",
	showName(): void{
		console.log(`${this.name} ${this.lastName}`);
	}
}

person.showName();
export default {person};