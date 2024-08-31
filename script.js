//присваиваем переменным элементы из dom дерева
const button = document.querySelector(".btn");
const nameInput = document.querySelector("#input-name");
const imgUrl = document.querySelector("#url");
const inputComments = document.querySelector("#comments");
const chatWrapper = document.querySelector(".chat__wripper");
//создаем функцию, которая срабатывает при клике на кнопку
button.addEventListener("click", function () {
    //выводим предупреждение, если не все поля заполнены
    if ((nameInput.value === '') || (inputComments.value === '')) {
        alert('Заполните поля  "Имя" и "Комментарий"')
    } else {
  //создаем обертку для комментария, добавляем класс
  const parentElement = document.createElement("div");
  parentElement.classList.add("chat");
  // добавляем элемент на страницу
  chatWrapper.append(parentElement);
  //достаем значение имени из поля ввода
  const nameValue = nameInput.value.trim();
  //изменяем формат имени под необходимые условия
  const userName =
    nameValue[0].toUpperCase() + nameValue.slice(1).toLowerCase();
  //создаем элемент для вывода имени
  const nameInChat = document.createElement("p");
  nameInChat.textContent = userName;
  //добавляем имя на страницу
  parentElement.append(nameInChat);
  //достаем значение адреса из поля ввода
  const avatarUrl = imgUrl.value.trim();
   //создаем элемент img
  const userAvatar = document.createElement("img");
  //прописываем атрибут с адресом изображения
  if (avatarUrl === "") {
    userAvatar.src = "./ava.webp";
  } else {
    userAvatar.src = avatarUrl;
  }
  //добавляем картинку на страницу
  parentElement.append(userAvatar);
//достаем значение из поля для комментариев и сразу ставим "антиспам"
  const commentValue = inputComments.value.trim()
  const comment = commentValue.toLowerCase().replace(/viagra|xxx/gi, '***');
  //создаем элемент для вывода комментария
  const newComment = document.createElement("p");
  //присваиваем значение из поля ввода
  newComment.textContent = comment;
  //добавляем комментарий на страницу
  parentElement.append(newComment);
//очищаем поля ввода
nameInput.value = '';
imgUrl.value = '';
inputComments.value = '';
}}
);


