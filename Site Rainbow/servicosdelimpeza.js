const selecionado = document.querySelectorAll("[data-seleciona]");

selecionado.forEach((e)=>{e.addEventListener('change', ()=>{
    if (e.checked) {
        console.log("Checkbox is checked..");
      } else {
        console.log("Checkbox is not checked..");
      }})
});

/*selecionado.addEventListener('change', ()=>{
    if(selecionado.checked) {
        console.log("checked");
    } else {
        console.log("notchecekd");
    }
});*/

