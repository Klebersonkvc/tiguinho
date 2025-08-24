// MUSICA & Sons....
function musica(){
  let musica = new Audio("./teste/sound/musica.mp3");
  musica.play
}

function click(){
    let audio = new Audio("./teste/sounds/buttonClick.mp3");
    audio.play();
}
// Funções...

function jogar(){
    click();
    musica();
    document.getElementById("tela-inicio").style.display="none";
    document.getElementById("tela-jogo").style.display="flex";
}

function sair(){
  document.getElementById("tela-inicio").style.display="flex";
    document.getElementById("tela-jogo").style.display="none";
}



