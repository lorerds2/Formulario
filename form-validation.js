document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário até a validação ser concluída
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Obtém os elementos de erro
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Inicializa um indicador de erro
    let hasErrors = false;

    // Valida o nome
    if (name === '') {
        nameError.textContent = 'Nome é obrigatório.';
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