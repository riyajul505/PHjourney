// Destructuring
// const obj = {
//     shroom : 'lol',
//     banana : 'lol2'
// }

// const {banana} = obj;

// console.log(banana)

// const num = [1,2,3,4,5]

// let [number] = [num, ...num]

// console.log(number)

// const circle = {
//     radius : 10
// }

// const style = {
//     bg : 'red'
// }

// const total = {
//     ...circle,
//     ...style
// }

// console.log(total)

// Arrow function

// const add = (a,b) => a+b;
// const total = add(1,3)
// console.log(total)

// const add = () => console.log('johhn');
// const total = add();
// console.log(total)

// const product = {
//     count : 500,
//     data : [
//         {id: 1, name: "lenevo"},
//         {id: 1, name: "lenevo"}
//     ]
// }

// console.log(product.data[0].name)

// Optional Chaining

// const user2 = {
//     id : 5005,
//     name : 'pori bibi',
//     address : {
//         city: 'chittag',
//         country : 'bangladesh'
//     }
// }

// console.log(user2.address.street?.second)


// map mapping

// const number = [4,5,6,7,8,2]
// const double = a => a *2;
// const result = number.map(double)
// const result = number.map(n => n*2);
// console.log(result)

// const sum = number.reduce((p,c) => p+c , 0)
// console.log(sum)

// const final = number.filter(n => n>6);
// console.log(final);

// const final = number.find(n => n>5);

// console.log(final)

// const products = [
//     {id: 1, name: 'lenovo', price : 65000},
//     {id: 2, name: 'dell', price : 55000},
//     {id: 3, name: 'hp', price : 45000}
// ]
// const total = products.reduce((a,c) => a+c.price, 0);
// console.log(total)
// const names = products.map(n => n.name)

// console.log(names)

// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive)

// class Teacher {
//     constructor( name, subj){
//         this.name = name;
//         this.subj = subj;
//     }
// }

// const abcSir = new Teacher('Abu bakkar sir', "Math");

// console.log(abcSir)

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

// Task 1

// const number = [1,3,5,7,9];

// const odd = number.map(n => n + 1);
// console.log(odd)

// Task 2
// const number = [33, 50, 79, 78, 90, 101, 30];

// const div = number.filter(n => n%10 == 0);

// console.log(div)

// const instructor = [
//     {name: 'Nodi', age : 28, position : 'senior'},
//     {name: 'Akil', age : 26, position : 'junior'},
//     {name: 'Shobuj', age : 30, position : 'senior'},

// ]

// const senior = instructor.filter(n => n.position == 'senior');

// console.log(senior)

// const totalAge = instructor.reduce((c,n) => c+n.age , 0);

// console.log(totalAge)

// const sum =(p, q)=> {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);


// const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// console.log(stuInfo["name"]); 


const dreamGirl = [
    {
    sokina: {
     name: "bbu",
     height: "5.4",
     family: [{ father: "rock", mother: "shila", sister: "chinki" }],
     age: undefined,
     contactInfo: [{facebook: {link: "https://www.facebook.com/",followers: "12545",status: "single",friendsList: [{ name: "rofik" }, undefined],},},{ instagram: "https://www.instagram.com/" },],},
    },
   ];