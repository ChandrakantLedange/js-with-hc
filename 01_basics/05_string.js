const name = "chandu";
const repoCount = 50;
console.log(name + repoCount + " value"); //old way

console.log(`My name is ${name} and repo count is ${repoCount} till date`);
const newName = new String("Ganesh"); //[String: 'Ganesh']

console.log(typeof newName); //object

console.log(name[0]);
console.log(name.length); //6
console.log(name.toUpperCase()); //CHANDU
console.log(name.charAt(2)); //a
console.log(name.indexOf("h")); //1

//substring(start_number, end_number); //excluded end_number
//substirng will ignore negative value and replace with 0
const subName = name.substring(0, 4);
console.log(subName); //chan

//slice(start_number, end_number); //excluded end_number
//we can give negative position number
const newStr = name.slice(1, -4);

console.log(newStr); // h

//trim()  - used to remove white space
const myName = "    Monika          ";
console.log(myName); //with space
const newmyName = myName.trim();

console.log(newmyName); // without space

const url = "chandu@%20gmail.com";
console.log(url);
const newUrl = url.replace("%20", "");
console.log(newUrl);

const newUrlRes = url.includes("20");
const newUrlResone = url.includes("21");
console.log(newUrlRes); //true
console.log(newUrlResone); //false

const splitName = url.split("20");
console.log(splitName);
["chandu@%", "gmail.com"];

//for more details
//serach with any method on  mdn official website
//ex. split javascript mdn
