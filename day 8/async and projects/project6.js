//generate a random color

const random = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};
let intervalId;
const startChangingcolor = function () {
  intervalId = setInterval(changebg, 1000);

  function changebg() {
    document.body.style.backgroundColor = random();
  }
};

const stopChangingcolor = function () {
  clearInterval(intervalId);

  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChangingcolor);

document.querySelector("#stop").addEventListener("click", stopChangingcolor);
