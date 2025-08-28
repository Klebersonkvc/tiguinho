// ----------------   MUSICA & Sons ----------------------------
let musicaFundo = new Audio("./sound/musica.mp3");
musica.loop = true;
function musica(){
  if(musicaFundo.pause){
    musicaFundo.currentTime = 0;
    musicaFundo.play();
  }
}

function click(){
    let audio = new Audio("./sounds/buttonClick.mp3");
    audio.play();
}
// ------------------------------------------------------------
// *********
// ----------------  Funções Globais  -------------------------

function iniciarJogo(){
    click();
    //musica();
    document.getElementById("tela-inicio").style.display="none";
    document.getElementById("tela-jogo").style.display="flex";
}

function sair(){
  document.getElementById("tela-inicio").style.display="flex";
  document.getElementById("tela-jogo").style.display="none";
  musicaFundo.pause();
}

// *********
// ----------------  Funções Jogo  -------------------------
let contadorDerrota = 0;

function jogar(){

  for(let i=0; i<=contadorDerrota; i++){
    for(let i=1; i<10; i++){
      let id = Math.floor(Math.random()*5)+1;
      document.getElementById("tile"+i).src = "./img/tile"+id+".png";
    }
    if(verificar()){
      alert("PARABÉNS VOCÊ GANHOU "+i+" Tentativas de"+contadorDerrota);
      contadorDerrota  = contadorDerrota/2
      return;
    }   
  }
    alert("VOCE PERDEU ");
       console.log("Contador: "+ contadorDerrota)
       contadorDerrota++
}

function verificarFileira1(){
  let slot1 = document.getElementById("tile1").src;
  let slot2 = document.getElementById("tile2").src;
  let slot3 = document.getElementById("tile3").src;
  let carta = "tile1.png";

    if( slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta) ){
      console.log("A GANHOU / Tentativas: "+contadorDerrota)
      return true;
    }   else{
        return false;
    }
}

function verificarFileira2(){
  let slot4 = document.getElementById("tile4").src;
  let slot5 = document.getElementById("tile5").src;
  let slot6 = document.getElementById("tile6").src;
  let carta = "tile1.png";

   if( slot4.endsWith(carta) && slot5.endsWith(carta) && slot6.endsWith(carta) ){
    console.log("B GANHOU / Tentativas: "+contadorDerrota)
    return true;
    }else{
       return false; 
    }
}

function verificarFileira3(){
  let slot7 = document.getElementById("tile7").src;
  let slot8 = document.getElementById("tile8").src;
  let slot9 = document.getElementById("tile9").src;
  let carta = "tile1.png";

   if( slot7.endsWith(carta) && slot8.endsWith(carta) && slot9.endsWith(carta) ){
    console.log("C GANHOU / Tentativas: "+contadorDerrota)
    return true;
    }else{
      return false;
    }
}

function verificar(){
  if( verificarFileira1() || verificarFileira2() || verificarFileira3() == true ){
    return true;
  }else {
    return false;
  }
}

// --------------------- Script do formulario ----------------------

let saldo = 0;

  function atualizarSaldo() {
    document.getElementById("saldo").innerText =
      "Saldo: R$ " + saldo.toFixed(2).replace(".", ",");
  }

  function depositar() {
    let valor = parseFloat(document.getElementById("deposito").value);
    if (isNaN(valor) || valor <= 0) {
      alert("Por favor, insira um valor válido para depositar.");
      return;
    }
    saldo += valor;
    atualizarSaldo();
    document.getElementById("deposito").value = "";
  }

  function sacar() {
    let valor = parseFloat(document.getElementById("saque").value);
    if (isNaN(valor) || valor <= 0) {
      alert("Informe um valor válido para saque!");
      return;
    }
    if (valor > saldo) {
      alert("Saldo insuficiente!");
      return;
    }
    saldo -= valor;
    atualizarSaldo();
    document.getElementById("saque").value = "";
  }

  atualizarSaldo();
