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

function jogar(){

  for(let i=1; i<9; i++){
    let id = Math.floor(Math.random()*5)+1;
    document.getElementById("tile"+i).src = "./img/tile"+id+".png";
  }
  verificar();
}

// verificação teste-----------------------------------------
// function verificarFileiraCaramelo(){
//   let slot1 = document.getElementById("tile1").src;
//   let slot2 = document.getElementById("tile2").src;
//   let slot3 = document.getElementById("tile3").src;
//   let carta = "tile1.png";

//   for(let i=0; i<2000; i++){
//    if( slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta) ){
//     console.log("GANHOU")
//     return true;
//     }
//      console.log("Teste B 0"+i);
//   }
//     return false;
// }
// -----------------------------------------


// function verificarFileira1(){
//   let carta = "tile1.png";

//   for(let i=0; i<4000; i++){
//     // sorteia novamente os tiles da fileira 1
//     for (let j=1; j<=3; j++){
//       let id = Math.floor(Math.random()*5)+1;
//       document.getElementById("tile"+j).src = "./img/tile"+id+".png";
//     }

//     // lê os src atualizados
//     let slot1 = document.getElementById("tile1").src;
//     let slot2 = document.getElementById("tile2").src;
//     let slot3 = document.getElementById("tile3").src;

//     if(slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta)){
//       console.log("GANHOU na tentativa " + i);
//       return true;
//     }
//   }

//   console.log("Não conseguiu ganhar");
//   return false;
// }



function verificarFileira1(){
  let slot1 = document.getElementById("tile1").src;
  let slot2 = document.getElementById("tile2").src;
  let slot3 = document.getElementById("tile3").src;
  let carta = "tile1.png";

  for(let i=0; i<10; i++){
    if( slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta) ){
      console.log("GANHOU")
      return true;
    }
     console.log("Teste A 0"+i);
  }
    return false;

}

function verificarFileira2(){
  let slot4 = document.getElementById("tile4").src;
  let slot5 = document.getElementById("tile5").src;
  let slot6 = document.getElementById("tile6").src;
  let carta = "tile1.png";

  for(let i=0; i<10; i++){
   if( slot4.endsWith(carta) && slot5.endsWith(carta) && slot6.endsWith(carta) ){
    console.log("GANHOU")
    return true;
    }
     console.log("Teste B 0"+i);
  }
    return false;
}

function verificarFileira3(){
  let slot7 = document.getElementById("tile7").src;
  let slot8 = document.getElementById("tile8").src;
  let slot9 = document.getElementById("tile9").src;
  let carta = "tile1.png";

  for(let i=0; i<10; i++){
   if( slot7.endsWith(carta) && slot8.endsWith(carta) && slot9.endsWith(carta) ){
    console.log("GANHOU")
    return true;
    }
    console.log("Teste C 0"+i);
  }
    return false;
}

function verificar(){
  // let fileira1 = [slot1, slot2, slot3];
  // let fileira2 = [slot4, slot5, slot6];
  // let fileira3 = [slot7, slot8, slot9];

  if( verificarFileira1() || verificarFileira2() || verificarFileira3() == true ){
    alert("Parabens");
  }else{
    alert("Perdeu");
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
