// //task-1
// let A= parseFloat (prompt("enter the first number :  "));
// let B= parseFloat (prompt("enter the second number :  "));

// let operation= prompt("enter the operation +,-,*,/,%");

// switch(operation){
//     case "+":
//         console.log("Sum of two numbers =",A+B);
//         break;

//     case "-":
//         console.log("minus of two numbers =",A-B);
//         break;
//     case "*":
//         console.log("multi of two numbers =",A*B);
//         break;
//     case "/":
//         console.log("div of two numbers =",A/B);
//         break;
//     case "%":
//         console.log("modulos of two numbers =",A%B);
//         break;

//     default:
//         console.log("invalid operations");
//         break;
// }

    
//task-2

// let randomnumber= Math.random()*100;
// let number = Math.ceil(randomnumber);
// //let userGuess=null;

// while(true){
//     let userGuess = parseInt (prompt("guess the number between 1 and 100"));
    

//     if (userGuess<randomnumber){
//         console.log("Too low ! try again");
//     }
//         else if (userGuess>randomnumber){
//             console.log("Too high ! try again");
//     }
//         else if (userGuess==randomnumber){
//             console.log("Congratulation !! you guess the correct number .");
//     }   else {
//          console.log("invalid input  ! Please try again");
//     }
// }


// task-3

let sentence =("enter the sentence : ")

let wordcount=0;

for(i=0;i<words.length;i++){
    if(words [i] !== ""){
        wordcount++;
    }
}

console.log("the number of words is :",wordcount);


//task-4


let 