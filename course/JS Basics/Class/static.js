//static используется без контекста this

class Car {
    static isCar(car){
        return car instanceof Car;
    }
    static #initialParameters ={
        name:'Car',
        maxSpeed:1000,   
    }
    constructor(name,maxSpeed){
        this.name = name || Car.#initialParameters.name;
        this.maxSpeed = maxSpeed || Car.#initialParameters.maxSpeed;
    }
    drive(){
        console.log(`Car - ${this.name} her max speed ${this.maxSpeed}`);
    }
}

const car  = new Car("audi",200);
console.log(Car.isCar(car));

const car1 = new Car();
console.log(car1)