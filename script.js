let calendario = document.getElementById("calendario");
let limpar = document.getElementById("limpar");
let select = document.getElementById("mes");


const NUM_DIAS_MES = [31,28,31,30,31,30,31,31,30,31,30,31];
const DIAS_SEMANA = "DSTQQSS".split("");
const SEGUNDA = 1;
const NUM_DIAS_SEMANA = 7;
const JANUARY_FIRST_DAY_OF_WEEK = SEGUNDA;

function escreveDiasSemana(){
    for(let i = 0; i < NUM_DIAS_SEMANA; i++){ 
        const dia = document.createElement("div");
        dia.classList.add("nomeDiasSemana");
        dia.innerHTML = DIAS_SEMANA[i];
        calendario.appendChild(dia);
    }
}

//caixa vazia para depois comecar a meter os dias 
//nos dias de semana certos
function desenhaCaixasVazias(mes){
    let primeiroDiaMes = SEGUNDA;  //primeiro dia de janeiro de 2023 calha numa segunda
    let total_dias = 0;
    if(mes > 1){
        for(let i = 0; i < mes - 1; i++){
            total_dias += NUM_DIAS_MES[i];
        }
    }

    for(let i = 0; i < total_dias % NUM_DIAS_SEMANA; i++){ 
        const dia = document.createElement("div");
        dia.classList.add("caixaVazia");
        calendario.appendChild(dia);
    }
}
function desenhaCalendario(numDias){
    for(let i = 1; i <= numDias; i++){ 
        const dia = document.createElement("div");
        dia.classList.add("dia");
        dia.innerHTML = i;
        calendario.appendChild(dia);
    }
}
select.addEventListener("change", function(){
    while(calendario.firstChild){
        calendario.removeChild(calendario.firstChild)
    }
    escreveDiasSemana();
    desenhaCaixasVazias(mes.value);
    desenhaCalendario(NUM_DIAS_MES[mes.value - 1])
});
n