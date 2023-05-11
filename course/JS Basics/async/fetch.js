//fectр
//получение данных через url


//fetch вернет промис
const todoURL = 'https://jsonplaceholder.typicode.com/todos';
const root = document.getElementById("root");


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

const getAllTodos = ( ) => {
    toggleLoader();
    const promise = fetch(todoURL,{
        method: 'GET',
    });
    
    promise
        .then((response) => {
            if(!response.ok){
                throw new Error("Status: 404")
            }
            return  response.json();
        })
        .then((todos) =>{
            todos.forEach((todo) => {
                const todoHTML = createTodos(todo.title);
                root.append(todoHTML);
            });
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() => {
            toggleLoader();
        });
}
getAllTodos();

