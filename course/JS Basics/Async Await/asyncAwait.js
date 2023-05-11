//Async Await

//Испольщуется в функциях
//async возращает promise

// const USERS_URL = "https://jsonplaceholder.typicode.com/users";
// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// //try catch finally

// const getTodosWithUserID = async (user) => {
//   try {
//     const response = await fetch(USERS_URL);
//     if (!response.ok) {
//       throw new Error("Error getting users");
//     }
//     console.log(response);

//     const users = await response.json();
//     const firstUserID = users[0]?.id;

//     const todosResponce = await fetch(`${TODOS_URL}/?userId=${firstUserID}`);
//     const todos = await todosResponce.json();
//     if (!todosResponce.ok) {
//       throw new Error("Error getting todos");
//     }
//     console.log(todos);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTodosWithUserID();

/* 
Задание #1
Требуется переписать данный код, который использует then, catch и finally, в код,
который использует исключительно async await и try, catch, finally.
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = () => {
isLoading = true;
fetch(POSTS_URL, {
method: 'POST',
})
.then((response) => response.json())
.then((result) => {
console.log('result', result)
})
.catch((error) => {
console.log('error', error)
})
.finally(() => {
isLoading = false;
});
};
createNewPost();
*/
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// let isLoading = false;
// const createNewPost = async () => {
// try{
//     isLoading = true;
//     const responce = await fetch(POSTS_URL)
//     const result = responce.json();
//     if (responce.ok){
//         isLoading = false;
//         console.log('result',result)
//     } else {
//         throw Error('Failed to responce');
//     }
// } catch (erorr){
//     console.log('error',erorr);
// }
// finally {
//     isLoading = false;
// }}
// createNewPost();

/* 
Задание #2
Требуется переписать данный код, который использует then и catch, в код, который
использует исключительно async await и try, catch.
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
Promise.all(requests)
.then((responses) => {
const dataResults = responses.map((data) => data.json());
return Promise.all(dataResults)
})
.then((allTasks) => {
console.log(allTasks);
})
.catch((error) => {
console.log(error);
})
}
getTodosByIds([43, 21, 55, 100, 10]);
*/

// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = async (ids) => {
//   try {
//     const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     console.log("requests", requests);
//     const responses = await Promise.all(requests);
//     console.log("responses", responses);
//     const dataResults = await Promise.all(
//       responses.map((response) => response.json())
//     );
//     console.log("dataResults", dataResults);
//     dataResults.forEach((data) => console.log("data", data));
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTodosByIds([43, 21, 55, 100, 10]);

/* 
Задание #3
Напишите, в каком порядке будет выводится информация в консоль. Не вызывайте код,
попробуйте сами написать правильный ответ на листочке либо в заметках.
Примечание: функция getData не выбрасывает ошибку.
const getData = (callback) => {
fetch('https://jsonplaceholder.typicode.com/users/1')
.then((response) => response.json())
.then((user) => {
console.log('Success');
callback(user);
})
.catch((error) => {
console.log(error);
});
}
getData(() => {
console.log('user received');
const promise = new Promise((resolve) => {
setTimeout(() => {
resolve('promise resolved');
}, 500);
console.log('in promise');
setTimeout(() => {
console.log('last set timeout');
}, 400);
});
promise.then((result) => {
console.log(result);
})
});
console.log('End')
*/

const getData = (callback) => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      console.log("Success");
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData(() => {
  console.log("user received");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 500);
    console.log("in promise");
    setTimeout(() => {
      console.log("last set timeout");
    }, 400);
  });
  promise.then((result) => {
    console.log(result);
  });
});

console.log("End");
