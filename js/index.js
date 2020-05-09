// Your code goes here
const back = document.querySelector("body");
back.addEventListener("click", () => {
    back.style.backgroundColor = "crimson";
});

const bottom = document.querySelector("footer");
bottom.addEventListener("click", (event) => {
    bottom.style.backgroundColor = "Orchid";
    event.stopImmediatePropagation();
});

const topback = document.querySelector("header");
topback.addEventListener("dblclick", () => {
    topback.style.backgroundColor = "LightSteelBlue";
});

const changeimage = document.querySelector(".img-content img");
changeimage.addEventListener("mousemove", () => {
    changeimage.src ="img/MrT.jpg";
});

const titles = document.querySelector("h2");
titles.addEventListener("keydown", (event) => {
    titles.style.transform = "scale(2)";
});

const firstparagraph = document.querySelector("p");
firstparagraph.addEventListener("wheel", () => {
    firstparagraph.textContent = "This is where we fun!";
});

const changebottom = document.querySelector(".content-destination img");
changebottom.addEventListener("mouseleave", () => {
    changebottom.src ="img/maldives.jpg";
});


const crazyimage = document.querySelectorAll(".img-content img");
crazyimage[1].addEventListener("mouseover", () => {
    crazyimage[1].src = "img/holland-lake.jpg";
});


const buttn = document.getElementsByClassName("btn");
buttn[0].addEventListener("drag", () => {
    buttn[0].textContent = "Never Pay Full Price!";
});

buttn[1].addEventListener("dragend", () => {
    buttn[1].textContent = "Sign up your Father-in-Law";
});

buttn[2].addEventListener("dragend", () => {
    buttn[2].style.backgroundColor = "SeaGreen";
});

const tags = document.querySelectorAll('.main-navigation')
tags.forEach(tags => {
  tags.addEventListener('click', (event) => {
    event.preventDefault();
  })
})