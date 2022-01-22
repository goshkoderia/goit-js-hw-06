// Ссилка на елемент кнопка 
const inputButtonRef = document.querySelector('#validation-input');

//ссилка на количество символов

const numberOfCharacters = inputButtonRef.dataset.length;

inputButtonRef.addEventListener('blur',(event)=>{
    event.preventDefault();

    if (String(event.currentTarget.value.length) === numberOfCharacters ){
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

