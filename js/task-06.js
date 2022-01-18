// Ссилка на елемент кнопка 
const inputButtonRef = document.querySelector('#validation-input');

console.log(inputButtonRef);

//ссилка на количество символов

const numberOfCharacters = inputButtonRef.dataset.length;

console.log(numberOfCharacters);

inputButtonRef.addEventListener('blur',(event)=>{
    event.preventDefault();
    if (event.currentTarget.value.length == numberOfCharacters ){
        if(inputButtonRef.classList.contains("invalid")){
            inputButtonRef.classList.remove("invalid")
        }
        inputButtonRef.classList.add("valid");
    }
    else{
        if (inputButtonRef.classList.contains("valid")){
            inputButtonRef.classList.remove("valid")
        }
        inputButtonRef.classList.add("invalid");
    }
       
});

