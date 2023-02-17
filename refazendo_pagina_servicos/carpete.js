const areaCarpete = document.querySelector("#area-carpete");
const higProfunda4 = document.querySelector(".hig-profunda4");
let itensCarpete = 0;

function calculaQuantidadeItensDoCarpete (){
    itensCarpete = areaCarpete.value / 4;
    console.log(itensCarpete);
    if (itensCarpete < 1){
        pacoteAtual = 1;
    } else {
        pacoteAtual = parseInt(itensCarpete);
    }
    return pacoteAtual
}