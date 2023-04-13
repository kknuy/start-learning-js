/* Задание #1
Мы с вами уже обсуждали, что JavaScript имеет динамическую типизацию. В данном
языке программирования мы можем преобразовывать данные только к 3-м типам: к
number, boolean и string.
Для начала, создайте новые файлы: index.html и index.js. Не забудьте подключить index.js
в index.html при помощи тега script.
Сейчас ваша задача состоит в том, чтобы создать 8 переменных с помощью let, которые
будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно
преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в
консоль.
Пример:
let age = 18;
console.log(Number(age), Boolean(age), String(age));
Обязательно после каждого console.log посмотрите, что у вас выводится в консоль и
подумайте, почему получилось именно такое значение, которое было выведено.
Примечание: Symbol вы не сможете преобразовать к типу данных number. Если вы
попробуете это сделать, то у вас будет ошибка.
 */

let age = 1;
console.log(Number(age), String(age), Boolean(age));

let text = '1';
console.log(Number(text), String(text), Boolean(text));

let bool = true;
console.log(Number(bool), String(bool), Boolean(bool));

let und;
console.log(Number(und), String(und), Boolean(und));

let nll = null;
console.log(Number(nll), String(nll), Boolean(nll));

let obj = {};
console.log(Number(obj), String(obj), Boolean(obj));

let symb = Symbol('1');
//console.log(Number(symb), String(symb), Boolean(symb));



/* 
Задание #2
В JavaScript существует 2 вида преобразований типов: явное и неявное.
Пример:
console.log(Number('18')); // явное
console.log(+'18'); // неявное
Из них стоит использовать явное, так как оно уменьшает количество случайных багов.
Для начала, создайте новые файлы: task-2.html и task-2.js. Не забудьте подключить
task-2.js в task-2.html при помощи тега script.
Ваша задача состоит в следующем. Ниже вам даны 10 примеров явного и неявного
преобразования типов. Необходимо определить, какое преобразование явное, а какое
неявное.
Если преобразование является явным, то напишите напротив примера комментарий
“явное”, если неявным, то исправьте его на явное по шаблону ниже.
Шаблон ответа на пример console.log(+'1'):
console.log(+'1'); //неявное
console.log(Number('1'));
Также для каждого значения выведете его typeof.
Пример:
console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50');
//2
console.log(Number('100'));
//3
console.log('' + 1);
//4
console.log(String(1));
//5
console.log(Boolean(0));
//6
console.log(+'001');
//7
console.log(1 + '');
//8
console.log(Boolean(1));
//9
console.log(String(001));
//10
console.log(Number('Hello World'));
*/


console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50');//неявное 
console.log(Number('50'), typeof Number('50')); // явное);
//2
console.log(Number('100'));
//3
console.log('' + 1);//неявное 
console.log(Number('') + Number(1), typeof Number('') ,  typeof Number(1));
//4
console.log(String(1));
//5
console.log(Boolean(0));
//6
console.log(+'001');//неявное 
console.log(Number("001") , typeof Number("001"));
//7
console.log(1 + '');//неявное 
console.log(Number(1) + Number(''), typeof Number(1) ,  typeof Number(''));
//8
console.log(Boolean(1));
//9
console.log(String(001));
//10
console.log(Number('Hello World'));

/* 

Задание #3
Когда мы пытаемся преобразовать к другим типам данных не совсем стандартные
сущности, то у нас получаются иногда необычные значения.
Например, если мы преобразуем к строке функцию alert, то мы увидим следующее:
console.log(String(alert));
// Возвращает function alert() { [native code] }
Сейчас ваша задача состоит в том, чтобы преобразовать явно к string, number и boolean
следующие сущности, посмотреть на результат и проанализировать его:
1. console.log
2. { name: 'Maxim' }
3. Symbol('key')
4. Number
5. ''
6. 0
7. -10
8. '-105'
*/

console.log('----------------------------------------------');

console.log( String(console.log), Number(console.log) , Boolean(console.log) );
console.log( String({ name: 'Maxim' }), Number({ name: 'Maxim' }) , Boolean({ name: 'Maxim' }) );
//console.log( String(Symbol('key')), Number(Symbol('key')) , Boolean(Symbol('key')) );
console.log( String(Number), Number(Number) , Boolean(Number) );
console.log( String(''), Number('') , Boolean('') );
console.log( String( 0), Number( 0) , Boolean( 0) );
console.log( String(-10), Number(-10) , Boolean(-10) );
console.log( String('-105'), Number('-105') , Boolean('-105') );


/* 

Задание #4
Вам даны 10 примеров явного преобразования типов.
Ваша задача понять, что будет выведено в консоль в каждом примере. Сначала
запишите свои ответы в заметки, а только потом уже запускайте код и сверьтесь с
ответами.
// 1
console.log(Number(' 1 2 3 4 5'));
// 2
console.log(Number('1234 5'));
// 3
console.log(Number('12345'));
// 4
console.log(String(false));
// 5
console.log(Boolean(0000000));
// 6
console.log(Boolean(0.0000001));
// 7
console.log(String(undefined));
// 8
console.log(Number('100f'));
// 9
console.log(Number('100'));
// 10
console.log(Number('000001'));
*/

console.log('--------------------------------------------------------------------------------------------');

// 1
console.log(Number(' 1 2 3 4 5'));//10
// 2
console.log(Number('1234 5'));//10
// 3
console.log(Number('12345'));//10
// 4
console.log(String(false));//'false'
// 5
console.log(Boolean(0000000));//false
// 6
console.log(Boolean(0.0000001));//true
// 7
console.log(String(undefined));//undefined
// 8
console.log(Number('100f'));//Nan
// 9
console.log(Number('100'));//100
// 10
console.log(Number('000001'));//1