const myObject ={
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

//to iterate objects, we use for in loop
for (const key in myObject) {
    console.log(key); 
}

const programming = ["Python", "js", "C++", "Ruby"]
for (const key in programming) {
    console.log(key); //will print the keys ie. the index
    
}

const map = new Map() //Map is an object that holds key value pair, key in the map is unique
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IT', "Italy")
map.set('IN', "India")

//will not print anything, cause map is not iterable
for (const key in map) {
    console.log(key);
}