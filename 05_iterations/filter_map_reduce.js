const coding = ["js", "python", "cpp", "ruby"]

const values = coding.forEach((item) =>{
    console.log(item); 
    return item
})
console.log(values); //prints undefined, cause forEach doesn't return any value

const myNums = [1,2,3,4,5,6,7]

const newNums=myNums.filter((num)=> num>4)
console.log(newNums);
