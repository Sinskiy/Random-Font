const text = document.querySelector("h1");

function generateFont() {
  const fonts = [
    "'Climate Crisis', cursive",
    "'Tilt Prism', cursive",
    "'Unica One', cursive",
    "'Press Start 2P', cursive",
    "'Rubik Iso', cursive",
    "'Smokum', cursive",
    "'Arial', sans-serif",
  ];
  const font = Math.floor(Math.random() * fonts.length);
  const randomFont = fonts[font];
  text.style.fontFamily = `${randomFont}`;
}
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

function update() {
  const suffix = this.dataset.sizing;
  h1.style.fontSize = `${this.value + suffix}`;
}

input.addEventListener("change", update);
input.addEventListener("mousemove", update);
