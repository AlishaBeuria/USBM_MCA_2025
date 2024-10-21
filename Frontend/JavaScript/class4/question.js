// //task-1 generate s random number between 1 and 100?

// randomnumber= Math.floor(Math.random() * 100) +1;

// console.log(randomnumber);

// //task-2  

// let roundnumber=Math.floor(6.75);
// console.log(roundnumber)

// //task-3

// let roundNumber=Math.ceil(9.25);
// console.log(roundNumber);

// //task-4
// console.log(Math.floor(Math.random() * (27 - 5 + 1)) + 5);

// //task-5
// let currentDate= new Date();
// currentDate.setDate(currentDate.getDate() + 5)
// console.log(currentDate);

// //task-6
// const startdate= new Date('2024-10-18');

// const today = new Date();

// const milliseconds= today -startdate;

// console.log(milliseconds);

// //task-7
// let currentHour= new Date().getHours();
// console.log(currentHour);

// //task-8

// const date = new Date('january 1, 2025');
// console.log(date);

//task-9

const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednsday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    
    default:
        console.log(" Invalid day");
}


// task-10
const currentMonth = new Date().getMonth();
switch (currentMonth) {
    case 0:
        console.log("january");
        break;
    case 1:
        console.log("frebruary");
        break;
    case 2:
        console.log("march");
        break;
    case 3:
        console.log("april");
        break;
    case 4:
        console.log("may");
        break;
    case 5:
        console.log("june");
        break;
    case 6:
        console.log("july");
        break;
    case 7:
        console.log("august");
        break;
    case 8:
         console.log("septmber");
         break;
    case 9:
        console.log("october");
        break;
    case 10:
        console.log("november");
         break;
    case 11:
        console.log("december");
        break;
    default:
        console.log(" Invalid month");
}

//task-11

/* getday is used  to return  the day of a week  for a specific date .

 getdate() is used to return the day of athe month for a specific date
 */