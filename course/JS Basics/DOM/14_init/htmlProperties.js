const tasksWrapper = document.querySelector(".tasks__wrapper");
console.log(tasksWrapper.className + " tasks");

// tasksWrapper.className += "tasks__wrapper_1";
console.log(tasksWrapper.className + " tasks");

const tasksBlock = document.querySelector("#tasks");
console.log(tasksBlock.id + " tasks");

// tasksBlock.id = "tasks__new";
console.log(tasksBlock.id + " tasks");

const sumbitBtn = document.querySelector(".create-task-block__button");
console.log(sumbitBtn.innerText);

sumbitBtn.innerText = "Create Task";

console.log(tasksBlock.innerHTML);

//children

const form = document.querySelector(".create-task-block");
console.log(form.children);

//data атрибуты
// при записи data-button-id значение через дефис пишется с большой буквы
//dataset.buttonID
const navButton = document.querySelector(".create-task-block__button");
console.log(navButton.dataset.buttonId);

navButton.dataset.buttonId = 10;

console.log(navButton.style);

navButton.style.width = '30%';
navButton.style.margin = '10px';
navButton.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';