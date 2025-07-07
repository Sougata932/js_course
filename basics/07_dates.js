let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
console.log(myDate.getDay());
let myCreatedDate = new Date(2024, 2, 23) //indexing of month starts from 0 
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2024, 0 , 25, 6, 56)
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2025-02-13") //YYYY-MM-DD
console.log(myCreatedDate3.toDateString());
let myCreatedDate4 = new Date("03-02-2024") //MM-DD-YYYY
console.log(myCreatedDate4.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);











