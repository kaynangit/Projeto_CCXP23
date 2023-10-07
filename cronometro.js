const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "30 nov 2023"

function countdown(){
    const datadeL = new Date (lancamento)
    const hoje = new Date()

    const segundostt = (datadeL - hoje)/1000;

    const finalD = Math.floor(segundostt / 60 / 60 / 24 ); 
    const finalH = Math.floor(segundostt/ 60 / 60) % 24;
    const finalM = Math.floor(segundostt/ 60) % 60;
    const finalS = Math.floor(segundostt) % 24;

    dias.innerHTML = formatotemp(finalD)
    horas.innerHTML = formatotemp(finalH)
    minutos.innerHTML = formatotemp(finalM)
    segundos.innerHTML = formatotemp(finalS)
}

function formatotemp(tempo){
    return tempo < 10? `0${tempo}` : tempo
}  

countdown()
setInterval(countdown, 1000)