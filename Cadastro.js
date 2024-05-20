let Vemail = [];
let Vsenha = [];

function cadastrar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email == '' || senha == '') {
        document.getElementById('resposta').innerHTML = `Cadastro Inválido, Digite novamente as informações`;
    } else {
        verificador(email);
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
    }
}

function verificador(email) {
    for (let i = 0; i < Vemail.length; i++) { 
        if (Vemail[i] == email) {
            document.getElementById('resposta').innerHTML = `Você já tem uma conta em nosso site`;
            return;
        }
    }
    Vemail.push(email);
    Vsenha.push(document.getElementById('senha').value);
    document.getElementById('resposta').innerHTML = `Cadastro feito com sucesso`;
}