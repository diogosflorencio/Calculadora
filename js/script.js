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
