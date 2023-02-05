const itemSelected = document.querySelectorAll("[data-size]");
const package = document.querySelector("[data-pack]");
const servico = document.querySelectorAll(".servico");

let precoFinal = 0;
let item = 1;
let halfItem = 0.5;
let bigItem = 2;
/*function dizClick(){
  console.log("clicado")
}*/


itemSelected.forEach((elemento)=>{
  elemento.addEventListener("click", (evento)=>{
    if (elemento.value < 2){
    package.value = parseInt(package.value) + item
    }
    else {
      package.value = parseInt(package.value) + bigItem}
    })
  });

  /*function adicionaLista(){
    document.getElementById(".valor").append("Sofá adicionado;");
  }*/

  function calculaPreco (){
  if(package.value <= 5){
    precoFinal += 200;
  } else if ( package.value === 6) {
    precoFinal += 240;
  } else if (package.value === 7){
    precoFinal += 250;
  } else if (package.value > 7 && package.value < 10){
    precoFinal = 250 + ((package.value - 7)*35);
  } else if (package.value === 10) {
    precoFinal = 330;
  } else if (package.value > 10 && package.value < 15){
    precoFinal = 330 + ((package.value - 10)* 31.5);
  } else if (package.value === 15) {
    precoFinal = 460;
  } else {
    alert(`entre em contato`);
  }
  return precoFinal;
};

function enquadraPacote (){
  package.value
  calculaPreco;
}