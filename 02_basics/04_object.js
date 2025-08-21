//const tinderUser = new Object() //singletone object
const tinderUser = {} //non singletone object
tinderUser.id="abc123"
tinderUser.name="Sougata"
tinderUser.loggedin=false
//console.log(tinderUser);
const regUser={
    email: "some@gmail.com",
    fullname:{
        username:{
            firstname: "Sougata",
            lastname: "Mondal"
        }
    }

}
console.log(regUser.fullname); //we can access more nests by using . 

const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4: "d"};
const obj3=Object.assign({}, obj1, obj2); //here {} is target and obj1 and obj2 are sources....they are gathering in an empty obj... OR we can use {...obj1, ...obj2} like array
console.log(obj3);

const users=[  //objects within an array
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
console.log(users[1].id) 
console.log(users[2].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //datatype of the output is array
console.log(Object.values(tinderUser));
console.log((Object.entries(tinderUser))); //arraies in array


console.log(tinderUser.hasOwnProperty("loggedin")); //checks if it has the property in it










