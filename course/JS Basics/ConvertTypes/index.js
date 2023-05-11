//JS Динамически типизированный

let name = 'kknuy';

console.log(name);
console.log(name = 1);

//Строки String(value)

let number = 123;
console.log(typeof number, number);
console.log(typeof String(number),String(number));//Явное преобразование

const age = 1 + "19";
console.log(typeof age, age);//Неявное преобразование


//Числа Number(value)

const devYears = '0';
console.log(typeof Number(devYears), Number(devYears));
console.log(typeof devYears, devYears);
console.log(typeof +devYears, +devYears);

//Логические Boolean(value)

const trust = 1;
console.log(typeof Boolean(trust),Boolean(trust) );
