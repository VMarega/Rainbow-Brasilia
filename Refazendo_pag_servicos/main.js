const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
const tTamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
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
let pacoteAtual=0;
let pacote5itens = 200;
let sextoItem = 40;
let pacote7itens = 250;
let oitavoNonoItens = 30;
let pacote10itens = 300;
let dezAoQuinze = 27.5;
let pacote15itens = 400;
let precoDoPacote = 0;
let pacoteFinal = 0;

tamanhoSofa.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        precoDoItem = 0;
        calculaPrecoDoItem(evento.target.value);
        montaPacoteHigProfunda(evento.target.value);
        return precoDoItem && pacoteAtual;
    })
})

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

/*tTamanhoSofa.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        montaPacoteHigProfunda(evento.target.value);
    })
})*/



function montaPacoteHigProfunda(tamanho){
    pacoteAtual = parseInt(tamanho);
    return pacoteAtual;
}

function verificaPacote (){
    if (pacoteFinal > 5 && pacoteFinal < 7){
        precoDoPacote += sextoItem;
    } else if (pacoteFinal == 7){
        precoDoPacote += pacote7itens;
    } else if (pacoteFinal>7 && pacoteFinal <10){
        precoDoPacote = pacote7itens + ((pacoteFinal - 7)*oitavoNonoItens);
    } else if (pacoteFinal == 10){
        precoDoPacote = pacote10itens;
    } else if (pacoteFinal > 10 && pacoteFinal < 15){
        precoDoPacote = pacote10itens + ((pacoteFinal - 10)*dezAoQuinze);
    } else if (pacoteFinal == 15){
        precoDoPacote = pacote15itens;
    } else if (pacoteFinal > 15){
        precoDoPacote = pacote15itens +((pacoteFinal - 15)*27);
    } else {
        precoDoPacote = 0;
    }
    return precoDoPacote
}

let verifica = false;

adicionar.addEventListener("click", evento=>{
    if(lavagem.checked){
        preco.value = parseInt(preco.value) + precoDoItem;
        formItem.reset();
    } else if (higProfunda.checked){
        pacoteFinal += pacoteAtual;
        console.log(pacoteFinal)
        if(pacoteFinal > 5){
        verificaPacote();
        preco.value = parseInt(preco.value) + precoDoPacote;
        formItem.reset();
        } else if (!verifica){
            preco.value = parseInt(preco.value) + pacote5itens;
            verifica = true;
        } else {
            preco.value = parseInt(preco.value) + 0;
        }
    } else {
        alert(`Você deve informar um serviço para o item adicionado`)
    }
})