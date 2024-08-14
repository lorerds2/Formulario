  // Função de validação do nome
    function validateName() {
        if (nameInput.value.trim() === '') {
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            nameError.textContent = 'O nome é obrigatório.';
        } else if (/\d/.test(nameValue)) {
            nameError.textContent = 'O nome não pode conter números.';
        } else {
            nameError.textContent = '';
        }
