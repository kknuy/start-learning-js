
const tasks = JSON.parse(localStorage.getItem('tasks')) ||[
    {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
    },
    {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
    },
    {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
    },
]

window.addEventListener('beforeunload', () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

const createHTMLTemplate = (taskId,taskText) => {
        const taskItem = document.createElement('div');
        taskItem.className='task-item';
        taskItem.setAttribute('data-task-id', taskId);

        const taskItemContainer = document.createElement('div');
        taskItemContainer.className='task-item__main-container';

        const taskItemMainContent = document.createElement('div');
        taskItemMainContent.className='task-item__main-content';

        taskItem.append(taskItemContainer);
        taskItemContainer.append(taskItemMainContent);

        const form = document.createElement('form');
        form.className='checkbox-form';

        const input = document.createElement('input');
        input.className='checkbox-form__checkbox';
        input.type = "checkbox";
        input.id = `task-${taskId}`;

        const label = document.createElement('label');
        label.htmlFor = input.id;

        const span = document.createElement('span');
        span.className='task-item__text';
        span.innerText = taskText;

        const btn = document.createElement('button');
        btn.className='task-item__delete-button default-button delete-button';
        btn.setAttribute(`data-delete-task-id`, taskId);
        btn.innerText = "Удалить";
        
        taskItemMainContent.append(form, span);
        form.append(input,label);
        taskItemContainer.append(btn);

    return taskItem;
} 

const createTaskBlock = document.querySelector('.create-task-block');
const tasksListContainer = document.querySelector('.tasks-list');

createTaskBlock.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskText = (e.target.taskName.value || '').trim();
    const isTaskExists = tasks.find((task) => task.text === newTaskText);
    const errorMessageBlockFromDOM = createTaskBlock.querySelector('.error-message-block');

    if (!newTaskText) {
        const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
        createTaskBlock.append(errorBlock);
    } else if (isTaskExists) {
        const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
        createTaskBlock.append(errorBlock); 
    } else if (newTaskText && !isTaskExists) {
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
        };
        tasks.push(newTask);
        const taskItem = createHTMLTemplate(newTask.id, newTask.text);
        tasksListContainer.append(taskItem);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    if (errorMessageBlockFromDOM) {
        errorMessageBlockFromDOM.remove();
    }
});

const createErrorBlock = (errorMessage) => {
    const errorBlock = document.createElement('span');
    errorBlock.innerText = errorMessage;
    errorBlock.className = 'error-message-block';
    return errorBlock;
}


const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
  const parsedTasks = JSON.parse(storedTasks);
  const newTasks = parsedTasks.filter((parsedTask) => !tasks.some((task) => task.id === parsedTask.id));
  tasks.push(...newTasks);
  newTasks.forEach((task) => {
    const taskItem = createHTMLTemplate(task.id, task.text);
    tasksListContainer.append(taskItem);
  });
}





tasks.forEach((task) => {
    const taskItem = createHTMLTemplate(task.id, task.text);
    tasksListContainer.append(taskItem);
});


  





