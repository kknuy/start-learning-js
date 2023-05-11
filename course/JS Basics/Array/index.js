const names = ['Ad','Ab','Ac','Af'];

console.group(names);
console.group(names.length);

//edit delete add
//add
const  newName = "Ax";
names.push(newName);

console.log(names);

names.unshift("At","Au");
console.log(names);

//delete

let firstRemove = names.shift();
console.log(names);
console.log(firstRemove);


let lastRemove = names.pop();
console.log(names);
console.log(lastRemove);

//edit

names[0] = 1;
console.log(names);
console.log('--------------------------------');
//Iterator 
console.log('------------for-------------');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};


//
console.log('------------for of --------');
for (const name of names) {
    console.log(name);
};


//for each 
console.log('------------for each --------------');
names.forEach((name,index,names) => console.log('name-',name,'index-',index,'names-',names));


//Array methods

//map - позволяет делать действия с элементами
console.log('------------map---------------');
const salarys = [100,200,300,400,500];

const updateSalarys = salarys.map((salary) => console.log('salary',salary * 2));
console.log(updateSalarys);

//filter
console.log('-------------filter-------------');
const filteredSalarys = salarys.filter((salary,index) => {
    return  salary > 200 && index % 2 === 0;
});

console.log(filteredSalarys);

//find
console.log('----------find--------------');
const findSalary = salarys.find((salary,index) => {
    return salary === 300 && index % 2 === 0;
});
console.log(findSalary);


//findIndex
console.log('-----------findIndex--------------');
const findIndexSalary = salarys.findIndex((salary,index) => {
    return salary === 300 && index % 2 === 0;
});
console.log(findIndexSalary);


//some every

let elementSalary = salarys.some((salary) => {
    return salary > 1000;
});
console.log(elementSalary);

elementSalary = salarys.every((salary) => {
    return salary > 200;
});
console.log(elementSalary);

//reduce
console.log('-----------reduce-----------');
const newArray = [1,2,3,4,5];

const sum = newArray.reduce((acc,element) => {
    console.log("acc: " + acc);
    console.log("element: " + element);
    return acc + element;
});

console.log('sum: ' + sum);
console.log('--------------------------------');
//sort 
// < 0 , < 0 , 0

newArray.sort((a,b) => { 
    return b - a;
});
console.log(newArray);


names.sort((a,b) => { 
    return b - a;
});
console.log(names);

//splice clie indexOf join reverse includes

const cars = ['bmw','mercedes','audi'];

const deletedCars = cars.splice(0,1,'aston-marti');
console.log(cars);
console.log(deletedCars);

console.log(cars.slice(0,1));

//splice изменяет массив, так же может добавлять элементы а splice нет 


//indexOf
console.log('-----------indexOf------------');
console.log(cars.indexOf('mercedes'));

//includes
console.log('-----------includes-----------');
console.log(cars.includes('mercedes'));

//split  + join

const listOfOrder = "Телефон, велосипед, ноутбук";

const listOrder = listOfOrder.split(", ");

console.log(listOrder);
console.log(listOrder.length);

const listOrderJoin = listOrder.join(': ');

console.log(listOrderJoin);
console.log(listOrderJoin.length);

const technologys = ["html",'css', 'js',];
console.log(technologys.reverse());

//объединение массивов
//concat
const names1 = ['html', 'css', 'js'];
const names2 = ['html5','react','nodejs'];

/* const allNames =  names1.concat(names2);
console.log(allNames); */


//spread ...

const allNames = [...names1, ...names2];
console.log(allNames);
