function cal() {
    var inputMes = document.getElementById("qntMeses")
    var inputMesval = Number((inputMes.value))

    var inputPorcentagem = document.getElementById("qntPorcentagem")
    var inputPorcentagemval = Number((inputPorcentagem.value))

    var inputInicial = document.getElementById("qntInicial")
    var inputInicialval = Number((inputInicial.value))

    var inputMensal = document.getElementById("qntMensal")
    var inputMensalval = Number((inputMensal.value))

    var calc =  inputPorcentagemval / 100 + 1 

    imp = ""

    for(jur = 1; jur <= inputMesval; jur++){
        inputInicialval = inputInicialval * calc
        inputInicialval = inputInicialval + inputMensalval
    }

    imp = imp 

    alert(inputInicialval.toFixed(2))
}