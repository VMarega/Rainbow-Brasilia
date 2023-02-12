const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
const adicionar = document.querySelector(".adicionar");
const lavagem = document.querySelector(".remocao-de-manchas");
const preco = document.querySelector("[data-valor]");
const formItem = document.querySelector(".form-item");
const higProfunda = document.querySelector(".hig-profunda")
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


adicionar.addEventListener("click", evento=>{
    if(lavagem.checked){
        preco.value = parseInt(preco.value) + precoDoItem + acrescimoCaract;
        formItem.reset();
    } else if (higProfunda.checked){
        pacoteFinal += pacoteAtual;
        console.log(pacoteFinal)
        if(pacoteFinal > 5){
        verificaPacote();
        preco.value = parseInt(preco.value) + precoDoPacote;
        formItem.reset();
        } else if (!verifica){
            precoDoPacote = pacote5itens;
            preco.value = parseInt(preco.value) + precoDoPacote;
            verifica = true;
            formItem.reset();
        } else {
            preco.value = parseInt(preco.value) + 0;
            formItem.reset();
        }
    } else {
        alert(`Você deve informar um serviço para o item adicionado`)
    }
})
