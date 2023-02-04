const sofaSelect = document.querySelectorAll("[data-size]");
const package = document.querySelector("[data-pack]")
/*function dizClick(){
  console.log("clicado")
}*/


sofaSelect.forEach((elemento)=>{
  elemento.addEventListener("click", (evento)=>{
    package.value = parseInt(package.value) + 1
  })
});
