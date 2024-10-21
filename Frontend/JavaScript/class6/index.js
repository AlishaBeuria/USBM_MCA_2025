
// print numbr betn 1 to 5


// for(let i=0; i<5 ; i++)
// {
//     console.log(i);
// }


// print 5 to 1

// for(let i=5; i>=1 ; i--)
//     {
//         console.log(i);
//     }

//let sum =0;
// for( let i=0; i<5 ; i++)
// {
//     sum = sum+i;
//     console.log(sum+i);

// }


// let sum =0;
// for( let i=0; i<5 ; i++){
//     let random=Math.floor(Math.random()*10);
//     let result =sum+random;
//     console.log(`the random number is ${result}`);
// }

//nested loop


// for(let i=1; i<=5;i++)
// {
//     for(let j=1;j<=2;j++){
//         console.log(j);
//     }
//     console.log(i);
// }


for(let i=1; i<=5 ; i++){
    let pattern="";
    for(let j=1; j<=i; j++){
        pattern+="*";
    }
    console.log(pattern);
}
