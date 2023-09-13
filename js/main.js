/*
funcoes:
    intToChar;  --limite de 6 caracteres
    charToInt;
*/

let cxCharMen = document.querySelector('#charMensagem')
let cxNumberMen = document.querySelector('#numberMensagem')
let cxConverter = document.querySelector('#converterMensagem')
let cxTitulo =document.querySelector('#titulo')

let btnEnviar = document.querySelector('#btnEnviar')
let btnConverter = document.querySelector('#btnConverter')

btnEnviar.addEventListener('click', function () {
    cxNumberMen.value = charToInt(cxCharMen.value)
})
btnConverter.addEventListener('click', function () {
    cxConverter.value = intToChar(cxNumberMen.value)
})

function intToChar (numberMen) {
    //let numberMen = cxNumberMen.value
    let numero = [0, 0, 0, 0, 0, 0]
    let mult = 1
    let col = 5
    
    for(let cont = numberMen.length - 1; cont >= 0; cont--) {
        if(numberMen[cont] == ',') {
            mult = 1
            col--
        } else {
            numero[col] += parseInt(numberMen[cont])*mult//com esse valor q sera instanciado o objeto
            mult *=10
        }
    }

    let letra = []
    for (let i=0; i < 6; i++) {
        letra.push(String.fromCharCode(numero[i]))//conversão de int para char
    }
   
    return letra
}

function charToInt (charMen) {
    //let charMen =  new Array(6)
    let numero = new Array(6)
    //charMen = cxCharMen.value//mensagem tipo char
    
    for (let i=0; i < 6; i++) {
        numero[i] = 32//adicionando um espaco em todas as posicoes 
    }

    for (let i=0; i < charMen.length; i++) {
        numero[i] = charMen[i].charCodeAt(0)//efetuando a conversao
    }

    return numero//com esse valor q sera instanciado o objeto
}