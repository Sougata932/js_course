//primitive data type stores into stack memory
//non-primitives into heap memory
//object declare
let user={
    name: "Sougata",
    upi: 123,
}
let user2=user
user2.name = "Hitesh" //to access the elements in object, we use '.'
console.log(typeof user);
console.log(user.name);
console.log(user2.name);


