document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Função de validação do nome
    function validateName() {
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            nameError.textContent = 'O nome é obrigatório.';
        } else if (/\d/.test(nameValue)) {
            nameError.textContent = 'O nome não pode conter números.';
        } else {
            nameError.textContent = '';
        }
    }

    // Função de validação do e-mail
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'E-mail inválido.';
        } else {
            emailError.textContent = '';
        }
    }

    // Função de validação da senha
    function validatePassword() {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        } else {
            passwordError.textContent = '';
        }
    }

    // Adiciona os ouvintes de eventos para validação em tempo real
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Valida o formulário ao submeter
    document.getElementById('myForm').addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        // Evita o envio do formulário se houver erros
        if (nameError.textContent || emailError.textContent || passwordError.textContent) {
            event.preventDefault();
        }
    });
});