// MUSICA & Sons....
function musica(){
  let musica = new Audio("./sound/musica.mp3");
  musica.play
}

function click(){
    let audio = new Audio("./sounds/buttonClick.mp3");
    audio.play();
}
// Funções...

  function jogar(){
    click();
    musica();
    document.getElementById("tela-inicio").style.display="none";
    document.getElementById("tela-jogo").style.display="flex";
}



