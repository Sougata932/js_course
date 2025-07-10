//declaring array 
//const arr=[1,2,3,4]
const myArr2=["batman", "suoerman", "flash"]
const myArr= new Array(2,4,56,7,9)



console.log(myArr2[3]);
console.log(myArr);
myArr2.push(34)
console.log(myArr2);
myArr.pop()
console.log(myArr);

myArr.unshift(0) //add an element in the first
console.log(myArr);
myArr.shift() //delete from the first
console.log(myArr);
console.log(myArr.includes(9)); //checks if the value exists
console.log(myArr.indexOf(4)); //if doesn't have that value, reurns -1 (null)
 const newArr=myArr.join()
console.log(newArr); //converts array into string
const arr=[0,1,2,3,4]
console.log("A ", arr);
const newarr=arr.slice(1,4) //doesn't change the main array
console.log(newarr);
console.log("B ", arr);
const newarr2 = arr.splice(1,4) //changes the main array
console.log(newarr2);
console.log("C ", arr);











