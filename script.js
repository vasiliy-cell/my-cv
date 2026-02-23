const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const cvBtn = document.getElementById("cvDownload");

langBtn.addEventListener("click", e => {
  e.stopPropagation();
  langMenu.classList.toggle("show");
});

document.addEventListener("click", () => langMenu.classList.remove("show"));

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

    langMenu.classList.remove("show");
  });
});
