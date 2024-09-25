// Selecionando pelo ID do título
const title = document.getElementById("titulo");
// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola")
// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");
//botao frases
const mudarfrases = document.getElementById("mudar");
//mensagem 1
const mensagemUM = document.getElementsByClassName("mensagem2");
//mensagem 2
const mensagemDois = document.getElementsByClassName("mensagem3");
//mensagem 3
const mensagemTres = document.getElementsByClassName("mensagem4");


// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "thiago de lima de assis cordero";
});


mudarfrases.addEventListener("click", function () {
    mensagemTres[0].textContent = "thiago de lima de assis cordero";
    mensagemDois[0].textContent = "pascalzim é bao de mais";
    mensagemUM[0].textContent = "web é bão de mais";
  });


  
