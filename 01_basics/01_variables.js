
/*
*While let and const are block-scoped.
*var declarations are either globally scoped or function-scoped. 
*Let variables can be updated but not re-declared.
*const variables cannot be updated or re-declared.
*var variables may both be updated and re-declared inside their scope
*/

const accountId = 12311;
let accountName = "test";
var accountEmail = "test@google.com";

/*
Prefer to not use var
because of block scope and functional scope
*/

accountPassword = "test@123"; //It will not give any error but prefer to do no use this.

//variables are used to store a value or memorise a value.

console.log(accountId);
console.table([accountId,accountName,accountEmail,accountPassword]);