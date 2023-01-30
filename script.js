function swapTheme() {
  const app = document.getElementById("app");
  const swapButton = document.getElementById("swap");
  
  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");
    swapButton.innerHTML = "Light Theme";
    swapButton.classList.remove("button_day");
    swapButton.classList.add("button_night");
  } else {
    app.classList.remove("night");
    app.classList.add("day");
    swapButton.innerHTML = "Dark Theme";
    swapButton.classList.remove("button_night");
    swapButton.classList.add("button_day");
  }
}

document.getElementById("swap").addEventListener("click", swapTheme);