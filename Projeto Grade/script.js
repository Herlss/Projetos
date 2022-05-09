setInterval(function load() {

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    var dia = data.getUTCDay()
    var mes = data.getUTCMonth() + 1
    var ano = data.getFullYear()
    var tempo = document.getElementById('time')
    var dataAgora = document.getElementById('date')

    dataAgora.innerHTML = `Data: ${dia}/${mes}/${ano}`

    if (sec < 10 && min < 10) {
        tempo.innerHTML = `Hora: ${hora}:0${min}:0${sec}`
    } else if (min < 10){
        tempo.innerHTML = `Hora: ${hora}:0${min}:${sec}`
    } else if (hora < 10){
        tempo.innerHTML = `Hora: 0${hora}:${min}:${sec}`
    } else {
        tempo.innerHTML = `Hora: ${hora}:${min}:${sec}`
    }
}, 1)

function showGrade() {

    var gradeCont = document.getElementById('grade-wrapper')
    var diasem = document.getElementById('weekday')
    var data2 = new Date()
    var diaSem = data2.getDate()
    
    var mat1 = document.getElementById('mate1')

    if (diaSem == 8) {
        diaSem = "Domingo"
    } else if (diaSem == 2) {
        diaSem = "Segunda"
    } else if (diaSem == 3) {
        diaSem = "Terça"
    } else if (diaSem == 4) {
        diaSem = "Quarta"
    } else if (diaSem == 5) {
        diaSem = "Quinta"
    } else if (diaSem == 6) {
        diaSem = "Sexta"
    } else if (diaSem == 7) {
        diaSem = "Sábado"
    }

    diasem.innerHTML = `Hoje é ${diaSem}`
    gradeCont.style.display = 'block'   

    if (diaSem == 8) {
        mat1.innerHTML = `Banana`
    }
}
