// && (и), ||(или), !(не)


// &&
const userAge = 19;

if (userAge > 18 && userAge < 100){
    console.log("Can use");
};


const programmingLanguage = 'en';
const experienceInYears = 0;

if (programmingLanguage === "en" && experienceInYears > 1){
    console.log("Добро пожаловать в компанию");
}

const currentOurs = 8;

if (currentOurs < 8 || currentOurs > 20){
    console.log("Оффис открыт");
} else {
    console.log("Оффис закрыт");
};

// ||
const userNickName = null;

const defaultNickName = "user";

const nickName = userNickName || defaultNickName || "nickname" || "noname";

console.log(nickName);

// !

const hasAccess = true;
console.log("!hasAccess: " , !hasAccess);

if (!hasAccess) {
    console.log("Closed connection");
} else {
    console.log("Connect oppened");
};


//Оператор объединения с null ??

console.log(false || "Hello world!");

// null, undefined
console.log(false ?? "Hello world!");
console.log(undefined ?? "Hello world!");
console.log(null ?? "Hello world!");