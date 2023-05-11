//promiseAll
// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])
//выполнится если все промисы выполнились

const todoURL = 'https://jsonplaceholder.typicode.com/todos';
const root = document.getElementById("root");
const todoIds = [14,2,67,10];


const toggleLoader = () =>{
    const loader = document.querySelector("#loader");
    const isHiddend = loader.hasAttribute("hiden");
    if(isHiddend){
        loader.removeAttribute("hiden");
    } else {
        loader.setAttribute("hiden",'');
    }
}

const createTodos = (text) => {
    const element = document.createElement('li');

    const todoAnchor = document.createElement('a');
    todoAnchor.setAttribute('href',"#");
    todoAnchor.innerText = text;

    element.append(todoAnchor);

    return element;
}

const getTodoIds = (ids) =>{
    const requests = ids.map((id) => fetch(`${todoURL}/${id}`))
    Promise.all(requests)
        .then((responses)=> {
           const result = responses.map((response) => response.json())
           console.log(result);
           return  Promise.all(result);
        })
        .then((response) =>{
            response.forEach((todo) => {
                const todoHTML = createTodos(todo.title);
                root.append(todoHTML);
            });
        })
}
getTodoIds(todoIds);