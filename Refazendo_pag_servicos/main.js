const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
const adicionar = document.querySelectorAll(".adicionar");
const higProfunda = document.querySelector(".hig-profunda");
const higProfunda2 = document.querySelector(".hig-profunda2");
const higProfunda5 = document.querySelector(".hig-profunda5");
const higProfunda6 = document.querySelector(".hig-profunda6");
const higProfunda7 = document.querySelector(".hig-profunda7")
const higProfunda8 = document.querySelector(".hig-profunda8");
const lavagem = document.querySelector(".remocao-de-manchas");
const preco = document.querySelector("[data-valor]");
const formItem = document.querySelectorAll(".form-item");
let precoDoItem = 0;
let valorLavagemSofa2Lugares = 175;
let valorLavagemSofa3Lugares = 200;
let valorLavagemSofa4Lugares = 225;
let valorLavagemSofa5Lugares = 250;
const caract = document.querySelectorAll("[data-sofa-caract]")
let acrescimoCaract = 0;

caract.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        acrescimoCaract = 0;
        acrescimoCaract = 25;
    })
})

tamanhoSofa.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        precoDoItem = 0;
        calculaPrecoDoItem(evento.target.value);
        return precoDoItem;
    })
})

function calculaPrecoDoItem(tamanho){
    if(tamanho == 1){
        precoDoItem = precoDoItem + valorLavagemSofa2Lugares
    } else if (tamanho == 1.5){
        precoDoItem = precoDoItem + valorLavagemSofa3Lugares
    } else if (tamanho == 2){
        precoDoItem = precoDoItem + valorLavagemSofa4Lugares
    } else if (tamanho == 2.5) {
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

let verifica = false;

adicionar.forEach((elemento)=>{
elemento.addEventListener("click", evento=>{
    if(lavagem.checked){
        preco.value = parseInt(preco.value) + precoDoItem + acrescimoCaract;
        formItem.forEach((elemento)=>{elemento.reset();})
        
    } else if (higProfunda.checked || higProfunda2.checked || higProfunda5.checked || higProfunda6.checked || higProfunda7.checked || higProfunda8.checked){
        pacoteFinal += pacoteAtual;
        console.log(pacoteFinal)
        if(pacoteFinal > 5){
        verificaPacote();
        preco.value = parseInt(preco.value) + precoDoPacote;
        formItem.forEach((elemento)=>{elemento.reset();})
        } else if (!verifica){
            precoDoPacote = pacote5itens;
            preco.value = parseInt(preco.value) + precoDoPacote;
            verifica = true;
            formItem.forEach((elemento)=>{elemento.reset();})
        } else {
            preco.value = parseInt(preco.value) + 0;
            formItem.forEach((elemento)=>{elemento.reset();})
        }
    } else {
        alert(`Você deve informar um serviço para o item adicionado`)
    }
})
})