// class Dog{
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }

// const sharik = new Dog(30, 0.5, 'black')
// console.log(sharik);


// class Animal{
//     constructor(type, gender, color, voiceMake){
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceMake = voiceMake;
//     }
//     voice(){
//         console.log(this.voiceMake);
//     }
// }

// class Dog extends Animal {
//     constructor(type, gender, color, voiceMake, name){
//         super(type, gender, color, voiceMake);
//         this.name = name;
//     }
// }

// const sharik = new Dog('sharpei', 'male', 'black', 'gaf-gaf')
// console.log(sharik);
// sharik.voice();



//Абстракция
class Transport {
    constructor(title, model, color){
        this.title = title;
        this.model = model;
        this.color = color;
    }
    startEngine(){
        console.log(`On ${this.title} ${this.model} engine started`);
    }
}

//------наследование-----
class Car extends Transport {
    constructor(title, model, color, maxSpeed, speed){
        super(title, model, color);
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }
    //-----Инкапсуляция----
    _currentSpped = 0;

    currentSpped (){
        console.log(`Current Speed: ${this._currentSpped}`);
    }
    gas(){
        if(this._currentSpped >= this.maxSpeed){
            console.log(`Max speed on car ${this.title} ${this.model}: ${this.maxSpeed}`);
        }else{
            this._currentSpped += this.speed;
            this.currentSpped()
        }
    }
    
}
const bmw = new Car('BMW', 'M5', 'Black', 150, 20)
// console.log(boeing);
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()
bmw.gas()


// class Airplane extends Transport{
//     constructor(title, model, color, type, capacity){
//         super(title, model, color);
//         this.type = type;
//         this.capacity = capacity;

//     }


       //----Полиморфизм----
//     startEngine(){
//         console.log(`I am in the plane ${this.title} ${this.model} engine Started`);
//     }
// }

// const boeing = new Airplane('Boeing', '777', 'white', 'delivery', '300-400')




// console.log(bmw);
// bmw.startEngine()
// boeing.startEngine()





