let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let creatDate = new Date(2024,4,24)
// let creatDate = new Date(2024,4,24,5,3)
// let creatDate = new Date("2024-04-24")
let creatDate = new Date("04-24-2024")

// console.log(creatDate.toLocaleString());


// console.log(creatDate.toTimeString());

let timestmp = Date.now()
// console.log(timestmp);
// console.log(creatDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);

// console.log(newDate.getFullYear());
// console.log(newDate.getTime());
// console.log(newDate.getDay());
// console.log(`${newDate.getFullYear() } and the time is ${newDate.getTime()}`);
newDate.toLocaleDateString("default",{
    weekday:"long",
    // timeZone:""
})


