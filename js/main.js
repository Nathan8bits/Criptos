/*
funcoes:
    Crito;  --mensagens com numero PAR de caracteres(multiplicaMatriz)
    Descripto;  --limite de 6 caracteres
    multiplicaMatriz;   --arrayscom numero de posicoes PAR
    multiplicaMatriz;   --arredondar valores para o inteiro mais proximo
    intToChar;  --limite de 6 caracteres
    matrizInversa;
*/

//chave A
let a = document.querySelector('#a00')
let b = document.querySelector('#b01')
let c = document.querySelector('#c10')
let d = document.querySelector('#d11')

//chave B
let e = document.querySelector('#e00')
let f = document.querySelector('#f01')
let g = document.querySelector('#g10')
let h = document.querySelector('#h11')

//input
let cxCharMen1 = document.querySelector('#charMensagem1')
let cxNumberMen1 = document.querySelector('#numberMensagem1')
let cxCriptoMen1 = document.querySelector('#criptoMen1')

let cxCriptoMen2 = document.querySelector('#criptoMen2')
let cxNumberMen2 = document.querySelector('#numberMensagem2')
let cxDescriptoMen = document.querySelector('#descriptoMen')

let cxNumberMen3 = document.querySelector('#numberMensagem3')
let cxCharMen2 = document.querySelector('#charMensagem2')
let cxConverter = document.querySelector('#converterMensagem')

//botoes
let btnChaveInversa1 = document.querySelector('#btnChaveInversa1')
let btnChaveInversa2 = document.querySelector('#btnChaveInversa2')
let btnEnviar = document.querySelector('#btnEnviar')
let btnConverter = document.querySelector('#btnConverter')
let btnCripto = document.querySelector('#btnCripto')
let btnDescripto = document.querySelector('#btnDescripto')

btnDescripto.addEventListener('click', function () {
    let chaveB = [e.value, f.value, g.value, h.value]
    let criptoMen = intToInt(cxCriptoMen2.value)
    cxNumberMen2.value = multiplicaMatrizes(chaveB, criptoMen)//arredondar os valores
    cxDescriptoMen.value = intToChar(cxNumberMen2.value)
})

btnCripto.addEventListener( 'click', function () {
    let chaveA = [a.value, b.value, c.value, d.value]
    let charMen = charToInt(cxCharMen1.value)
    cxNumberMen1.value = charToInt(cxCharMen1.value)
    cxCriptoMen1.value = multiplicaMatrizes(chaveA, charMen)
})

btnChaveInversa1.addEventListener('click', function () {
    let chaveA = [a.value, b.value, c.value, d.value]
    let chaveB = chaveInversa(chaveA)
    
    e.value = chaveB[0]
    f.value = chaveB[1]
    g.value = chaveB[2]
    h.value = chaveB[3]
})

btnChaveInversa2.addEventListener('click', function () {
    let chaveB = [e.value, f.value, g.value, h.value]
    let chaveA = chaveInversa(chaveB)  
    
    a.value = chaveA[0]
    b.value = chaveA[1]
    c.value = chaveA[2]
    d.value = chaveA[3]  
})

btnEnviar.addEventListener('click', function () {
    cxNumberMen3.value = charToInt(cxCharMen2.value)
})
btnConverter.addEventListener('click', function () {
    cxConverter.value = intToChar(cxNumberMen3.value)
})

//mensagem * chave = (des)cripto
function multiplicaMatrizes(arrayA, arrayB) {
    let chaveA = arrayToMatriz(arrayA)
    let chaveB = arrayToMatriz(arrayB)
    let mensagem = new Array(2)
    mensagem[0] = new Array(arrayB.length/2)
    mensagem[1] = new Array(arrayB.length/2)

    for ( let i=0; i < 2; i ++)//laco duplo para percorrer a matriz produto
	{
        for (let j=0; j < arrayB.length/2; j++)
		{
            mensagem[i][j] = 0	
		}	
	}//fim dos lacos for

    for ( let i=0; i < 2; i ++)//laco duplo para percorrer a matriz produto
	{
        for (let j=0; j < Math.round(arrayB.length/2); j++)
		{
            for(let n= 0; n < 2; n++ )//laco para percorrer os elementos da coluna de A e os da coluna de B
			{
                mensagem[i][j] += chaveA[i][n] * chaveB[n][j];//somando os produtos dos elementos das matrizes A e B aos elementos correspondentes de c
			}
		}	
	}//fim dos lacos for
    
    return mensagem
}

function arrayToMatriz (array) {
    let matriz = new Array(2)
    matriz[0] = new Array(array.length/2)
    matriz[1] = new Array(array.length/2)

    for(let i=0; i<array.length/2 ; i++) {
        matriz[0][i] = array[i]
    }
    for(let i=0; i<array.length/2 ; i++) {
        matriz[1][i] = array[array.length/2 + i]
    }

    return matriz
}

function chaveInversa(chaveA) {
    let chaveB = [0, 0, 0, 0]

    chaveB[0] = -chaveA[3]/(-chaveA[0]*chaveA[3] + chaveA[1]*chaveA[2])
    chaveB[1] = -chaveA[1]/(-chaveA[2]*chaveA[1] + chaveA[3]*chaveA[0])
    chaveB[2] = chaveA[2]/(-chaveA[0]*chaveA[3] + chaveA[1]*chaveA[2])
    chaveB[3] = chaveA[0]/(-chaveA[2]*chaveA[1] + chaveA[3]*chaveA[0])

    let ident = multiplicaMatrizes(chaveA, chaveB)
    
    if(ident[0][0] !=1 && ident[0][1] != 0 && ident[1][0] !=0 && ident[1][1] != 1) 
    {
        alert('essa chave é invalida')
    }

    return chaveB
}

function intToChar (numberMen) {
    let numero = [0, 0, 0, 0, 0, 0]
    let letra = []
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

    for (let i=0; i < 6; i++) {
        letra.push(String.fromCharCode(numero[i]))//conversão de int para char
    }
   
    return letra
}

function intToInt (numberMen) {
    let numero = []
    let mult = 1
    let col = 0//tamanho de numberMen contando ','

    for(let i=0; i<numberMen.length; i++){
        if(numberMen[i] == ',') {
            col++
        }
    }

    for(let i =0; i <= col; i++) {
        numero[i] = 0
    }   
    
    for(let cont = numberMen.length - 1; cont >= 0; cont--) {
        
        if(numberMen[cont] == ',') {
            mult = 1
            col--
        } else {
            numero[col] += parseInt(numberMen[cont])*mult//com esse valor q sera instanciado o objeto
            mult *=10
        }
    }
    
    return numero
}

function charToInt (charMen) {
    let numero = new Array(charMen.length)
    
    for (let i=0; i < charMen.length; i++) {
        numero[i] = 32//adicionando um espaco em todas as posicoes 
    }

    for (let i=0; i < charMen.length; i++) {
        numero[i] = charMen[i].charCodeAt(0)//efetuando a conversao
    }

return numero//com esse valor q sera instanciado o objeto
}