const botoes = document.getElementsByClassName("botoes");
const visor = document.getElementById("input");

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", event => {
        if(botoes[i].innerHTML == "AC"){
            limparVisor();
        }else if (botoes[i].innerHTML == "DEL") {
            apagarUltimo();
        }else if (botoes[i].innerHTML == "%"){
            porcentagem();
        }else if (botoes[i].innerHTML == "="){
            calcular(visor.value);
        }else {
            visor.value += botoes[i].innerHTML;
        }
    })
    
    const limparVisor = () => {
        visor.value = "  LIMPO!"
        setTimeout(() => {
            visor.value = ""
        },1200)
    }
    const apagarUltimo = () => {
        visor.value = visor.value.slice(0, -1);
    }
    const porcentagem = () => {
        visor.value = visor.value/100;
    }
    const calcular = () => {
        visor.value = eval(visor.value)
    }
}

// tema 

const body = document.getElementsByClassName("back")[0]
const calculadora = document.getElementsByClassName("calculadora")[0];
const botaoTema = document.getElementById("botao-tema");

const mudarTema = () => {
    if(body.classList.contains("escuro")){
        calculadora.classList.remove("escuro")
        calculadora.classList.add("claro")
        body.classList.remove("escuro")
        body.classList.add("claro")
        botaoTema.classList.remove("escuro")
        botaoTema.classList.add("claro")
        visor.classList.remove("escuro")
        visor.classList.add("claro")
    }else{
        calculadora.classList.remove("claro")
        calculadora.classList.add("escuro")
        body.classList.remove("claro")
        body.classList.add("escuro")
        botaoTema.classList.remove("claro")
        botaoTema.classList.add("escuro")
        visor.classList.remove("claro")
        visor.classList.add("escuro")
    }
}

botaoTema.addEventListener("click", () => {
    mudarTema()
} )