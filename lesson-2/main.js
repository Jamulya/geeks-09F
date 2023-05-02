// let color = 'green';
// switch(color) {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow': 
//         console.log('wait');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('color emty');
// }


//логическике операторы - &&(AND) || (OR) !(NOT)
//операторы сравнения - > < >= <== == === != !== 

//indefined - неопределенный 
// var birthDate ;
// console.log(birthDate);

//null
// var address = null;
// console.log(address);

          // 0,1,2,3
// let array = [1,2,3,4];
// console.log(array[3]);
// const mass = ['a,', 'b', 'c', 'd']
// console.log(mass[1]);

let obj = {
    username: 'Anna',
    followers: [
        {
            username: 'Alex'
        },
        {
            username: 'Aibek',
            followers: [
                {
                    username: 'Oskar',
                },
                {
                    username: 'Kirill',
                },
                {
                    username: 'Kirill',
                },
            ]
        },
        {
            username: 'Adel'
        },
        {
            username: 'Anna'
        },
    ]
};
// console.log(obj);
// console.log(obj.followers[1].username);
// console.log(obj.followers[1].followers[2].username);

//циклы
const array1 = [
    {
        username: 'Anna',
        full_name: 'Lourens'
    },
    {
        username: 'Alex',
        full_name: 'Lourens'
    },
    {
        username: 'Oleg',
        full_name: 'Lourens'
    },
    {
        username: 'Kirill',
        full_name: 'Lourens'
    },
]
// console.log(array1[0].username, array1[0].full_name);
// console.log(array1[1].username, array1[1].full_name);
// console.log(array1[2].username, array1[2].full_name);
// console.log(array1[3].username, array1[3].full_name);

// 
// let i = 0;

// i++;
// i++;
// i++;
// i--;
// i--;
// i--;
// i--;
// console.log(i);

//for
for(let i = 0; i < array1.length; i++){
    // console.log(array1[i].username, array1[i].full_name);
    if(i === 2){
        break;

    }else{
        // console.log(array1[i].username, array1[i].full_name);
    }
}

//for...of
for(let user of array1){
    // console.log(user);
}


var childrenYears = [2012,2010, 2020, 1999, 2012, 2021, 2023, 2015, 2014, 2013];
var giftCount = 0;
for(let childYear of childrenYears ){
    var childAge = 2023 - childYear;
    if(childAge >= 3 && childAge < 13){
        giftCount++;
    }
}
// console.log("Gift count:", giftCount, 'of', childrenYears.length, 'children');




//for..in
const obj2 = {
    key1: "key-1",
    key2: "key-2",
    key3: "key-3",
    username: 'Alex',
    age: 40,
    followers: 1000
}
// console.log(obj2.key1);

for(let key in obj2){
    // console.log(key + ":" + obj2[key] );
}


//while
let name = 'Aijamal';
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);

let i = 0;
// while(i < name.length){
//     console.log(name[i]);
//     i++;
// }

// let nameMass = [1,5,3,7];
// let a = 0;
// while(a < nameMass.length){
//     console.log(nameMass[a]);
//     a++;
// }

//do...while
// let count = 10;
// do{
//     console.log(count);
//     count --;
// }while(count > 0)

//array
const users = [
    {
        username: 'Anna',
        salary: 500
    },
    {
        username: 'Alex',
        salary: 1000
    },
    {
        username: 'Anna',
        salary: 1500
    },
]
// console.log(users);

// const filterUsers = [];
// for(let user of users){
//     if(user.salary > 500){
//         filterUsers.push(user)
//     }
// }
// console.log(filterUsers);

//map 
// const desUsers = users.map(user => ({
//     name: user.username,
//     salary: user.salary
// }))
// console.log(desUsers);


//forEach
users.forEach(user => {
    // console.log(user);
})
