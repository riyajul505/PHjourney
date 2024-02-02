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

// let user = prompt("enter user name");

// let output = `@${user}${user.length}`;
// console.log(output);

// Arrays
// let heros = ['rahul','hulk','thor']

// let marks = [96, 75, 48]

// console.log(marks);
// marks[0] = 1;
// console.log(marks);

// strings are immituable

// for (let i of heros){
//     console.log(i)
// }

// practise question

// let sum = 0;
// let marks = [85, 97, 44, 37, 76, 60];

// for (let el of marks){
//     sum += el
// }
// console.log(sum/marks.length)

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++){
//     items[i] = items[i] - ((items[i] * 10) / 100)
// }

// console.log(items)

// let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'ibm', 'netflix'];

// companies.shift();
// companies.splice(1,1,'ola');
// companies.pop()
// console.log(companies);


// Functions

// function print(value){
//     console.log(value)
// }

// print('hello world');

// arrow function
// let arrowSum = (a, b) => {
//     return a+b;
// }

// arrowSum(1,2) 

// callback function

// let arr = ['dhaka','borishal']

// arr.forEach(function print(val){
//     console.log(val)
// } );

// arr.forEach((val) => {
//     console.log(val.toUpperCase())
// });

// let arr = [2,4,6,9]

// arr.forEach((val, idx) => {
//     console.log(val**2, idx)
// })
// DOM


// Task 1
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors['golden rod'])

// Task 2
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// };

// car['passenger capacity'] = 5;

// console.log(car)

// Task 3

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)

// Task 4

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// sum = 0;
// for (const i in student){
//     // console.log(student[i], i)
//     sum++
// }
// console.log(sum)

// Task 5

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (const i in myObject){
//     console.log(`key: ${i} | type: ${typeof (myObject[i])}`)
// }


// Task 1

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const revColors = []

// for (const i of colors){
//     revColors.unshift(i)
// }

// console.log(revColors)

// Task 2

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for (let i of numbers){
//     if (i%2==0){
//         console.log(i)
//     }
// }
//Task 3

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let str = "";

// for (let i of numbers){
//     str += i;
// }
// console.log(str)
//Task 5
// const statement = 'I am a hard working person';

// const newArray = statement.split(' ')

// let finalArray = '';
// for (let i of newArray){
//     finalArray = i +' '+ finalArray;
// }
// console.log(finalArray)

