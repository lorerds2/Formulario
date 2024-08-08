document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Nome
        const nome = document.getElementById('nome').value;
        const nomeError = document.getElementById('nomeError');
        if (nome.trim() === '') {
            nomeError.textContent = 'Nome é obrigatório.';
            valid = false;
        } else {
            nomeError.textContent = '';
        }

        // Email
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            emailError.textContent = 'Email é obrigatório.';
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Email inválido.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Mensagem
        const mensagem = document.getElementById('mensagem').value;
        const mensagemError = document.getElementById('mensagemError');
        if (mensagem.trim() === '') {
            mensagemError.textContent = 'Mensagem é obrigatória.';
            valid = false;
        } else {
            mensagemError.textContent = '';
        }

        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
});