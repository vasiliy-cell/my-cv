const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const cvBtn = document.getElementById("cvDownload");
const header = document.getElementsByClassName('main-header')[0]

// открыть / закрыть меню
langBtn.addEventListener("click", e => {
  e.stopPropagation();
  langMenu.classList.toggle("show");
});

// закрыть при клике вне меню
document.addEventListener("click", () => {
  langMenu.classList.remove("show");
});


// переключение языка
document.querySelectorAll(".lang-option").forEach(btn => {
  btn.addEventListener("click", () => {

    const lang = btn.dataset.lang;

    // 🔥 СКРЫВАЕМ ТОЛЬКО text-de / text-en
    document.querySelectorAll(".text-de").forEach(el => {
      el.style.display = lang === "de" ? "" : "none";
    });

    document.querySelectorAll(".text-en").forEach(el => {
      el.style.display = lang === "en" ? "" : "none";
    });

    // CV кнопка
    if (lang === "de") {
      cvBtn.href = "./resumes/Lebenslauf.pdf";
      cvBtn.textContent = "Lebenslauf herunterladen";
      langBtn.textContent = "DE ▾";
    }

    if (lang === "en") {
      cvBtn.href = "./resumes/resume.pdf";
      cvBtn.textContent = "Download Resume";
      langBtn.textContent = "EN ▾";
    }

    langMenu.classList.remove("show");
  });
});


window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});