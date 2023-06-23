const botalAlterarTema = document.getElementById("mudar-Tema-de-fundo");

const body = document.querySelector("body");

botalAlterarTema.addEventListener("click",()=>{
   
const modoFundoComMarEstarAtivo = body.classList.contains("fundo-com-mar");
 
if(modoFundoComMarEstarAtivo){
    body.classList.remove("fundo-com-mar");
} else {
    body.classList.add("fundo-com-mar")
}
});