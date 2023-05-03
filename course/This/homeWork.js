/* 
Задание #1
Представьте, что вас как веб-разработчика попросили разработать веб-платформу,
которая будет отслеживать прогресс студентов в обучении веб-разработке.
Для начала вам необходимо создать объект student, в котором будут 3 свойства:
1. stack. Массив из строк, где каждая строка - это технология. Изначально, массив
stack должен быть равен [‘HTML’].
2. level. Тип данных number. level отвечает за текущий уровень студента и изначально
равен 1.
3. improveLevel. Функция, которая сначала увеличивает значение свойства level у
студента на единицу. Если level равен 2-м, то вам необходимо добавить в конец
массива stack значение ‘CSS’, если 3-м - добавляете в конец stack значение
‘JavaScript’, 4-м - ‘React’, 5-ти - ‘NodeJS’. Если значение level стало больше 5-ти, то
вам необходимо вывести в модальном окне через alert сообщение “Студент выучил
все технологии!”. Также функция improveLevel должна возвращать в самом конце
обновленный объект student.
В итоге значение свойства stack после выполнения кода ниже должно быть равно
["HTML", "CSS", "JavaScript", "React", "NodeJS"].
student
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
Примечание: цепочка из подряд идущих функций impoveLevel работает так, потому что
improveLevel возвращает объект student, а у объекта student есть метод impoveLevel.
Посмотрите на пример:
const student = {
improveLevel() {
return this;
}
};
student
.improveLevel()
.improveLevel()
.improveLevel();

*/

const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    this.level++;
    switch (this.level) {
      case 2:
        this.stack.push("CSS");
        break;
      case 3:
        this.stack.push("JS");
        break;
      case 4:
        this.stack.push("‘React’");
        break;
      case 5:
        this.stack.push("‘NodeJS’");
        break;
    }
    if (this.level > 5) console.log("Студент выучил все технологии!");
    return this;
  },
};

student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();

/* 
Задание #2
У вас есть 2 объекта dog и bird, в которых содержится их описание.
const dog = {
name: 'Чарли',
type: 'Собака',
makeSound() {
return 'Гав-Гав';
}
}
const bird = {
name: 'Петя',
type: 'Воробей',
makeSound() {
return 'Чик-чирик';
}
}
Вам необходимо создать функцию makeDomestic, которая будет работать с ключевым
словом this (пример использования ниже). Она должна выводить в консоль всю
информацию о животном с помощью сообщения: “type по имени name говорит sound”,
где name - имя животного, type - его тип и sound - результат вызова функции makeSound.
Также функция makeDomestic должна возвращать новый объект животного, в котором
будут все прошлые параметры (name, type, makeSound), а также будет добавлен новый
параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли
животное или нет. Значение для свойства isDomestic (true либо false) вам необходимо
передать как параметр в функцию makeDomestic.
Кроме этого для обращения к свойствам животного функция makeDomestic должна
использовать только this. Т.е. вам разрешено обращаться к свойствам только через
this.name либо this.makeSound, но никак не bird.name либо bird.makeSound.
Вам необходимо решить эту задачу 3-мя способами: через bind, call и apply. Вызовите
функцию makeDomestic 3 раза используя данные методы. При использовании bind,
функция makeDomestic должна работать с объектом dog, при apply и call - с объектом
bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.
Примеры использования:
function makeDomestic(isDomestic) {
// Ваша реализация
}
/*
Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"
domesticDog = {
name: 'Чарли',
type: 'Собака',
isDomestic: true,
makeSound() {
return 'Гав-Гав'
}
}
*/

const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};
const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic (isDomestic = false) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}, домашнее ${isDomestic}`)
    return this.isDomestic;
}

makeDomestic.call(bird);
makeDomestic.apply(bird);
