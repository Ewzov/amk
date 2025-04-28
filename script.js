//Нахожу кнопку на странице по классу "submit-btn"
const btn = document.querySelector(".submit-btn");
//Назначаю обработчик события клика на кнопку
btn.onclick = (e) => {
//Отменяю стандартное поведение кнопки
  e.preventDefault();
  btn.textContent = "Заявка отправлена";
  btn.style.backgroundColor = "#ffcc00";
//Делаю кнопку неактивной
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Отправить заявку";
//Возвращаю стандартный цвет фона
    btn.style.backgroundColor = "";
    btn.disabled = false;
  }, 2000);
};
