import {objNomes} from '../EstruturadeDados/data/vetor-obj-nomes.mjs'

const input = document.querySelector('#nome');
const btn = document.querySelector('#botao');
const res = document.querySelector('#resultado');

function buscaSequencial(array,fncomp){
    let tamanhoArray = array.length
    for(let i = 0; i <= tamanhoArray; i++){
        if(fncomp(array[i])) return i;
    }
}

function comparar(obj){
    return obj.first_name === input.value.toUpperCase();
}
function limpeza(){
    input.value = ''
    input.focus()
}

btn.addEventListener('click', (e) => {    
    let resposta = buscaSequencial(objNomes,comparar);
    res.innerHTML = `O nome ${input.value} esta na posição ${resposta} `
    limpeza()
   
})

document.addEventListener('keypress', (e)=>{
    if(e.key==="Enter"){
        let resposta = buscaSequencial(objNomes,comparar);
        res.innerHTML = `O nome ${input.value} esta na posição ${resposta} `
        limpeza()
    }
    

})


