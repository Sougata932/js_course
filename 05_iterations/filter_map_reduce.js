const coding = ["js", "python", "cpp", "ruby"]

const values = coding.forEach((item) =>{
    console.log(item); 
    return item
})
console.log(values); //prints undefined, cause forEach doesn't return any value

const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.filter((num)=> num>4)
console.log(newNums); //this returns value
//OR
const num =myNums.filter((i)=>{
    return i>4 //if we use {} then we have to return the value seperately
})
console.log(num); 

//with foreach
const new_Nums = []
myNums.forEach((num)=>{
    if(num > 4){
        new_Nums.push(num)
    }
})
console.log(new_Nums);

