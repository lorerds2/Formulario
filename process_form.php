<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Aqui você pode enviar os dados para um email, salvar no banco de dados, etc.
    echo "Obrigado, $nome! Sua mensagem foi enviada com sucesso.";
}
?>
