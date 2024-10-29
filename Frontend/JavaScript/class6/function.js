/*function:function is a set of block of reusable code
to perform a specific task*/
//function declaration 
//function is a key word
//function syntax(){
//}


//write a function print your name
//function printName(){
  //  console.log(`my name is alisha`);
//}
 

//printName();//invoke or call
//Arguments and parameter
//function printName(name){//name is the parameter
 //console.log(`myname is ${name}`);
//}
//printName("payal");


//age city
//function printName(name,age,city){
  //  console.log(`my name is${name},my age is ${age},my city is ${city}` );
//}
//printName("payal","22","bbsr")


//function printName(name,age,city){
   // console.log(`my name is${name}, ${age}, ${city}` );
//}
//printName("payal","22","bbsr")


//invoke or call //printName is the caller
//let output=printName("payal","22","bbsr");
//console.log(output);


//syntax:
//const printName=(name)=>{//const for constant value//=> is fat arrow
  //  return`my name is ${name}`;

//}
//console.log(printName("alisha"));//call
//reference error means this is variable is not stored at the memory

//done with   basics of function
//callback 

//function greeting(name,hour){
  //if(hour < 12){
    //return`hii goodmorning! ${name}`;

  //}else if(hour < 18){
    //return`hii good afternoon! ${name}`;

  //}else{
    //return`hii good evening! ${name}`;

  //}

//}
//const result =greeting("alisha",11)
//console.log(result);

//example -2
//simple calculator using function and switch statement
//const calculator =(num1,num2,operation)=>{
//switch(operation){
  //case '+':
    //return num1+num2;
    //break;
    //case'-':
    //return num1-num2;
    //break;
    //case'*':
    //return num1*num2;
    //break;
    //case'/':
    //return num1/num2;
    //break;
    //default:
      //return "invalid operation";

//}
//}
//let output = calculator(4,2,"*");
//console.log(output);


//Example-3
//const add=(a,b)=>a+b;
//console.log(add(3,2));

//rest parameter
//const printNumbers=(...numbers)=>{
  //return numbers;
//}
//let output=printNumbers(1,2,3,4,5,6,7,8,9);
//console.log(output);

//callback function
//when afunction is called as an argument in an another function.
//syntax:
//function say(name,callback){
//console.log(`my name ${name}`);
//return callback;
//}
//function hello(){
 // return "hello"
//}

//callback authentication
//const autentication = (enteredData, callback) => {
  //return callback(enteredData);
//}
//const verify = (userData) => {
  //let user = "user";
  //let admin = "admin"
  //if(userData === user){
    //  return "she is a user";
  //}else if (userData === admin) {
    //  return "she is a admin";
  //}else {
    //  return "not a authorized person";
  //}
//}
//console.log(autentication("alisha", verify));

//asynchronous-if error happens in line1,it will not stop the execution and switch to next line. 

//example:
setTimeout(() => {
  console.log("helllo");
}, 5000);

