console.log("Startig")

for (let i = 0; i < 100; i++) {
  console.log("i", i);
}
console.log("Endig")

//async PROMISE FETCH


setTimeout(() => {
    console.log("setTimeout");
},3000);

console.log("sync code")

// setInterval(() => {
//     console.log("setInterval");
// },3000);

//resolve 3 status

//pending   ожидание waiting

//fulfield succes удачно

//rejected erorr

const developer = {
    name: 'developer',
    js: false,
}

const promise = new Promise((resolve, reject) => {
    if(developer.js){
        setTimeout(() =>{
            resolve(`Fulfield promise`);
        },3000);
    }else{
        reject(`Rejected promise`);
    }
});

console.log(promise);

//обработка промиса
//then , catch , finally 

promise
    .then((succesMessage) => {
        console.log(succesMessage);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finished Promise");
    });