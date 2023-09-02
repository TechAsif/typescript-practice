let profileName: (string | number)[];
let noDeninedType;
let users = [10,20,"sdf"]
let userData: {
    name: string,
    bio?: string,
    age: number
}[]
noDeninedType = 10;
noDeninedType = "asdf"
// profileName = ["10","4"];
// profileName = [10,10];
let userName = "Muhammad Abdur Rahman";

const mulitply = (a: number, b: number) => a*b;
console.log(`The multiply of 9 and 9 is: ${mulitply(9,9)}`,)

console.log("2 September")


let demoUnitonForNormalVariable: number | string;
demoUnitonForNormalVariable = 10;
demoUnitonForNormalVariable = "3";
// demoUnitonForNormalVariable = true

let unionArray: number | string[];
let unionArray2: (number | string)[];

unionArray = 10;
// unionArray = [10];
unionArray2 = ["f","2"]
unionArray2 = [10,20];
console.log(unionArray2);
let arrayTest: string[]=[];
arrayTest.push("asdfsad");
console.log(arrayTest)