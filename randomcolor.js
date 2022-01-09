const btn = document.querySelector("button");
const body = document.body;
const span = document.querySelector("h1 .clr");
const h1 = document.querySelector("h1");


function randomcolorgen() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomcolor = `rgb(${red}, ${green}, ${blue})`;
    return randomcolor;
}
btn.addEventListener("click", () => {
    const randomcolor = randomcolorgen();
    body.style.background = randomcolor;
    btn.style.background = randomcolor;
    span.textContent = randomcolor;
    h1.style.color = randomcolor;


});