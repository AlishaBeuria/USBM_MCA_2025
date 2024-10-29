//Example of push() pop() shift()unshift()
//push(): it is used to add an element to the end of an array.


let color = ["red", "purple", "yellow", "pink"];
console.log(color);
let addcolor = "black";
color.push(addcolor);
console.log(color);

//pop() :pop() is used to remove last element to the end of an array.

let number = ["56", "9", "66", "35"];
console.log(number);
number.pop();
console.log(number);

//shift():it is used to remove the first element from an array and returns that element

let animal = ["tiger", "fox", "cat", "lion"];
console.log(animal);
animal.shift();
console.log(animal);

//unshift():it is used to add an element to the beginning of an array.

let fruit = ["orange", "litchi", "banana", "mango"];
console.log(fruit);
fruit.unshift("apple");
console.log(fruit);