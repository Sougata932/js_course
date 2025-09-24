const coding = ["js", "python", "cpp", "ruby"]

coding.forEach( function(val){
    console.log(val);  
})
 
//with arrow function
coding.forEach((val) => {
    console.log(val);
});


const myCoding = [
    {
        language : "java",
        languageFilename: "java"
    },
    {
        language : "python",
        languageFilename: "py"
    },
    {
        language : "javascript",
        languageFilename: "js"
    },
    {
        language : "C++",
        languageFilename: "cpp"
    }

]
myCoding.forEach((item) => {
    console.log(item.language);
    console.log(item);
    
})