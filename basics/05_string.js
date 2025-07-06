const name="Sougata"
let repo = 50
console.log(name+repo); //concat
console.log(`Hello my name is ${name} and my repo count is ${repo}`) //kind of f string but we use backticks (``)

const gameName = new String("Sougata-New-Game")
console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //to get the letter in that index
console.log(gameName.indexOf('t'));  //to get the index of a letter
const newStr = gameName.substring(0,5) //make a substring of that string (index of the starting element, index of the ending element-1)
console.log(newStr);
console.log(gameName.slice(0,5));
console.log(gameName.slice(-8, 7));
const id = "    hello  world   "
console.log(id.trim()); //trims the white space
const url ="https://sougata.com/sougata%20game"
console.log(url.replace('%20', ' '));
console.log(url.includes("%20")) //checks if that element is present
console.log(url.includes("Game")); //capital and small alphabets matters
console.log(gameName.split('-'));


















