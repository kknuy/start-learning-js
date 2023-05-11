//create element 

const newNavButton = document.createElement("button"); 
console.log(newNavButton);

newNavButton.style.width = '200px';
newNavButton.style.height = '50px';

newNavButton.className = 'create-task-block__button';
newNavButton.innerText = "Create element method"; 


//append prepend
document.querySelector("#tasks").appendChild(newNavButton);

newNavButton.style.position = 'absolute';
newNavButton.style.left = '100px';
newNavButton.style.top = '100px';


//remove element

newNavButton.remove();

//closest

const closest = newNavButton.closest('input')
console.log(closest);

// classList: add, remove , toggle

const btn = document.querySelector('.create-task-block__button');
btn.classList.toggle('create-task-block__button');//delete class
btn.classList.toggle('create-task-block__button');//add class

//работа с атрибутами
//hasAttribute проверяет атрибут
//getAttribute  получает атрибут
//addAttribute  добавляет атрибут
//removeAttribute удаляет атрибут
//setAttribute изменяет или добавляет атрибут

