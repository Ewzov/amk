//Нахожу кнопку на странице по классу "submit-btn"
if (document.querySelector(".submit-btn")) {
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
}

// МОДАЛЬНОЕ ОКНО
const loginBtn = document.querySelector(".login-btn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

// Открытие модального окна
loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Закрытие модального окна
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие при клике вне окна
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Обработка формы входа
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  alert(`Вход выполнен!\nЛогин: ${username}\nПароль: ${password}`);
  modal.style.display = "none";
});



document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('nav');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  // Открытие/закрытие бургер-меню
  burgerBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      
      // Блокировка скролла при открытом меню
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Обработка выпадающих меню на мобильных
  function handleDropdowns() {
      if (window.innerWidth <= 768) {
          dropdowns.forEach(dropdown => {
              const link = dropdown.querySelector('a');
              
              link.addEventListener('click', function(e) {
                  e.preventDefault();
                  dropdown.classList.toggle('active');
              });
          });
      }
  }
  
  // Закрытие меню при клике на ссылку (кроме выпадающих)
  const navLinks = document.querySelectorAll('nav a:not(.dropdown > a)');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              burgerBtn.classList.remove('active');
              nav.classList.remove('active');
              document.body.style.overflow = '';
          }
      });
  });
  
  // Инициализация
  handleDropdowns();
  
  // Обновление при изменении размера окна
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          burgerBtn.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
      }
      handleDropdowns();
  });
});