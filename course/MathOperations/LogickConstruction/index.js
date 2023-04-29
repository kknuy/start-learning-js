//if , else,  switch case,  ? :

const isBegginer = false;

if (isBegginer) {
    console.log('Он начинающий');
} else {
    console.log("Он опытный");
}

const closingTime = 10;
const currentTime = 9;

if(currentTime < closingTime) {
    console.log('Opening store');
} else {
    console.log('Closing store');
};

const developerRank = 'Junior';

if (developerRank === 'Junior') {
    console.log("100$");
} else if (developerRank === 'Middle') {
    console.log("400$");
} else if (developerRank === 'Senior') {
    console.log("1000$");
} else {
    console.log("Error: Unknown rank");
}


//switch case 

switch (developerRank) {
    case "Junior":
        console.log("100$");
        break;
    case "Middle":
        console.log("400$");
        break;
    case "Senior":
        console.log("1000$");
        break;
    default: 
        console.log("Error: Unknown rank");
        break;  
}

const numberTen = 10;

let message = "";

console.log(numberTen > 5 ? message = "Number > 5" : message = "Number < 5");