//Получение ключей
const developer = {
    name : 'developer',
    job : 'frontend',
    experience : 24,
    jobAllInfo: {
        framework : 'react',
    },
};

console.log(developer);
//get key 1
console.log('name: ' + developer.name);
console.log('name: ' + developer.jobAllInfo);

//get key 2
const key = 'name';

console.log('name: ' + developer['jobAllInfo']['framework']);
console.log('name: ' + developer[key]);

//edit delete add

const person = {
    id: 1,
    age: 18,
    programminglanguage: 'JavaScript',
    hasExperienceInReact: false,
};
//add
console.log("============add==============");
person.experience = 6;

console.log(person);

//delete
console.log("============delete==============");

delete person.hasExperienceInReact;
console.log(person);

//edit
console.log("============edit==============");

person.id = 2;
console.log(person);


//7 - примитиы нессылочные типы 
//1 - не примитив - объект ссылочный тип

const setName = (entity,value) => {
    if(typeof entity === 'object') {
        entity.name  = value;
    } else  {
        entity = value;
    }
};

const student = {
    name: "Vlad",
};

let studentName = "Ivan";

setName(student,"Vl");
setName(studentName,"555");

console.log(student);
console.log(studentName);

const entity = {};

const testCopy = entity;

console.log(entity === testCopy);

//iterate object

const product = {
    id: 1,
    price: 50,
    currency: 'USD',
    name: 'toy',
};

//for in

for (const key in product) {
    console.log(key);
    const value = product[key];
    console.log(value);
}
///Object keys

const keys = Object.keys(product);
console.log('keys', keys);

const values = Object.values(product);
console.log('values', values);

const entris = Object.entries(product);
console.log('entris', entris);

//object keys
// string symbol

let user = {
    name: "kknuy",
    id: "123",
    undefined: undefined,
};

console.log(Object.keys(user));

//problem with the same key
const id = Symbol("id");
user = {
    [id]:1,
    name : "kknuy",
    name: "user",
};
console.log(Object.keys(user));
console.log(user);

// in

console.log("id" in user);
console.log(id in user);
console.log("name" in user);

// Объединения объектов
const developerInfo =  {
    age: 19,
    experience: 1,
};

const developerExtraInfo = {
    height: 200,
    isJunior: true,
};

const developer1 =  {
    ...developerInfo,
     ...developerExtraInfo,
     extra : {
        hobby: 'music',
     },
};

console.log("Developer", developer1);

//Опциональная цепочка

if (developer1?.extra?.hobby){
    console.log("У разработчика есть хобби");
} else {
    console.log("У разработчика нет хобби");
};

 