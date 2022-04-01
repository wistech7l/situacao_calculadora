let visor = ''
let valor1 = null
let valor2 = null
let usePonto = false
let on_off = true
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''   

function off(){

}

function on(){
    
}

function mudaVisor(valor){
    labelVisor.innerHTML= valor    
}

const reset = function(){
    
}

const clickn9 = function(){
    visor = visor + '9'
    mudaVisor(visor)
}

const clickn8 = function(){
    visor = visor + '8'
    mudaVisor(visor)
}

const clickn7 = function(){
    visor = visor + '7'
    mudaVisor(visor)
}

const clickn6 = function(){
    visor = visor + '6'
    mudaVisor(visor)
}

const clickn5 = function(){
    visor = visor + '5'
    mudaVisor(visor)
}

const clickn4 = function(){
    visor = visor + '4'
    mudaVisor(visor)
}

const clickn3 = function(){
    visor = visor + '3'
    mudaVisor(visor)
}

const clickn2 = function(){
    visor = visor + '2'
    mudaVisor(visor)
}

const clickn1 = function(){
    visor = visor + '1'
    mudaVisor(visor)
}

const clickn0 = function(){
    visor = visor + '0'
    mudaVisor(visor)
}

const clickOpDiv = function(){
        
}
const clickOpMult = () => {
    
}

const clickOpSub = () => {
   
}

const clickOpSom = () => {
     
}

const ponto = () => {
    
}

const igual = function () {
   
}

const conta = (num1, num2) => {
   
} 

function modoNoturno() {
    let modoNoturno = document.querySelector('#modoNoturno').checked
    if(modoNoturno){
        document.documentElement.style.setProperty('--cor-bg-header', '#252525');
        document.documentElement.style.setProperty('--cor-bg-main', '#474747');
    }else{
        document.documentElement.style.setProperty('--cor-bg-header', '#f0f0f0');
        document.documentElement.style.setProperty('--cor-bg-main', '#ffffff');
    }
}
modoNoturno()