const botao = document.querySelectorAll(".size-selected");

botao.forEach((elemento)=>{
elemento.addEventListener("click", (e)=>{
    if(e.target.classList.contains("size-selected")){
    e.target.classList.remove("size-selected");
    e.target.classList.add("size-selected2");
    this.siblings(".size-selected").remove("size-selected2");
} else {
    e.target.classList.remove("size-selected2");
    e.target.classList.add("size-selected")
}})
})


const itemSelecionado = document.querySelectorAll ("[data-size]");
const servico = document.querySelectorAll("[data-descontaminacao]");
const valor = document.querySelector("[data-valor]")
let pacote = 0;

itemSelecionado.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        pacote += parseInt(elemento.value)
    })
    console.log(pacote)
})
