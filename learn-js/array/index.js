//get last element in array at

const fruit = ['apple', 'orange', 'pineapple', ]
console.log(fruit.at(-1))

/* 
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

const camelize = (string) => {
    const arr = string.split('-');
    const newArr = arr.map((elem,index) => {
      if (index !== 0){
        return elem.charAt(0).toUpperCase() + elem.slice(1);
      } 
      return elem;
    });
    return newArr.join('');
  };
  
 console.log(camelize("background-color") == 'backgroundColor') ;
 console.log( camelize("list-style-image") == 'listStyleImage') ;
 console.log(camelize("-webkit-transition") == 'WebkitTransition') ;

  