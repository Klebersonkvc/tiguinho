// ----------------   MUSICA & Sons ----------------------------
let musicaFundo = new Audio("./sound/musica.mp3");
musicaFundo.volume = 0.5;
musicaFundo.loop = true;


function musica() {
  if (musicaFundo.paused) {
    musicaFundo.currentTime = 0;
    musicaFundo.play();
    musicaFundo.volume = 0.5;
  }
}

function somDeclick() {
  let audio = new Audio("./sound/buttonClick.mp3");
  audio.currentTime = 0;
  audio.play();
}
// ------------------------------------------------------------

//---------função abrir modal-----------

function abrirModal(titulo) {
  document.getElementById("modalTitulo").innerText = titulo;
  // document.getElementById("modalMensagem").innerText = mensagem;
  document.getElementById("meuModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}

// Fecha o modal ao clicar fora da área de conteúdo
window.onclick = function (event) {
  const modal = document.getElementById("meuModal");
  if (event.target === modal) {
    fecharModal();
  }
};
//-----função sobre----------
function abrirSobre() {
  abrirModal("Sobre o Jogo","FORTUNE CARAMELO é um jogo de sorte e diversão! 🍀");
}

// ----------------  Funções Globais  -------------------------
function iniciarJogo() {
  // somDeclick();
  // musica();
  document.getElementById("tela-inicio").style.display = "none";
  document.getElementById("tela-jogo").style.display = "flex";
}

function sair() {
  document.getElementById("tela-inicio").style.display = "flex";
  document.getElementById("tela-jogo").style.display = "none";
  musicaFundo.pause();
}


// ----------------  Funções Jogo  -------------------------
function embacar() {
  for (let a = 1; a < 10; a++) {
    let tile = document.getElementById("tile" + a);
    tile.style.transition = "filter 0.5s ease";
    tile.style.filter = "blur(10px)";
  }
}
function desembacar() {
  for (let a = 1; a < 10; a++) {
    let tile = document.getElementById("tile" + a);
    tile.style.transition = "filter 0.5s ease";
    tile.style.filter = "blur(0px)";
  }
}

let contadorDerrota = 10;

function jogar(){
  
  let aposta = parseFloat(document.getElementById("aposta").value);

  if (isNaN(aposta) || aposta <= 0) {
    document.getElementById("resultado").innerHTML = "⚠️ Digite um valor válido para apostar.";
    return;
  }

  if (aposta > saldoAtual) {
    document.getElementById("resultado").innerHTML = "❌ Saldo insuficiente para essa aposta.";
    return;
  }
   
  embacar();
  setTimeout(() => {
    desembacar();
  }, 300);

  setTimeout(() => {

    let venceu = false;

    for (let i = 0; i <= contadorDerrota; i++) {
      for (let i = 1; i < 10; i++) {
        let id = Math.floor(Math.random() * 5) + 1;
        document.getElementById("tile" + i).src = "./img/tile" + id + ".png";
      }
      if (verificar()) {
        venceu = true;
        break
      }
    }
     if (venceu) {
      let ganho = aposta * 5;
      saldoAtual += ganho;
      abrirModal("🎉 PARABÉNS! Você ganhou !");
      document.getElementById("resultado").innerHTML =
        `<br>Você ganhou R$ ${ganho.toFixed(2)}`;
      contadorDerrota = contadorDerrota / 2;
      console.log("Valor da Aposta= " + aposta +
        "\nValor do Ganho= " + ganho +
        "\nValor do Saldo=" + saldoAtual
      )
    } else {
      saldoAtual -= aposta;
      document.getElementById("resultado").innerHTML =
        `❌ Você perdeu R$ ${aposta.toFixed(2)}`;
      console.log("Valor da Perda= " + aposta +
        "\nValor do Saldo Atual= " + saldoAtual
      )
      contadorDerrota++;
    }
  }, 300);
   
       console.log("Contador: "+ contadorDerrota)
       contadorDerrota++

  atualizarSaldoVisual();
}
  
function verificarFileira1() {
  let slot1 = document.getElementById("tile1").src;
  let slot2 = document.getElementById("tile2").src;
  let slot3 = document.getElementById("tile3").src;
  let carta = "tile1.png";

  if (slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta)) {
    return true;
  } else {
    return false;
  }
}

function verificarFileira2() {
  let slot4 = document.getElementById("tile4").src;
  let slot5 = document.getElementById("tile5").src;
  let slot6 = document.getElementById("tile6").src;
  let carta = "tile1.png";

  if (slot4.endsWith(carta) && slot5.endsWith(carta) && slot6.endsWith(carta)) {
    return true;
  } else {
    return false;
  }
}

function verificarFileira3() {
  let slot7 = document.getElementById("tile7").src;
  let slot8 = document.getElementById("tile8").src;
  let slot9 = document.getElementById("tile9").src;
  let carta = "tile1.png";

  if (slot7.endsWith(carta) && slot8.endsWith(carta) && slot9.endsWith(carta)) {
    return true;
  } else {
    return false;
  }
}

function verificar(){
  let aposta = parseFloat(document.getElementById("aposta").value);
  if( verificarFileira1() || verificarFileira2() || verificarFileira3() == true ){
    return true;
  }else {
    saldoAtual -= aposta;
    document.getElementById("resultado").innerHTML =
      `❌ Você perdeu R$ `+aposta.toFixed(2);
    return false;
  }
}

//-----função sobre----------
function abrirSobre() {
  alert("FORTUNE CARAMELO é um jogo de sorte e diversão! 🍀");
}
//---------função abrir modal-----------

function abrirModal(titulo, mensagem) {
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalMensagem").innerText = mensagem;
  document.getElementById("meuModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}

// Fecha o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
  const modal = document.getElementById("meuModal");
  if (event.target === modal) {
    fecharModal();
  }
};

//----------------------Somar, diminuir e multiplicar (Probabilidades)---------

let saldoAtual = 450.00; // valor inicial do saldo

function atualizarSaldoVisual() {
  document.getElementById("dinheiro").innerHTML = `<h1>R$ `+saldoAtual+'</h1>';

}

// window.onload = atualizarSaldoVisual;


// --------------------- Script do formulario ----------------------

// ⚠️ ERRO: esta variável "saldo" estava duplicando o controle de saldo.
// Ela foi removida e substituída por "saldoAtual" em todas as funções abaixo.

function depositar() {
  let valor = parseFloat(document.getElementById("deposito").value);
  if (isNaN(valor) || valor <= 0) {
    alert("Por favor, insira um valor válido para depositar.");
    return;
  }
  saldoAtual += valor;
  atualizarSaldoVisual();
  document.getElementById("deposito").value = "";
}
