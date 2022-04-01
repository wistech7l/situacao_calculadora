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
    valor1 = null
    valor2 = null
    usePonto = false
    resultado = 0
    operacao = ''     
    visor=''
    mudaVisor(0)
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
    operacao = 'divisao'
    if(valor1 == null){
        let numero = parseFloat(visor)
        valor1 = numero
        visor = ''
    }     
}
const clickOpMult = () => {
    operacao = 'multiplicacao'
    if(valor1 == null){
        let numero = parseFloat(visor)
        valor1 = numero
        visor = ''
    } 
}

const clickOpSub = () => {
    operacao = 'subtracao'
    if(valor1 == null){
        let numero = parseFloat(visor)
        valor1 = numero
        visor = ''
    } 
}

const clickOpSom = () => {
    operacao = 'soma'
    if(valor1 == null){
        let numero = parseFloat(visor)
        valor1 = numero
        visor = ''
    }    
}

const ponto = () => {
    if(!usePonto){
        visor = visor + '.'    
    }
    usePonto = true
}

const igual = function () {
    if(valor2 === null && visor !== ''){
        let numero = parseFloat(visor)
        valor2 = numero
    } else if (valor2 !== null && visor !== '') {
        let numero = parseFloat(visor)
        valor2 = numero
    }
    resultado = conta(valor1,valor2)
}

const conta = (num1, num2) => {
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2
            break;
        case 'subtracao':
            resultado = num1 - num2
            break;
        case 'multiplicacao':
            resultado = num1  * num2
            break;
        case 'divisao':
            if(num2 === 0){
                resultado = 'E'
            } else {
                resultado = num1 / num2
            }
            break;
    }
    valor1 = resultado
    visor = ''
    mudaVisor(resultado)
} 

const modoNoturno = () => {
    // https://code.tutsplus.com/pt/tutorials/css-custom-properties-variables--cms-26216
    let modoNoturno = document.querySelector('#modoNoturno').checked
    console.log(modoNoturno)
    if(modoNoturno){
        document.documentElement.style.setProperty('--cor-bg-header', '#252525');
        document.documentElement.style.setProperty('--cor-bg-main', '#474747');
        // --cor-bg-header:#f0f0f0 ; /* #252525 */
       // --cor-bg-main: #ffffff; /*# 474747*/
    }else{
        document.documentElement.style.setProperty('--cor-bg-header', '#f0f0f0');
        document.documentElement.style.setProperty('--cor-bg-main', '#ffffff');
    }
}