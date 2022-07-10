enum Colors{
	red, //0
	blue, //1
	green //2
}

enum Philosophies{
	Platonism = 'p',
	Aristotelism = 'a',
	Randianism = 'r',
	//Tomism, without initializer => 0, 1, 2 | r, ?, ?
	Kantianism = 'k'
}

console.log(Colors.red === 0);
console.log(Colors[0] === Colors[Colors.red]);
console.log(Philosophies.Kantianism == Philosophies[Philosophies.Kantianism]);
console.log(Philosophies[111]); //undefined 

export default {}
