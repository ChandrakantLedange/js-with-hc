//Primitive data types:
//There are 7 types of primitive data types.
//1. string -
//2. Number -
//3. Boolean -
//4. Null -
//5. Undefined -
//6. Symbol - unique value
//7. BigInt -

//Ex.
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//Reference (Non primitive data types):
//1. Array -
//2. Objects -
//3. Functions -

//Ex.
const heros = ["hritik", "ajay", "akshay"];
let myObj = {
  name: "chandu",
  age: 28,
};

const myFunction = function () {
  console.log("Hellow world");
};

//to check data type
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof heros); //object
console.log(typeof myFunction); //function

//++++++++++++++++++++++++++++++++++++++
//Stack and Heap memory

//Stack(Primitive)
//stack memory creates a reference of value or copy

let myName = "Ganesh";

let myChildHoodName = myName;

myChildHoodName = "Chiman";

console.log(myName);
console.log(myChildHoodName);

//Heap(Non-primitive)
//Heap memory use direct value reference.

let userOne = {
  name: "monika",
  userEmail: "monika@gmail.com",
};

let userTwo = userOne;

userTwo.name = "Jeevika";
console.log(userOne);
console.log(userTwo);
