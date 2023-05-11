const USERS_URL =  'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(USERS_URL)
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
        const firstUser = users[0]?.id;
        console.log(firstUser);
        fetch(`${TODOS_URL}/?userId=${firstUser}`)
            .then((response) => response.json())
            .then((todos) => console.log(todos))
            .catch((error) =>{
                console.log(error);
            })
    })
    .catch((error) =>{
        console.log(error);
    })