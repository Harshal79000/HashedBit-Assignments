function swapTheme() {
    const app = document.getElementById("app");
    const button = document.getElementById("swap");
  
    // Toggle the class of the main div
    app.classList.toggle("day");
    app.classList.toggle("night");
  
    // Toggle the class of the button
    button.classList.toggle("button_day");
    button.classList.toggle("button_night");
  }