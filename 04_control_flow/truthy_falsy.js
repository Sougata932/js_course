const userEmail="Sougata@gmail.com"

if(userEmail){
    console.log("Got an email");
} 
else {
    console.log("Don't have email");
}
//  //falsy values
//  false, "", 0, -0, null, NaN, undefined, BigInt 

//  //rest are truthy values : "0", "false", " ", [], {}, function(){}.....
const userEmail_new=""

if(userEmail_new){
    console.log("Got an email");
} 
else {
    console.log("Don't have email");
}
//nullsih coalescing operator (??) : null defined
let val1;
// val1=5 ?? 10  //output will be 5
// val1 = null ?? 10 // gives value 10
// val1 = undefined ?? 15 // gives value 15
val1 = null ?? 10 ?? 20 //takes the first value other than null

console.log(val1);

// terniary operator
//condition ? true : false
const tea=50
tea > 80 ? console.log("More than 80") : console.log("Less than 80");



