const themeToggle = document.querySelector(".theme-toggle");
const currentTheme = () =>
  document.body.classList.contains("dark") ? "dark" : "light";

function setTheme(theme) {
  if (theme === "dark") {
    themeToggle.classList.remove("spin");
    document.body.classList.add("dark");
  } else {
    themeToggle.classList.add("spin");
    document.body.classList.remove("dark");
  }
  window.localStorage.setItem("theme", theme);
}

setTheme(window.localStorage.getItem("theme") || currentTheme());

themeToggle?.addEventListener("click", () =>
  setTheme(currentTheme() === "dark" ? "light" : "dark")
);
