const prompt = require('prompt-sync')
const input = prompt();

function tratamentoMedia(){
    media = input('Digite a média do Aluno entre [0 a 10]:')
    media = media.split(',')
    if(media.length > 0){
        media = media.join('.')
    }else{
        media.join('')
    }

    
    media = parseFloat(media);
    while(isNaN(media) || (media < 0) || (media > 10)){
        console.log('[ERRO]. Média invalida! Para validar digite uma média entre 0 e 10');
        media = input('Digite a Idade do Aluno: ');
    }
    return media;
}

tratamentoMedia();




    
