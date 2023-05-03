// const user = {
//     name : "John",
//     sayHi()  {
//         console.log('Hi',this.name);
//     }
// }

// user.sayHi();

function makeUser() {
    return {
      name: "John",
      ref: this.name,
    };
  }
  
  let user = makeUser();
  
 console.log(user.ref.name);

