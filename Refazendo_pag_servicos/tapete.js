let compTapete = document.querySelector("#comprimento-tapete");
let largTapete = document.querySelector("#largura-tapete");
let metragem = document.querySelector(".metragem");

function calculaAreaDoTapete (){
    metragem.value = compTapete.value * largTapete.value;
}

compTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})