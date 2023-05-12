// let h1 = document.querySelector('h1')

// h1.onclick = (event) => {
//     console.log(123);
//     console.log(event);
//     console.log(event.target);
//     h1.style.color = 'red'
// }

// h1.addEventListener ('click', (e) => {
//     console.log(132);
// })

// const fn = () =>  {
//     console.log('click');
//     h1.removeEventListener('click', fn)
// }

// h1.addEventListener('click', fn)


//--------
// h1.addEventListener('contextmenu', () => {
//     alert('click right mouse')
// })

// h1.addEventListener('mouseover', () => {
//     h1.style.color = 'red'
// })
//  h1.addEventListener('mouseout', () => {
//     h1.style.color = 'black'
//  } )


// h1.addEventListener('mousemove', () => {
//     console.log(123);
// })


// let input = document.querySelector('input')

// input.addEventListener('keydown', (event) => {
//     console.log(input.value);
//     console.log(event.key);
// })
// input.addEventListener('keyup', (event) => {
//     console.log(input.value);
//     console.log(event.key);
// })

// input.addEventListener('input', () => {
//     console.log(input.value);
// })


let users = [
    {
    "id": 1,
    "country": "USA",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "country": "USA",
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "country": "USA",
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    },
    {
    "id": 4,
    "country": "Germany",
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
    "lat": "29.4572",
    "lng": "-164.2990"
    }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
    }
    },
    {
    "id": 5,
    "country": "USA",
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
    }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
    }
    },
    {
    "id": 6,
    "country": "Germany",
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
    "street": "Norberto Crossing",
    "suite": "Apt. 950",
    "city": "South Christy",
    "zipcode": "23505-1337",
    "geo": {
    "lat": "-71.4197",
    "lng": "71.7478"
    }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
    "name": "Considine-Lockman",
    "catchPhrase": "Synchronised bottom-line interface",
    "bs": "e-enable innovative applications"
    }
    },
    {
    "id": 7,
    "country": "Germany",
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
    "street": "Rex Trail",
    "suite": "Suite 280",
    "city": "Howemouth",
    "zipcode": "58804-1099",
    "geo": {
    "lat": "24.8918",
    "lng": "21.8984"
    }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
    "name": "Johns Group",
    "catchPhrase": "Configurable multimedia task-force",
    "bs": "generate enterprise e-tailers"
    }
    },
    {
    "id": 8,
    "country": "Germany",
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
    "street": "Ellsworth Summit",
    "suite": "Suite 729",
    "city": "Aliyaview",
    "zipcode": "45169",
    "geo": {
    "lat": "-14.3990",
    "lng": "-120.7677"
    }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
    "name": "Abernathy Group",
    "catchPhrase": "Implemented secondary concept",
    "bs": "e-enable extensible e-tailers"
    }
    },
    {
    "id": 9,
    "country": "Germany",
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
    "street": "Dayna Park",
    "suite": "Suite 449",
    "city": "Bartholomebury",
    "zipcode": "76495-3109",
    "geo": {
    "lat": "24.6463",
    "lng": "-168.8889"
    }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
    }
    },
    {
    "id": 10,
    "country": "USA",
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
    "lat": "-38.2386",
    "lng": "57.2232"
    }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
    "name": "Hoeger LLC",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
    }
    }
    ]

    let status = 'All'

  let row = document.querySelector('.row')  

  let menuItems = document.querySelectorAll('.menu-item')


  const addUserInRow = () => {
    Array.from(menuItems).forEach((item) => {
        item.style.color= 'black'
        if(item.textContent === status){
            item.style.color = 'red'
        }
        item.addEventListener('click', () => {
            status = item.textContent
            addUserInRow()
        })
    })

    row.innerHTML = '';




    users.filter((item) => {
        // return item.country === status
        if(status !== 'All') {
            return item.country === status
        }
        return item
    }).forEach((item) => {
        let card = document.createElement('div')
        let country = document.createElement('h3')
        let title = document.createElement('h2')
        let email = document.createElement('p')
        let address = document.createElement('p')
        let company = document.createElement('p')


        card.classList.add('card')
        country.classList.add('card__country')
        title.classList.add('card__title')
        email.classList.add('card__email')
        address.classList.add('card__address')
        company.classList.add('card__company')

        title.textContent = item.name
        country.textContent = item.country
        email.textContent = `Email: ${item.email}`
        address.textContent = `Address: ${item.address.city}, ${item.address.street}`
        company.textContent = `Company: ${item.company.name}, ${item.company.catchPhrase}`

        card.append(title)
        card.append(country)
        card.append(email)
        card.append(address)
        card.append(company)

        row.append(card)

    })
  }

addUserInRow()

