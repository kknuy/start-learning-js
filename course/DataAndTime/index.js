//date

const date = new Date();
console.log(date);

//date  (year, month, day, hour, minute, second)

const newDate = new Date(2000,1,10,11,11,1,1000);

console.log(newDate);
console.log('year',newDate.getFullYear());
console.log('month',newDate.getMonth());
console.log('date',newDate.getDate());

//дни недели от 0 - 6
//0  -воскресенье  - 6 суббота

console.log("day",newDate.getDay());

if(newDate.getDay() === 4) {
    console.log('Today thursday',newDate.getDay());
}

newDate.setFullYear(2010);
newDate.setMonth(6);
newDate.setDate(2023);

const difference = (date.getTime() - newDate.getTime());
console.log("difference",difference);