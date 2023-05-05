// console.log(document);
// document.body
// console.log(document.body);


//----получение
// let h1 = document.getElementsByTagName('h1')
// console.log(h1);

// let btn = document.getElementById('myId')
// console.log(btn);

// let h1 = document.getElementsByTagName('h1')
// console.log(h1);


// let text = document.querySelector('h1')
// let textClass = document.querySelector('.text')
// let textId = document.querySelector('#textId')
// let listItems = document.querySelectorAll('.list-item')

// console.log(text);
// console.log(textClass);
// console.log(textId);
// console.log(listItems);


// получить элемент тэгом h2 и с классом text
//получить элемент с id = green
//получить все элементы с классом item
// let h2 = document.querySelector('h2.text')
// let green = document.querySelector('#green')
// let items = document.querySelectorAll('.item')
// console.log(h2);
// console.log(green);
// console.log(items);




//---текст
// let text = document.querySelector('h1')
// console.log(text);
// console.log(text.textContent);
// console.log(text.innerText);
// console.log(text.innerHTML);

// text.textContent = 'lorem<span>lorem</span> lorem'
// text.innerText = 'Hello'

// text.innerHTML = 'Hello <span>Lorem</span>'

// console.log(text.textContent);
// console.log(text.innerHTML);

// let item = document.querySelectorAll('.list-item')
// console.log(item);
// console.log(Array.from(item));

// Array.from(item).forEach((item, idx) =>{
//     item.textContent += idx + 1
// })

// let text = document.querySelectorAll('.text')
// Array.from(text).forEach((item) => {
//     item.textContent = item.textContent.slice(0, -1)
//     item.textContent = `${item.textContent.slice(0, -1)}!`
// })

//---стили
// let h1 = document.querySelector('h1')
// console.log(h1.style);
// h1.style.color = 'red'
// h1.style.textAlign = 'center'
// h1.style.fontSize= '100px'
//  h1.style.fontSize= 20 + 'px'

//  h1.style.cssText = 'color: red; text-align: center; font-size: 10px'

//получить элемент с классом circle
//задать размер 100px 100px
//задать задний фон и дать границы (border) и сделать круг

// let circle = document.querySelector('.circle')
// circle.style.width = '100px'
// circle.style.height = '100px'
// circle.style.background = 'red'
// circle.style.border = '5 px solid black'
// circle.style.borderRadius = '50%'

//получить элементы с классом list-item
//четные элементы сделать красного цвета, а нечетные синего
//каждому элементу созать линию снизу (textDecoration)
//и добавить к каждому элементу текст it (item it)

// let item1 = document.querySelectorAll('.list-item')
// Array.from(item1).forEach((item, idx) => {
//     if(idx % 2 === 0){
//         item.style.color = 'red'
//     }else{
//         item.style.color = 'blue'
//     }

//     item.style.textDecoration = 'underline'
//     item.textContent = `${item.textContent} it`
// })

//-----классы-----
// let h1 = document.querySelector('h1')
// console.log(h1.className);
// console.log(h1.classList);

// console.log(h1.classList.contains('black'));

// h1.classList.add('black')
// h1.classList.remove('red')
// h1.classList.remove('red')
// h1.classList.toggle('green')
// h1.classList.replace('white', 'blue')
