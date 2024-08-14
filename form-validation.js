document.getElementById('validationForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário até a validação ser concluída
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message').value.trim();

    // Obtém os elementos de erro
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const messageError = document.getElementById('messageError');

    // Inicializa um indicador de erro
    let hasErrors = false;

    // Valida o nome
    const namePattern = /^[a-zA-Z\s]+$/; // Permite apenas letras e espaços
    if (name === '') {
        nameError.textContent = 'Nome é obrigatório.';
        hasErrors = true;
    } else if (!namePattern.test(name)) {
        nameError.textContent = 'Nome não pode conter números.';
        hasErrors = true;
    } else {
        nameError.textContent = '';
    }

    // Valida o e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'E-mail é obrigatório.';
        hasErrors = true;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'E-mail inválido.';
        hasErrors = true;
    } else {
        emailError.textContent = '';
    }

    // Valida a senha
    if (password === '') {
        passwordError.textContent = 'Senha é obrigatória.';
        hasErrors = true;
    } else if (!/^\d{6}$/.test(password)) { // Verifica se a senha tem exatamente 6 dígitos
        passwordError.textContent = 'Senha deve ter exatamente 6 dígitos.';
        hasErrors = true;
    } else {
        passwordError.textContent = '';
    }

    // Valida a mensagem
    if (message === '') {
        messageError.textContent = 'Mensagem é obrigatória.';
        hasErrors = true;
    } else {
        messageError.textContent = '';
    }

    // Se não houver erros, envia o formulário (pode ser substituído por lógica de envio AJAX)
    if (!hasErrors) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário ou fazer outra ação
        // Exemplo: this.submit(); para enviar o formulário normalmente
    }
});
