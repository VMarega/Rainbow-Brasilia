const largLivros = document.querySelector("#larguraLivros");
const compLivros = document.querySelector("#comprimentoLivros");
const areaLivros = document.querySelector(".areaLivros");
const higProfunda9 = document.querySelector(".hig-profunda9");

function calculaAreaEstante () {
    areaLivros.value = largLivros.value * compLivros.value;
}

largLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})

compLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})

function calculaItensLivros (){
    itensLivros = areaLivros.value / 2;
    if (itensLivros<1){
        pacoteAtual = 1
    } else {
        pacoteAtual = parseInt(itensLivros);
    }
    return pacoteAtual;
}