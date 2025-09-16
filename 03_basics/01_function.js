function addTwonums(num1,num2){
    const result=console.log(num1+num2);
    return result
}
addTwonums(5,6)
function isLoggedin(username){
    if(username===undefined){
        console.log("Please enter valid username");
        return
    }
    console.log(`${username} has logged in`);
    return
}
isLoggedin("Sougata")
isLoggedin() //will give undefined value

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(32));
function calculateCartPrice2(val1,val2,...num1){ //... is rest operator here, it will take arguments and form an array out of them
    return num1
}
console.log(calculateCartPrice2(2,34,45,56,67)); //here val1=2, val2=34 and the rest is 45,56,67...so it will return 45,56,67

const user={
    name: "Sougata",
    price: 399
}
function handleObject(anyObject){
    const result=console.log(`Username is ${anyObject.name} and total price is ${anyObject.price}`);
    return result
}
handleObject(user)
handleObject({
    name: "Sam",
    price: 299
})



