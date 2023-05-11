/* Задание #1
В JavaScript всего 8 типов данных. Это number, string, boolean, null, undefined, object,
bigint, symbol.
Для начала, создайте новые файлы: data-types.html и data-types.js. Не забудьте
подключить data-types.js в data-types.html при помощи тега script.
Сейчас вам требуется создать 8 переменных, которые будут представлять 8 разных
типов данных. Каждую переменную объявляйте при помощи const.
Также для каждой переменной необходимо вывести в консоль ее значение, и значение
typeof.
Например:
const age = 20;
console.log('age', age, typeof age); */

const number = 1;
console.log('number', number, typeof number);

const text = 'string';
console.log('text', text, typeof text);

const bol = true;
console.log('boolean', bol, typeof bol);

const nulL = null;
console.log("null", nulL, typeof nulL);

const und = undefined;
console.log("undefined", und, typeof und);

const vlad = {
    age: 19,
};
console.log("vlad", vlad, typeof vlad);

const bigInt = BigInt(10);
console.log("bigInt", bigInt, typeof bigInt);

const symb = Symbol("symb");
console.log("symbol", symb, typeof symb);



/* Задание #2
Хорошо, думаю, вы справились с первым заданием. Сделаем что-то посложнее.
JavaScript имеет динамическую типизацию. Это значит, что если у переменной был тип
данных string, то его можно заменить на другой тип, например number.
let age = 18;
age = '18'; // Теперь age это тип данных string
Для начала создайте index.html и index.js файлы и подключите index.js в index.html при
помощи тега script.
Сейчас вам требуется с помощью ключевого слова let создать любые 3 переменные,
которые будут представлять следующие типы данных:
1. number,
2. string,
3. boolean.
После 1-ю переменную (с number) нужно переопределить, заменив на любое значение с
типом данных string. 2-ю заменяем на значение с типом данных number, а значение 3-ей
замените на null. Также затем выведите значения измененных переменных в модальное
окно.
Например:
let age = 18;
age = '18'; // Теперь age это тип данных string
alert(age); */

let age = '18';

age = 18;

alert(age);







