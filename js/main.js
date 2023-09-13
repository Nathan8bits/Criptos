/*
funcoes:
    intToChar;  --limite de 6 caracteres
    charToInt;  --converte oq ta no input charMen e nao oq esta no numberMen
*/

let cxCharMen = document.querySelector('#charMensagem')
let cxNumberMen = document.querySelector('#numberMensagem')
let cxConverter = document.querySelector('#converterMensagem')
let cxTitulo =document.querySelector('#titulo')

let btnEnviar = document.querySelector('#btnEnviar')
let btnVerificar = document.querySelector('#btnVerificar')
let btnConverter = document.querySelector('#btnConverter')

btnEnviar.addEventListener('click', charToInt)
btnVerificar.addEventListener('click', verificar)
btnConverter.addEventListener('click', intToChar)

let numero = new Array(6)//array q recebera a convecao
function charToInt () {
    let charMen = cxCharMen.value//mensagem tipo char
    
    for (let i=0; i < 6; i++) {
        numero[i] = 32//adicionando um espaco em todas as posicoes 
    }

    for (let i=0; i < charMen.length; i++) {
        numero[i] = charMen[i].charCodeAt(0)//efetuando a conversao
    }
    cxNumberMen.value = numero

    return numero    
}

function intToChar () {
    let letra = []
    let num = new Array(6)
    num = charToInt()
    cxConverter.value = num[0]

    //array.push(String.fromCharCode(i))
    //letra.push(String.fromCharCode(num[i]))

    for (let i=0; i < 6; i++) {
        letra.push(String.fromCharCode(num[i]))//conversão de int para char
    }
    cxConverter.value = letra
}

function verificar () {
    cxTitulo.innerHTML = cxConverter.value
}