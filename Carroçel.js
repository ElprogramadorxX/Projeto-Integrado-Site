const imagens = [
    "Modelo 3D Flow.png",
    "Gerador Fluvial.jpg",
    "Logo Empresa.png",
  ];

  const carrosel = document.querySelector(".carrosel");
  let indiceAtual = 0;

  function exibir() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizar();
  }

  function exibirImagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizar();
  }

  function atualizar() {
    carrosel.innerHTML = `<img src="${imagens[indiceAtual]}" alt="imagem ${indiceAtual}">`;
  }

  carrosel.insertAdjacentHTML(
    "afterend",
    `<button onclick="exibirImagemAnterior()"><</button>
    <button onclick="exibirProximaImagem()">></button>`
  );

  atualizar();