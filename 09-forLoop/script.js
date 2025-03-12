// Print 1 to 5
for (let count = 1; count <= 5; count++){  //initialization; stoping condition; updation 
    console.log("Divyanka Pagare");  //5 execute
}


// calculate sum of 1 to 15

let sum =0;
let n = 10;
for (let i = 1; i<=n; i++){
    sum = sum + i; 
}
console.log("sum = ", sum); 
console.log("Loop has ended");


// let -> i lifespan of i is only within for loop
// (don't use var -> it can be accesible outside of the for loop)
for ( let i = 1; i <= 5; i++){
    console.log("i = ",i)
}


// never use infinite loop
// for(let i =1; i >= 0; i++){
//     console.log("i = ", i)
// }



