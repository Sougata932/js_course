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