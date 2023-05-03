//OOP - object class


//function , class

// function Animal (name) {
//     this.name = name;
//     this.getName = function () {
//         return this.name;
//     }

// }

class Animal  {
    constructor(name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }
}

const dog = new Animal('dog');
console.log(dog.getName()); 

//4 Приница ООП  (наследование, инкапсуляция, абстракция , полиморфизм)

//наследование

class Plane {
    constructor(type,numberOfPassengers) {
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    }

    startFlight () {
        console.log("Полетели")
    }
}

class MilitaryPlane extends Plane {
    constructor (type,numberOfPassengers,numberOfGuns){
        super(type,numberOfPassengers);
        this.numberOfGuns = 0;
    }
    Shooting () {
        console.log("Rata-ta-ta")
    }
    setNumberOfGuns (numberOfGuns) {
        this.numberOfGuns = numberOfGuns;
    }
}

const boing  = new Plane('Boiing',200);
boing.startFlight();
console.log(boing);

const su_24 = new MilitaryPlane('su-24',0);


su_24.setNumberOfGuns(20);
su_24.Shooting();
su_24.startFlight();
console.log(su_24);

//intstanceof 

console.log(su_24 instanceof MilitaryPlane);


function A() { 
    return {};
 }
function B() {
    return {};
  }

let a = new A();
let b = new B();

console.log( a == b );

//Инкапсуляция

//private # / public 

class Developer {
    #salary;
    constructor(name, programmingLanguage){
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000;
    }

    startCoding() {
        console.log(`${this.name} starting coding`)
        console.log(`${this.#salary} - $`)
        this.printPromgrammingLanguage
    }
    #printPromgrammingLanguage() {
        console.log(`programming language: ${this.programmingLanguage}`)
    }

    get devSalary () {
        return this.#salary;
    }
}

const developer = new Developer('kknuy','js');

developer.startCoding();


console.log(developer.name);
console.log(developer.programmingLanguage);
//публичные поля

class JuniorDeveloper extends Developer {
    constructor (name, programmingLanguage) {
        super(name, programmingLanguage);
    }
}

const juniorDeveloper = new JuniorDeveloper();
developer.startCoding();
console.log("salary: " + developer.devSalary);



