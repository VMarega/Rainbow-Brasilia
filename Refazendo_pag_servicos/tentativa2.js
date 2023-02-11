const lavagem = document.querySelector(".remocao-de-manchas");
const higProfunda = document.querySelector(".hig-profunda");
const adicionar = document.querySelector(".adicionar");
let preco = document.querySelector("[data-valor]");
const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
const formItem = document.querySelector(".form-item");
const modal = document.querySelectorAll(".modal");
let valorLavagemSofa2Lugares = 175;
let valorLavagemSofa3Lugares = 200;
let valorLavagemSofa4Lugares = 225;
let valorLavagemSofa5Lugares = 250;
let pacote5itens = 200;
let sextoItem = 40;
let pacote7itens = 250;
let oitavoNonoItens = 30;
let pacote10itens = 300;
let dezAoQuinze = 27.5;
let pacote15itens = 400;
let pacoteAtual = 0;



function verificaTamanhoSofaLavagem (tamanho){
    if (tamanho == 1) {
        preco.value = parseInt(preco.value) + valorLavagemSofa2Lugares;
    } else if (tamanho == 1.5){
        preco.value = parseInt(preco.value) + valorLavagemSofa3Lugares;;        
    } else if (tamanho == 2){
        preco.value = parseInt(preco.value) + valorLavagemSofa4Lugares;        
    } else if (tamanho == 3){
        preco.value = parseInt(preco.value) + valorLavagemSofa5Lugares;        
    } else {alert(`Você deve informar o Nº de pessoas sentadas que cabem no seu sofá!!`)}
}

function montaPacoteHigProfunda(tamanho){
    pacoteAtual += parseInt(tamanho);}
/*function enquadraPrecoPacote(){
    if(pacoteAtual == 0){
        preco.value = parseInt(preco.value)
    } else if (){

    }
    } else if (pacoteAtual == 6){
        preco.value = parseInt(preco.value) + pacote5itens + sextoItem;
    } else if(pacoteAtual == 7){
        preco.value = parseInt(preco.value) + pacote7itens;
    } else if (pacoteAtual > 7 && pacoteAtual < 10){
        preco.value = parseInt(preco.value) + pacote7itens + ((pacoteAtual - 7) * oitavoNonoItens )
    } else if (pacoteAtual == 10){
        preco.value = parseInt(preco.valure)+ pacote10itens;
    } else if (pacoteAtual > 10 && pacoteAtual < 15) {
        preco.value = parseInt(preco.value) + pacote10itens + ((pacoteAtual - 10)* dezAoQuinze);
    } else if (pacoteAtual == 15){
        preco.value = parseInt(preco.value) + pacote15itens;
    } else {
        preco.value = parseInt(preco.value) + pacote15itens + ((pacoteAtual - 15) * 26)
    }
}*/
tamanhoSofa.forEach((elemento) => {
    elemento.addEventListener("change", adicionar.addEventListener("click", (evento)=>{
        if(lavagem.checked){
            verificaTamanhoSofaLavagem(evento.target.value);
            formItem.reset();
}
            // quero que feche o modal
            // quero que inclua o item adicionado na lista
        else if (higProfunda.checked){
            montaPacoteHigProfunda(evento.target.value);
        } else {
            alert(`Selecione o serviço desejado para este item`)
        }
    }))
    formItem.reset();
})
    



