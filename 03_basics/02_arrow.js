const user = {
    name: "Sougata",
    price: 200,
    welcomemsg: function () {
        console.log(`${this.name}, welcome to the website`);
        console.log(this); //will print the current context inside scope
    }
}
user.welcomemsg()
user.name = "Sohely"
user.welcomemsg()
console.log(this); //current context empty...globally...

const chai = () => {
    let username = "Sam"
    console.log(this);
    console.log(this.username);
    
}
chai()
const addTwo = (num1,num2)=> (num1+num2) //if we give () we don't need to return the value like we do in {}
console.log(addTwo(5,6));




