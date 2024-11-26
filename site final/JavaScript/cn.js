// Inicializando o EmailJS com seu user_id
emailjs.init('Hr2w-IekVe9ak-LX6');  // Substitua pelo seu user_id do EmailJS

// Verificar o objeto emailjs no console
console.log(emailjs);

// Função que será chamada quando o botão "Enviar" for clicado
document.getElementById('enviarBtn').addEventListener('click', function() {
    // Pegue os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verifique se os campos não estão vazios
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    var dados = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Enviar os dados para o EmailJS
    emailjs.send('service_f6ux2nb', 'template_inapybf', dados)
    .then(function(response) {
        alert('E-mail enviado com sucesso!');
        console.log('Resposta do EmailJS:', response);  // Exibe a resposta detalhada
    }, function(error) {
        alert('Erro ao enviar e-mail.');
        console.error('Erro do EmailJS:', error);  // Exibe o erro detalhado
        console.log('Detalhes do erro:', JSON.stringify(error, null, 2));  // Exibe detalhes do erro
    });
});
