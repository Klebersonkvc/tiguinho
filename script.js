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
    musica();
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

function verificarFileira1(){
  let slot1 = document.getElementById("tile1").src;
  let slot2 = document.getElementById("tile4").src;
  let slot3 = document.getElementById("tile7").src;
  let carta = "tile1.png";

   if( slot1.endsWith(carta) && slot2.endsWith(carta) && slot3.endsWith(carta) ){
    return true;
  }else{
    return false;
  }
}

function verificarFileira2(){
  let slot4 = document.getElementById("tile2").src;
  let slot5 = document.getElementById("tile5").src;
  let slot6 = document.getElementById("tile8").src;
  let carta = "tile1.png";

   if( slot4.endsWith(carta) && slot5.endsWith(carta) && slot6.endsWith(carta) ){
    return true;
  }else{
    return false;
  }
}
function verificarFileira3(){
  let slot7 = document.getElementById("tile3").src;
  let slot8 = document.getElementById("tile6").src;
  let slot9 = document.getElementById("tile9").src;
  let carta = "tile1.png";

   if( slot7.endsWith(carta) && slot8.endsWith(carta) && slot9.endsWith(carta) ){
    return true;
  }else{
    return false;
  }
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