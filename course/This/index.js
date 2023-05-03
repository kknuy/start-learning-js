//this - object

console.log(this); // object {}

const user = {
    name: "Nastya",
    calcuteAge() {
        return new Date().getFullYear() - 2004;
    },
    getName() {
        console.log("Name: " + this.name);
    },
    sayHi() {
        console.log("SayHi: " + this.name);
    },
};

user.age = user.calcuteAge();
user.getAllInfo = function () {
    console.log("Age: " + this.age + ", name: " + this.name);
};


user.getName();
user.sayHi();
user.getAllInfo();

//bind call aply

const user2 = {
    name : 'Vlad',
}

user.getName.call(user2);

const mainHero = {
    fullname : "Superman",
    health : 1000,
    strength : 100,
}

const badHero = {
    fullname : "Joker",
    health : 100,
    strength : 10,
}

function printInfo (extrainfo = "") {
    console.log(`Name: ${this.fullname} , health ${this.health} strength ${this.strength} , ${extrainfo}`)
}

printInfo.call(mainHero, "Хороший герой");
printInfo.apply(badHero);
const bindeTest = printInfo.bind(badHero);
bindeTest("Злодей");

const programmer = {
    name : "kknuy",
    programmingLanguage : "JS",
    getName () {
        return this.name
    },
    getProgrammingLanguage () {
        return this.programmingLanguage
    },
}


console.log(programmer.getName());
console.log(programmer.getProgrammingLanguage());



const newGetName = programmer.getName;

console.log(newGetName());//no context
console.log(newGetName.call(programmer));//has context