<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos estão preenchidos
    $nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : '';

    // Simples validação do lado do servidor (opcional, pois já validamos no JavaScript)
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Todos os campos são obrigatórios.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    // Aqui você pode adicionar a lógica para processar os dados
    // Por exemplo, enviar um e-mail ou armazenar em um banco de dados

    // Exemplo de resposta para o usuário
    echo "Formulário recebido. Nome: $nome, Email: $email, Mensagem: $mensagem";
} else {
    echo "Método não permitido.";
}
?>