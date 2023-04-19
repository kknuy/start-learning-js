const text = "string";

const quotesSingle = 'single quotes';


const backquotes = `wow`;

console.log(text);
console.log(quotesSingle);
console.log(backquotes);


const name = 'kknuy';

const profession = 'Изучает JS';

//const allInfo = name + ' ' + profession;

const allInfo = `${name}`

console.log(allInfo);

//Длина строки

const programmingLanguage = "JavaScript";

console.log("length", programmingLanguage.length);

//Получаем символ

console.log("index", programmingLanguage[0]);

//Методы строк

//toUpperCase toLowerCase

const animal = "Lion";

console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

//Находим символы

//indexof includes

const test = "Моя любимая машина Samand :)";

console.log("indexof" , test.indexOf("м"));
console.log("indexof" , test.includes("м"));

//slice substring

const program = "KavaScript";

console.log('slice', program.slice(1,5));
console.log('substring', program.substring(1,5));

//Замена символов

//replace replaceAll

console.log('replace', program.replace("Kava","Test"));
console.log('replaceAll', program.replaceAll("Kava","Text"));

console.log('replaceAll', program.replaceAll("a","Text"));
console.log('replaceAll', program.replaceAll("a","Text"));

//repeat

console.log('repeat', program.repeat(2));


//trim

const tt = "              trim";

console.log('trim', tt.trim());