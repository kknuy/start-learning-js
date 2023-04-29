/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  } */

//   function checkAge(age) {
//    return  age > 18 ? true :  confirm('Родители разрешили?');
//   }

function checkAge(age) {
    return age > 18 ||  confirm('Родители разрешили?');
  }

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min (a,b) {
    return a > b ? b : a;
};
console.log(min(2,5));

//Замените код Function Expression стрелочной функцией:

/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   };
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );

/* 
  Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

const user = {};

user.name  = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;
console.log(user);


/* 
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty (obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


/* 
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum  = Object.keys(salaries).length === 0 ? 0 : Object.values(salaries).reduce((a, b) => a + b, 0); ;

console.log(sum);

/* 
Cоздайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/
function multiplyNumeric(obj) {
        Object.keys(obj).map((value) => {
            typeof obj[value] === 'number' ?  obj[value] = obj[value] * 2 : value;
        })
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
console.log(menu);