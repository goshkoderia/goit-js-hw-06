//ссилка на кнопку
const inputButtonRef = document.querySelector("#font-size-control");
//ссилка на text span

const textRef = document.querySelector("#text");

inputButtonRef.addEventListener("input", (event)=>{
    textRef.style.fontSize = `${event.currentTarget.value}px`
});

