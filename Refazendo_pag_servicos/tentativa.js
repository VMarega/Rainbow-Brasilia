const botao = document.querySelectorAll(".size-selected");
let box = document.getElementById("sofa-size")
const valor = document.querySelector("[data-valor]");

botao.forEach((elemento)=>{
elemento.addEventListener("click", (e)=>{
    if(e.target.classList.contains("size-selected")){
    e.target.classList.remove("size-selected");
    e.target.classList.add("size-selected2");
} else {
    e.target.classList.remove("size-selected2");
    e.target.classList.add("size-selected")
}})
})

const lavagem = document.querySelector(".remocao-de-manchas");
const adicionado = document.querySelector(".adicionar");
let preco = 0;


adicionado.addEventListener("click", ()=>{
    if(lavagem.checked){
        if (box.options[box.selectedIndex].value == 1){
            valor = parseInt(valor) + 175
        } else {
            valor = parseInt(valor) + 0
        }
    } else {
        valor = parseInt(valor) + 1000
    }
})


const itemSelecionado = document.querySelectorAll ("[data-size]");
const servico = document.querySelectorAll("[data-descontaminacao]");

let pacote = 0;

itemSelecionado.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        pacote += parseInt(elemento.value)
    })
    console.log(pacote)
})
