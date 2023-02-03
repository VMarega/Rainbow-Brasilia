const selecionado = document.querySelectorAll("[data-seleciona]");
const sofa = document.querySelector("#sofa");
const sofa_radius = document.querySelector("#sofa_radius");

console.log(sofa);
selecionado.forEach((e)=>{e.addEventListener('change', ()=>{
    if (e.checked) {
        console.log("Checkbox is checked..");
      } else {
        console.log("Checkbox is not checked..");
      }})
});
//sofa.addEventListener('click', ()=>{
//  const sofa_values = window.open('/descontaminacao_profunda/sofa_values.html')
//})
