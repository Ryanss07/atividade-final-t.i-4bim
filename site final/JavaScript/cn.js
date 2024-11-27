// Inicializando o EmailJS com seu user_id
window.onload = function() {
    emailjs.init('Hr2w-IekVe9ak-LX6');  // Substitua pelo seu user_id do EmailJS

    document.getElementById('enviarBtn').addEventListener('click', function() {
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
        emailjs.send('service_f6ux2nb', 'template_jj4snng', dados)
        .then(function(response) {
            alert('E-mail enviado com sucesso!');
            console.log('Resposta do EmailJS:', response);
        }, function(error) {
            alert('Erro ao enviar e-mail. Verifique os detalhes no console.');
            console.error('Erro do EmailJS:', error);
            if (error.status === 400) {
                console.log('Erro: Dados ou Template inválido!');
            } else if (error.status === 403) {
                console.log('Erro: Acesso negado (verifique sua chave API).');
            } else if (error.status === 500) {
                console.log('Erro: Problema no servidor do EmailJS.');
            }
            console.log('Detalhes do erro:', JSON.stringify(error, null, 2));
        });        
    });
};
