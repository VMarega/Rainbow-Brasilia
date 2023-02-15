let compTapete = document.querySelector("#comprimento-tapete");
let largTapete = document.querySelector("#largura-tapete");
let metragem = document.querySelector("#area-tapete");
const higProfunda3 = document.querySelector(".hig-profunda3");
let itensTapete = 0;
const botaoTapete = document.querySelector("[data-add-tapete]");

function calculaAreaDoTapete (){
    metragem.value = compTapete.value * largTapete.value;
}

largTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})
compTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})

botaoTapete.addEventListener("click", (evento)=>{
    calculaQuantidadeItensDoTapete();
})

function calculaQuantidadeItensDoTapete (){
    itensTapete = metragem.value / 4;
    if (itensTapete < 1 && itensTapete > 0){
        pacoteAtual = 1;
    } else {
        pacoteAtual = parseInt(itensTapete);
    }
    console.log(pacoteAtual)
    return pacoteAtual
    
}
