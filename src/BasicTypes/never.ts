//NEVER returns!

function SomeError(): never{
	throw new Error("This is my kingdom error");
}

SomeError();

export default {};
