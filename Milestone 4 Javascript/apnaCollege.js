// console.log('hello world')
// let number = prompt('enter a number');

// if (number % 5 == 0) {
//     console.log('yes multiple of five')
// }
// else {
//     console.log('not a multiple')
// }

// for (let i = 1; i<=500; i++ ){
//     console.log('apna college')
// }

// Calculate sum of n
// let n = prompt('enter the n')
// let sum = 0;
// for (let i = 1; i <= n ; i++){
//     sum += i
// }

// console.log("sum: ", sum)

// while loop----------

// let i = 1;
// while (i < 5 ){
//     console.log('i = ', i)
//     i++;
// }

//  do while loop........

// let i = 20;
// do {
//     console.log('hello world ', i)
//     i++;
// } while ( i <= 30);

// for of loop.........works on strings and arrays

// let name = 'riyajul';
//  for (let i of name){
//     console.log(i)
//  }

// for in loop....... used in objects
// let student = {
//     name: 'Riyajul',
//     age : 22,
//     cgpa : 7.5,
//     isPassed : true,
// }

// for ( let i in student){
//     console.log('key = ', i, student[i])
// }

// practise question 1

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// templates literals
// let obj = {
//     item : 'pen',
//     price : 20,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;

// console.log(output)

// practise problem

let user = prompt("enter user name");

let output = `@${user}${user.length}`;
console.log(output);

