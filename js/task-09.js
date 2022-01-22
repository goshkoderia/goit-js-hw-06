function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const spanColorRef = document.querySelector(".color");
const butttonRef = document.querySelector(".change-color");

function changeColorBody(){
  let colorRandomHex = getRandomHexColor();
  bodyRef.style.backgroundColor = colorRandomHex;
  spanColorRef.textContent = colorRandomHex;

};

butttonRef.addEventListener("click", changeColorBody);