document.getElementById('validationForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário até a validação ser concluída
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    // Obtém os elementos de erro
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');

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

    // Se não houver erros, envia o formulário (pode ser substituído por lógica de envio AJAX)
    if (!hasErrors) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário ou fazer outra ação
        // Exemplo: this.submit(); para enviar o formulário normalmente
    }
});