const widthSpan = document.getElementById("width");
const heightSpan = document.getElementById("height");

let currentUnit = "px"; 

function updateSizeDisplay() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  if (currentUnit === "px") {
    widthSpan.textContent = width;
    heightSpan.textContent = height;
  } else if (currentUnit === "em") {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    widthSpan.textContent = (width / fontSize).toFixed(2);
    heightSpan.textContent = (height / fontSize).toFixed(2);
  } else if (currentUnit === "%") {
    const totalWidth = window.screen.width;
    const totalHeight = window.screen.height;
    widthSpan.textContent = ((width / totalWidth) * 100).toFixed(2);
    heightSpan.textContent = ((height / totalHeight) * 100).toFixed(2);
  }
}

function switchUnit(unit) {
  currentUnit = unit;
  updateSizeDisplay(); 
}


window.addEventListener("resize", updateSizeDisplay);


updateSizeDisplay();
