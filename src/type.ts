import {Player} from "./classes/Player.js"
import { IsPlayer } from './interfaces/IsPlayer';

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

console.log('----------- 4 Sep 2023 ----------');

let anyTypeObj: {name?: string} = {};
// anyTypeObj["name"] = "10"; 
console.log(anyTypeObj.name)
let funType: Function;
 funType = (a:number):number | string => {
    return "true";
}
// funType = "fghfg"

console.log("5 sep 2023");

let userType: User;
userType = {
    name: "Asif",
    id: 10
}
console.log(userType)

console.log("6 Sep 2023")

let add: (a: number, b: number) => number;

add = (x: number, y: number): number => {
    console.log("Not Call this function")
    return x + y;
}

add = function(a,b){
    console.log("Call From Here")
    return a+b;
}

console.log(add(10, 20))

type userDetails = {
    name: string,
    id: string
}



let usersDetails: (a: number, b: number, c: userDetails) => string;
usersDetails = (x, y, z) => {
    return z.name
}

console.log(usersDetails(10,20,{id:'1',name: "Asif"}))




const sakib = new Player("Sakib", 38,"Bangladesh","dfs")
const mash = new Player('Mash', 40, "Bangladesh","dfsdf")
console.log(sakib.play())
console.log(mash.play())

console.log("7 Sep 2023")
console.log("10 Sep 2023");

const players: IsPlayer[]= [];
players.push(sakib);
players.push(mash);
console.log(...players)

console.log("11 sep 2023")

const addId = <T>(obj: T) => {
    const id = 10;
    return {...obj,id}
}

const genericUser = addId({
    name: "asif"
})

console.log(genericUser.name);
console.log(genericUser.id)

enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATE
}

interface ApiResponse<T>{
    status: RType
    data: T
}

const apiResponseData: ApiResponse<{
    name: string,
    email: string
}> = {
    status: RType.SUCCESS,
    data: {
        name: "asif",
        email: "asif26.baust@gmail.com"
    }

}

console.log(apiResponseData.data.email)
console.log(apiResponseData.data.name)
console.log(apiResponseData.status)

let touple: [number, string] = [10, "dsfasd"];
touple[0]= 20;
console.log(touple)







