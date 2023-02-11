const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
const adicionar = document.querySelector(".adicionar");
const higProfunda = document.querySelector(".hig-profunda");
const lavagem = document.querySelector(".remocao-de-manchas");
const preco = document.querySelector("[data-valor]");
const formItem = document.querySelector(".form-item");
let precoDoItem = 0;
let valorLavagemSofa2Lugares = 175;
let valorLavagemSofa3Lugares = 200;
let valorLavagemSofa4Lugares = 225;
let valorLavagemSofa5Lugares = 250;

tamanhoSofa.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        precoDoItem = 0;
        calculaPrecoDoItem(evento.target.value);
        return precoDoItem;
    })
})
console.log(precoDoItem);
function calculaPrecoDoItem(tamanho){
    if(tamanho == 1){
        precoDoItem = precoDoItem + valorLavagemSofa2Lugares
    } else if (tamanho == 1.5){
        precoDoItem = precoDoItem + valorLavagemSofa3Lugares
    } else if (tamanho == 2){
        precoDoItem = precoDoItem + valorLavagemSofa4Lugares
    } else if (tamanho == 3) {
        precoDoItem = precoDoItem + valorLavagemSofa5Lugares
    } else {
        alert(`Escolha o Nº de pessoas sentadas`)
    }
}

adicionar.addEventListener("click", evento=>{
    if(lavagem.checked){
        preco.value = parseInt(preco.value) + precoDoItem;
        formItem.reset();
    } else if (higProfunda.checked){

    } else {
        alert(`Você deve informar um serviço para o item adicionado`)
    }
})