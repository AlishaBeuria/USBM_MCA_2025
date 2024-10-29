//array:array is the collection of elements.
//contiguous(linear)
//under a single name(variable)
//ex:let newArray=[];
//  keyword variable element
//let newArary=[];
//console.log(newArary);//[]
//console.log(typeof newArary);//object

 //let name ="rabel";
//let age=60;
//let proffesion="criminal";
//let ismarried="true";
//reason 1=we need everything under a single variable name.
//reason 2=structured way,codeReadability easy to maintain.
//let userArray=["rabel",60,"criminal","true"];
//console.log (userArray);
 

let number= [1,2,3,4,5];
console.log(number);

let newNumber=new Array(6,8,5,7);
console.log(newNumber);

//Array methods
console.log(number.length);//s

//assessing
let cities=["bbsr","cuttack","jajpur","balasore","bhadrak"];
console.log(cities[0]);//bbsr
console.log(cities[4]);//bhadrak


//last element
let lastcity=cities.length-1;
console.log(cities[lastcity]);

//balasore
console.log(cities[3]);
console.log(cities[lastcity/3]);
console.log(cities[lastcity-3]);

//modify:
let modifycity="kendrapada"
cities[3]=modifycity;
console.log(cities);

//add element
//push()
console.log(cities);
let addcity="jagatsinghpur";
cities.push(addcity);
console.log(cities);

//remove:
//pop();
console.log(cities);
cities.pop();
console.log(cities);

//shift
console.log(cities);
cities.shift();
console.log(cities);

//unshift
console.log(cities);
cities.unshift("baripada");
console.log(cities);