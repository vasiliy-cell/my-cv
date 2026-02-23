const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const cvBtn = document.getElementById("cvDownload");

// открытие/закрытие меню при клике на кнопку
langBtn.addEventListener("click", e => {
  e.stopPropagation();          // чтобы клик на кнопку не закрывал меню
  langMenu.classList.toggle("show");
});

// закрытие меню при клике вне кнопки
document.addEventListener("click", () => {
  langMenu.classList.remove("show");
});

// переключение языка
document.querySelectorAll(".lang-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    // скрываем все тексты
    document.querySelectorAll("h1, h2, h3, p").forEach(el => el.style.display = "none");

    // показываем выбранный язык
    document.querySelectorAll(`.text-${lang}`).forEach(el => el.style.display = "block");

    // меняем ссылку и текст резюме
    if(lang === "de") {
      cvBtn.href = "./resumes/Lebenslauf.pdf";
      cvBtn.textContent = "Lebenslauf herunterladen";
      langBtn.textContent = "DE ▾";
    }
    if(lang === "en") {
      cvBtn.href = "./resumes/resume.pdf";
      cvBtn.textContent = "Download Resume";
      langBtn.textContent = "EN ▾";
    }

    // закрываем меню
    langMenu.classList.remove("show");
  });
});
