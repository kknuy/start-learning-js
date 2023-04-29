// String
const text = 'Nastya';
console.log(text);

// Number
const age = 19;
console.log(age);

// Boolean
const hasBoyfriend = true;
console.log(hasBoyfriend);

// Null не известно
const student = null;
console.log(student);

//Undefined значения не было присвоено
let vlad;
console.log(vlad);

//Object сложный тип данных
const nastya = {
    age: 19,
    hasBoyfriend: true,
};

console.log(nastya);

//Symbol
const id  = Symbol("id");
console.log(id);


//BigInt
const bigInt = BigInt(10);
console.log(bigInt);

//Примитивы - простые - 7
//Сложные типы  - 1 ( objec)

//typeof

console.log(typeof text);
console.log(typeof nastya);
console.log(typeof vlad);
console.log(typeof age);


console.log( typeof (age) );

console.log(typeof null);
console.log(typeof console.log);