/* 
Задание #1
Вам дан HTML код.
Ваши коллеги разработчики реализовали систему, благодаря которой можно получать
список пользователей по url: https://jsonplaceholder.typicode.com/users.
Вам необходимо получить всех пользователей с помощью fetch и добавить данные о
имени каждого пользователя внутрь html-элемента с id равным “data-container”.
Для удобства необходимо добавить элемент span с текстом “Загрузка...” перед
загрузкой пользователей, и спрятать этот элемент после загрузки данных о
пользователях.
Шаблон для HTML-элемента пользователя выглядит следующим образом:
<li><a href="#">Имя пользователя</a></li>
Примечание: обязательно не забывайте прописывать блоки catch. В них просто
выводите ошибку в консоль при помощи console.error.
*/

const userURL = 'https://jsonplaceholder.typicode.com/users';
const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');

const toglleLoader = () => {
    const isHidden = loader.hasAttribute('hidden');

    if (isHidden){
        loader.removeAttribute('hidden');
    }else{
        loader.setAttribute('hidden',true);
    }
}

const makeUserHTML = (name) =>{
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerText = name;
    li.append(a);

    return li;
}

toglleLoader();
// setTimeout(() =>{
//     fetch(userURL)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((response) => {
//         response.forEach(element => {
//             const userHTML = (makeUserHTML(element.name));
//             dataContainer.append(userHTML);
//         });;
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         toglleLoader();
//     })
// },1000)



/* 
Задание #2
Вы молодец! Если вы дошли до этого задания, то вы умеете получать данные и
отображать их в HTML. Сейчас же задача будет посложнее.
Вам необходимо создать функцию getUsersByIds, которая будет принимать массив с id
пользователей. Вам нужно получить всех пользователей, у которых есть данные значения
id. Используйте некоторый код из предыдущего задания и Promise.all для решения
поставленной задачи.
Добавьте данные о имени каждого пользователя внутрь html-элемента с id равным
“data-container” . Также для удобства необходимо добавить элемент span с текстом
“Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки
данных о пользователях.
Шаблон для HTML-элемента пользователя выглядит следующим образом:
<li><a href="#">Имя пользователя</a></li>
Для тестирования функции getUsersByIds используйте данный код:
getUsersByIds([5, 6, 2, 1])
Примечание: обязательно не забывайте прописывать блоки catch. В них просто
выводите ошибку в консоль при помощи console.error.
*/

const getUsersByIds = (ids) => {
    const result = ids.map((id) =>fetch(`${userURL}/${id}`));
    return result;
}

setTimeout(() =>{
    Promise.all(getUsersByIds([5,6,2,1]))
    .then((response) =>{
      const result = response.map((user) =>user.json());
      return  Promise.all(result);
    })
    .then((response) => {
        response.forEach((user) =>{
            const userHTML = (makeUserHTML(user.name));
             dataContainer.append(userHTML);
        });
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        toglleLoader();
    })
},1000)


/* 
Задание #4 (дополнительное)
Вы вместе с командой разработки создаете социальную сеть, где можно делится постами
и оставлять комментарии к посту. Пока проект на ранней стадии и поэтому вам нужно
поработать только с отрисовкой нужных элементов.
Вам необходимо создать функцию renderPost, которая будет принимать 1 параметр
postId. С помощью postId вам нужно получить пост. Например, с помощью данного url
https://jsonplaceholder.typico... вы получите данные о посте с id равным 1.
После того, как вы получите данные о посте, требуется получить все комментарии для
конкретного поста. Чтобы, например, извлечь комментарии для поста с id равным 1, вам
необходимо использовать следующий url https://jsonplaceholder.typico...
Для отображения информации о посте и комментариев на странице используйте
данный шаблон:
<div id="post" class="post">
<h1 class="post__title">Название Поста</h1>
<p class="post__text">Текст Поста</p>
<b class="post__comments-text">Комментарии</b>
<div class="post__comments">
<div class="post-comment">
<span class="post-comment__author">
maxim@gmail.com
</span>
<span class="post-comment__text">
laudantium enim quasi est quidem magnam voluptate
ipsam eos\ntempora quo
necessitatibus\ndolor quam autem quasi\nreiciendis et
nam sapiente accusantium
</span>
</div>
</div>
</div>
Каждый класс отвечает за конкретную информацию:
“post__title” - значение свойства title у поста;
“post__text” - значение свойства body у поста;
“post-comment__author” значение свойства email у комментария;
“post-comment__text” значение свойства body у комментария;
Протестируйте функцию renderPost, вызвав данный код:
renderPost(1);
Примечание: обязательно не забывайте прописывать блоки catch. В них просто
выводите ошибку в консоль при помощи console.error
*/