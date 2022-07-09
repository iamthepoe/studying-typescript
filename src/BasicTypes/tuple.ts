const userData: [number, string] = [11, "Eleven"];
const userData2: readonly [number, string, string?] = [10, "Ten"];
const userData3: [number, string, ...string[]] = [0, "Zero"];

console.log(`[0]: ${userData[0]} | [1]: ${userData[1]}`);

// userData[0] = "Luca"; => Type Error

userData[0] = 17; // Valid Type
userData[1] = "Luca";
// userData2[0] = 1 => error (readonly)
userData3.push("0");

console.log(userData);
console.log(userData2);

export default {};