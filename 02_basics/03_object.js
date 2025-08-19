//object literals
const mySym=Symbol() //defining symbol or we can give value of the symbol mySym inside ()
const jsUser = {
    name: "Sougata",
    [mySym]: "Key1",
    "Full name": "Sougata Mondal",
    age: 18,
    email: "sougata@gmail.com",
    location: "Kolkata",
    isLoggedin: false,
}
console.log(jsUser.email); //in case of . we don't need to specify the data type
console.log(jsUser["email"]); //in case of [] we have to specify the data type like " "
console.log(jsUser["Full name"]); //to access vars like "Full name", we use [] method
console.log(jsUser[mySym]);
// jsUser.email = "sougata@google.com"
// Object.freeze(jsUser) //freezes the whole object, after that any changes will not be shown in the object
// jsUser.email = "sougatam@gmail.com"
// jsUser.name = "Google"
// console.log(jsUser["name"]);
// console.log(jsUser.email);
jsUser.greeting=function(){
    console.log("Hello user");    
}
jsUser.greeting2=function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());









