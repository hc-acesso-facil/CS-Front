document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", function(event) {
        let isValid = true;
        clearErrors();

        const nome = document.getElementById("nome");
        if (!nome.value.trim()) {
            showError(nome, "O nome completo é obrigatório.");
            isValid = false;
        }

        const email = document.getElementById("email");
        if (!email.value.trim()) {
            showError(email, "O e-mail é obrigatório.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Por favor, insira um e-mail válido.");
            isValid = false;
        }

        const assunto = document.getElementById("assunto");
        if (!assunto.value) {
            showError(assunto, "Por favor, selecione um assunto.");
            isValid = false;
        }

        const mensagem = document.getElementById("mensagem");
        if (!mensagem.value.trim()) {
            showError(mensagem, "A mensagem é obrigatória.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(inputElement, message) {
        const formGroup = inputElement.closest(".form-group");
        if (!formGroup) return;
        
        let errorElement = formGroup.querySelector(".error-message");
        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.className = "error-message";
            errorElement.style.color = "red";
            errorElement.style.fontSize = "12px";
            errorElement.style.marginTop = "5px";
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
        inputElement.style.borderColor = "red"; 
    }

    function clearErrors() {
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());
        
        const inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach(input => {
            input.style.borderColor = "#ccc"; 
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

