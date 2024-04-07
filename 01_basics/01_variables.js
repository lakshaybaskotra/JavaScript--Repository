const accountId = 56789
let  accountEmail = "lakshay@gmail.com"
var accountPassword = "12345"
 accountCity = "Jammu"

// accountId =4 not allowed 

accountEmail = "lkshay5@.com"
accountPassword= "32189"
accountCity = "Kathua"
/*
not use var because of  issue in block scope and functional scope 
*/

console.log(accountId);
console.table([accountId, accountEmail,accountPassword, accountCity])