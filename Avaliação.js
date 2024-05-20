function avalienos() {
    var nota = document.getElementById('nota').value;
    nota = parseInt(nota);
    if (nota === '') {
        document.getElementById('resposta').innerHTML = 'Por favor, digite um número entre 0 e 10';
    } else {
        if (nota < 0 || nota > 10) {
            document.getElementById('resposta').innerHTML= 'Digite uma nota entre 0 e 10';
        } else {
            document.getElementById('resposta').innerHTML = `
                Obrigado pelo feedback! <br>
                <textarea id="comentario" placeholder="Deixe um comentário"></textarea><br>
                <button onclick="Comentario()">Enviar Comentário</button>
            `;
        }
    }
}

function Comentario() {
    var comentario = document.getElementById('comentario').value;
    if (comentario === '') {
        document.getElementById('resposta').innerHTML += '<br>Por favor, deixe um comentário antes de enviar.';
    } else {
        document.getElementById('resposta').innerHTML = 'Obrigado pelo seu comentário!';
    }
}