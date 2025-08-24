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
    // musica();
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

}
