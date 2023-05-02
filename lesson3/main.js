//операторы
//1- Унарные: ! - +
//2- бинарные: + - * / % ** && ||
//3- Тернарные операторы ? : 

//функции - function
//Function declaration 

// function sayHello() {
//     // console.log('Hello');
// }
// sayHello();

// function greet(name){
//     // console.log(`Hello, ${name}`);
// }
// greet('Alex')

// function getFullName(user, age){
//     console.log(user.first_name, user.last_name, age);
// }

// const user = {
//     first_name: 'Alex',
//     last_name: 'Depp'
// }
// const user2 = {
//     first_name: 'Alex',
//     last_name: 'Depp'
// }

// console.log(user.first_name, user.last_name);
// console.log(user2.first_name, user.last_name);

// getFullName(user, 20)
// getFullName(user2, 20)

function getFullName(user, age){
    if(age < 18){
        // console.log('Close');
    }else{
        // console.log(user.first_name, user.last_name);
    }
}

const user = {
    first_name: 'Alex',
    last_name: 'Depp'
}
const user2 = {
    first_name: 'Anna',
    last_name: 'Depp'
}
const user3 = {
    first_name: 'AIbek',
    last_name: 'Depp'
}

// getFullName(user, 23)
// getFullName(user2, 16)
// getFullName(user3, 14)

//Fuction expression
let multiply = function(a, b){
    return a * b;
}
let result = multiply(5, 10);
// console.log(result);

//1. Анонимная функция 
let sayHello = function(name){
    // console.log(`Hello, ${name}`);
}
// sayHello('Alex')

//2. CallBack
let numbers = [1,2,3,4,5]
 let doubleNum = numbers.map(function(num){
    return num * 2;
 });
//  console.log(doubleNum);

// 3. Immidiately Function Expression - LIFE
let result2 = (function() {
    let a = 10;
    let b = 20;
    return a + b;
})();
// console.log(result2);

//Arrow Function - стрелочные функции
let mul = (a,b) => {
    return a * b;
};
// console.log(mul(5,10));

// Метод Объекта
let person = {
    name: 'Alex',
    age: 40,
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
}
// person.sayHello();

var customer = {
    name: 'Aijamal',
    surname: 'Depp',
    fatherName: 'Depp',
    isResident: false,
    id: 1,
    birthDate: null,
    passport: {
        series: 'ID',
        documentNo:'12345',
        expiryDate: '01-01-2028',
        issueData: '01-01-2019',
    },
    getFullName: function() {
        return this.surname + " " + this.name + " " + this.fatherName;
    },
    phoneNumbers: ["+996551101010", "+996700101010", "+7909101010"],
    isMobileBankingUser: true,
};
console.log(customer);

console.log('Customer ID =', customer.id);
console.log('Customer passport expiration date =  ', customer.passport.expiryDate);
console.log('Customer full name=', customer.getFullName());

console.log('статус клиента:', customer.isResident ? 'резидент' : 'Не резидент');

console.log(customer.id === 0 ? 'новый' : 'сущ', "клиент");
