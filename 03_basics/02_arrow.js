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

