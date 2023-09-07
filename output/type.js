import { Player } from "./classes/Player.js";
let profileName;
let noDeninedType;
let users = [10, 20, "sdf"];
let userData;
noDeninedType = 10;
noDeninedType = "asdf";
// profileName = ["10","4"];
// profileName = [10,10];
let userName = "Muhammad Abdur Rahman";
const mulitply = (a, b) => a * b;
console.log(`The multiply of 9 and 9 is: ${mulitply(9, 9)}`);
console.log("2 September");
let demoUnitonForNormalVariable;
demoUnitonForNormalVariable = 10;
demoUnitonForNormalVariable = "3";
// demoUnitonForNormalVariable = true
let unionArray;
let unionArray2;
unionArray = 10;
// unionArray = [10];
unionArray2 = ["f", "2"];
unionArray2 = [10, 20];
console.log(unionArray2);
let arrayTest = [];
arrayTest.push("asdfsad");
console.log(arrayTest);
console.log('----------- 4 Sep 2023 ----------');
let anyTypeObj = {};
// anyTypeObj["name"] = "10"; 
console.log(anyTypeObj.name);
let funType;
funType = (a) => {
    return "true";
};
// funType = "fghfg"
console.log("5 sep 2023");
let userType;
userType = {
    name: "Asif",
    id: 10
};
console.log(userType);
console.log("6 Sep 2023");
let add;
add = (x, y) => {
    console.log("Not Call this function");
    return x + y;
};
add = function (a, b) {
    console.log("Call From Here");
    return a + b;
};
console.log(add(10, 20));
let usersDetails;
usersDetails = (x, y, z) => {
    return z.name;
};
console.log(usersDetails(10, 20, { id: '1', name: "Asif" }));
const sakib = new Player("Sakib", 38, "Bangladesh");
const mash = new Player('Mash', 40, "Bangladesh");
console.log(sakib.play());
console.log(mash.play());
console.log("7 Sep 2023");
