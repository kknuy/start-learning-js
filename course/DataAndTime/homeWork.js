/* Задание #1
Часто мы записываем даты в следующем формате “день.месяц.год”. Сейчас вам
необходимо создать функцию getDateFormat, которая будет приводить дату к этому
формату. Она принимает 2 параметра:
1. date - объект даты, который нужно перевести в данный текстовый формат
“день.месяц.год”
2. separator - разделитель дня, месяца и года. По умолчанию он должен быть равен
точке “.” Если в качестве разделителя будет передано тире “-”, то формат уже
должен быть таким “день-месяц-год”
Также, учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день
либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То
есть результат должен быть не таким “5.5.2001”, а “05.05.2001”. */

// function getDateFormat(date, separator = '.') {
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear().toString();
//     return [day,month,year].join(separator);
//   }

// const date = new Date()

// const newDate = getDateFormat(date);
// console.log(newDate);

// const newDate2 = getDateFormat(date,"-");
// console.log(newDate2);

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

const nums = [2,7,11,15];
const target = 18;
twoSum(nums, target);




/* 
Задание #2
День рождения - это знаменательный праздник для каждого человека. А когда день
рождения у вас? Уверен, что вы помните эту дату. А сколько дней осталось до вашего дня
рождения? А вот это уже посложнее.
Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday,
которая будет возвращать количество дней до следующего дня рождения. Данная
функция должна принимать 1 параметр nextBirthdayDate, который является объектом
даты и указывает на дату вашего ближайшего дня рождения. Год стоит указывать
ближайший к текущей дате, а не год вашего рождения.
Также рекомендуется создать вспомогательную функцию convertMsToDays, которая
переводит миллисекунды в дни. Для округления итогового числа используйте Math.round
*/

// const getDaysBeforeBirthday = (nextBirthdayDate) => {
//     const oneDay = 1000 * 60 * 60 * 24;
//     return console.log( Math.round(((nextBirthdayDate - Date.now()) / oneDay)), 'day to birthday' );
// }

// const myBirthDay = new Date(2023,5,30);
// getDaysBeforeBirthday(myBirthDay);