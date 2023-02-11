const lavagem = document.querySelector(".remocao-de-manchas");
const higProfunda = document.querySelector(".hig-profunda");
const adicionar = document.querySelector(".adicionar");
let preco = document.querySelector("[data-valor]");
const tamanhoSofa = document.querySelectorAll("[data-pessoas-sentadas]");
let valorLavagemSofa2Lugares = 175;
let valorLavagemSofa3Lugares = 200;
let valorLavagemSofa4Lugares = 225;
let valorLavagemSofa5Lugares = 250;

function verificaTamanhoSofa (tamanho){
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


/*function verificaValue (){
    tamanhoSofa.forEach((elemento)=>{
        if(elemento.checked){
            return tamanhoSofa.value
        }
    })}

function  calculaPrecoLavagem () { 
    verificaValue()
    if(tamanhoSofa.value === 1){
            preco.value = parseInt(preco.value) + valorLavagemSofa2Lugares;
        }
            /*preco.value = parseInt(preco.value) + valorLavagemSofa2Lugares;
            }  else if (tamanhoSofa.checked.value == 2){
            preco.value = parseInt(preco.value) + valorLavagemSofa3Lugares;
            } else if (tamanhoSofa.checked.value == 3){
            preco.value = parseInt(preco.value) + valorLavagemSofa4Lugares;
            } else if (tamanhoSofa.checked.value == 4){
            preco.value = parseInt(preco.value) + valorLavagemSofa5Lugares;
            } else {alert(`algo deu errado`)}
        }*/

        tamanhoSofa.forEach((elemento) => {
            elemento.addEventListener("change", (evento)=>{
                adicionar.addEventListener("click", (e)=>{
                    if(lavagem.checked){
                        verificaTamanhoSofa(evento.target.value);
                        }
                        // quero que feche o modal
                        // quero que inclua o item adicionado na lista
                    else if (higProfunda.checked){
                        console.log("o cliente quer rbw");
                    } else {
                        alert(`Selecione o serviço desejado para este item`)
                    }
                })
            })
        })

