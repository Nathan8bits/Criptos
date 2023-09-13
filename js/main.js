let cxMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#btnEnviar')
let cxSaida = document.querySelector('#saida')

//let mensagem = cxMensagem.value


//let numberMesagem = new Array(6)//linhas
//numberMesagem[0] = new Array(3)//colunas
//numberMesagem[1] = new Array(3)
/*
let cont = 0
for (let lin=0; lin<2; lin++) {

        numberMesagem[lin][cont%3] = mensagem[cont]
        cont++
        
}
*/
//let numberMesagem = cxMensagem.value


btnEnviar.addEventListener('click', segundaletra)

function segundaletra() {
    //let mensagem = cxMensagem.value
    let m = new Array(6)
    m = cxMensagem.value
    //cxSaida.innerHTML = m

    let matriz = new Array(2)
    matriz[0] = new Array(4)
    matriz[1] = new Array(4)

   // matriz[0] = m
   // matriz[1] = m
    //matriz[1][1] = m[0]

    //cxSaida.innerHTML = matriz

    for (let i=0; i < 8; i++) {
        //letra = m[i]
       // numero = letra.charCodeAt(0)
        if(i <= 3) { 
                matriz[0][i] = m[i]
        }
        else if(i > 3) {
                matriz[1][i%4] = m[i]
        }
        cxSaida.innerHTML = matriz
        
    }

    
    

    /* converte de char para int
    let letra = document.querySelector('#mensagem').value
    let numero = letra.charCodeAt(0) 
    cxSaida.innerHTML = numero
    */
    
    /*
    let numbermatriz = new Array(2)
    numbermatriz[0] = new Array(4)
    numbermatriz[1] = new Array(4)

    for (let lin = 0; lin < 2; lin++) {
        for (let col = 0; col < 4; col++) {
                let letra = matriz[lin][col]
                let numero = letra.charCodeAt(0)
                numbermatriz[lin][col] = numero
        }
    }*/
    //cxSaida.innerHTML = numbermatriz

    /*
    let m= new Array(6)
    m[0] = 'o'
    m[1] = 'a'
    m = mensagem
    */

   //document.write(numberMesagem[0][0])
    //cxSaida.innerHTML = numberMesagem[0]
   
    //cxSaida.innerHTML = numberMensagem

   //cxSaida.innerHTML = mensagem[1]

}