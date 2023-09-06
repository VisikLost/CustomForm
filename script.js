let Formular = document.querySelector(".myForm")

Formular.addEventListener("submit", function(event){
    event.preventDefault()

    event.target.elements.usernameInput.value = ""
    event.target.elements.passwordInput.value = ""
})
