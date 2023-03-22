const prompt = require('prompt-sync')
const input = prompt();

let ra;
function tratamenoRa(){
    let contador,raValido,raInvalido;
    contador=0, raValido=0, raInvalido=0;
    ra = input('Digite o numero do RA do aluno: ')
    const verNum = new RegExp('^[0-9]+$')    
    while(ra.length !== 13 || (verNum.test(ra) === false) || (ra[0].repeat(13) === ra)){
        console.log('[Erro]. Numero de ra invalido.');
        ra = input('Digite o numero do seu RA: ');
    }
    ra = parseInt(ra);
    return ra;
}

tratamenoRa()
console.log(ra)



    
