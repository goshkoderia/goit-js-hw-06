const textInputRef = document.querySelector("#name-input");

const yourNameRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event)=>{
    yourNameRef.textContent = event.currentTarget.value;
    if (yourNameRef.textContent === ""){
       yourNameRef.textContent = "Anonymous"     
    }    
});