function createDiv(width, height, text) {
    const newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.style.backgroundColor = "lightgray";
    newDiv.style.border = "1px solid black";
    newDiv.style.margin = "10px"; // Add margin
    newDiv.textContent = text;
    const container = document.getElementById("container");
    container.appendChild(newDiv);
  }
  window.createDiv = createDiv;

createDiv(100, 50, "Hello, World!");
createDiv(200, 75, "This is another div");
createDiv(150, 100, "Div with different dimensions");