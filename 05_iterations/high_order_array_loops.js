const arr = [1,2,3,4]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"
for (const i of greetings) {
    console.log(i);    
}

const map = new Map() //Map is an object that holds key value pair, key in the map is unique
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IT', "Italy")
map.set('IN', "India") //will not print as the keys should be unique
console.log(map);
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    game: "Football",
    year: "2018"
}
//we can't iterate objects with forof loop like map
