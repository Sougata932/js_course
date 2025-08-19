const marvel = ['ironman', 'thor', 'hulk']
const dc = ['batman', 'superman', 'flash']

// marvel.push(dc) //will add dc as an array
// console.log(marvel);
// console.log(marvel[3][2]); //to gee the element 'flash'


// // console.log(marvel.concat(dc));
//  marvel.concat(dc)
//  console.log(marvel.concat(dc));

 const allHeros = [...marvel, ...dc]
console.log(allHeros);
 
const anotherArr = [1,2,3,4,[5,6],7,[8,[9,0]]]
const newArr = anotherArr.flat(1) //(depth) or simply we can write (infinity) so it will get the depth autometically
console.log(newArr);

console.log(Array.isArray("sougata"));
console.log(Array.from("sougata")); //converts SOUGATA in to an array
console.log(Array.from({name:"sougata"})); //will give empty array

let sc1=100
let sc2=200
let sc3=300

console.log(Array.of(sc1,sc2,sc3));







