const result = document.querySelector('#value');

const buttonPlusRef = document.querySelector('[data-action="increment"]');
const buttonMinusRef = document.querySelector('[data-action="decrement"]');


let counterValue = 0;

const functionAddValue = () =>{
    result.textContent = counterValue += 1;
};

const functionMinusValue = ()=>{
    result.textContent = counterValue -= 1;
};

buttonPlusRef.addEventListener("click", functionAddValue);

buttonMinusRef.addEventListener("click", functionMinusValue);