import Stack from './lib/Stack.mjs';

let frase= 'Socorram-me, subi no ônibus em Marrocos'

let palindromo = new Stack()

for(let i=0; i<frase.length; i++){
    palindromo.push(frase.charAt(i))
}

console.log(palindromo.print())

let fraseInversa = ''

while(! palindromo.isEmpty){
    fraseInversa += palindromo.pop()
}

console.log(fraseInversa)