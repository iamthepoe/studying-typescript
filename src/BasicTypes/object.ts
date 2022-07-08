
//by type (don't do this)
	const objectB: object = {
		keyA: 0,
		keyB: 1
	}

	console.log(objectB);
	//console.log(objectB.keyA); - Error: don't exists in type 'object'


//by type again
	const objectC: {
		keyA: string;
		keyB: string;
	} = {
		keyA: "A",
		keyB: "B"
	}

	console.log(objectC.keyA);
	console.log(objectC.keyB)

//by inference
	const objectA = { 
		keyA: 'Value A',
		keyB: 'Value B'
	}

	console.log(objectA);

//signature
	const objectD: {
		keyA: string;
		[key: string]: unknown;
	} = {
		keyA: "LMAO"
	}
	objectD.something = "A"; // valid
	console.log(objectD);

export {};
