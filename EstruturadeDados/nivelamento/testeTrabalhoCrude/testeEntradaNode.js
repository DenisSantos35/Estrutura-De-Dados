/*
INSTRUÇÕES:
2. Conteúdo Programático: busca sequencial, busca binária, ordenação com bubble-sort,
selection-sort, recursividade, merge-sort e quick-sort.

RECOMENDAÇÔES:
ESTRUTURA: Construa um software em Javascript para a manipulação de dados
armazenados em uma estrutura de dados heterogênea dinâmica utilizando um Array de
Objetos. O software deve ser capaz de realizar um Cadastro de Alunos de uma Faculdade.
Se preferir, poderá definir um limite máximo de alunos cadastrados.

TELA DE APRESENTAÇÃO DO PROGRAMA:
Entre com uma das opções abaixo:
1. Cadastrar Alunos.
2. Relatório de Alunos em ordem crescente por Nome.
3. Relatório de Alunos em ordem decrescente por RA.
4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.
5. Encerre a execução do programa.
OPÇÃO: _____
Obs: Para os relatórios, todos os campos de cada aluno deverão ser apresentados na tela.
RECOMENDAÇÕES: Inicie imediatamente os trabalhos. Não copie fontes da internet, a
solução é particular e nada igual será encontrado. Faça por partes. Trabalhe um pouco todo
dia, pensando, discutindo, documentando, implementando e testando. Se a divisão de tarefas
for realizada é aconselhável que um implemente e o outro componente do grupo teste. O hiato
entre a visualização da solução e sua confecção será fundamental para a aprendizagem da
lógica e da linguagem. Não desistam devido aos erros que enfrentarão, eles deverão ser um
propulsor para uma melhor aprendizagem.
*/


//==================Menu Opcao e escolha de opção=======================
const prompt = require('prompt-sync');
const input = prompt();


let finalisaPrograma = '';
let cont = 0;

//=========================logo escola=================================
function separador(){
    console.log('=~=~=~==~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=')
    console.log('Bem vindo ao cadastramento da escola fulano de tal.')
    console.log('=~=~=~==~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=')
}

//=========================menu opcoes================================
function menuDeOpcoes(){
    console.log('Digite a opção desejada \n [1] Cadastrar usuario \n [2] Relatório de Alunos em ordem crescente por Nome \n [3] Relatório de Alunos em ordem decrescente por RA \n [4] Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados \n [5] Encerre a execução do programa');
}

//=======================Escolha da opcao ==============================
function escolhaOpcao(){
    let opcaoUsuario = input('Opção: ');
    let opcao = Number(opcaoUsuario);
    while(isNaN(opcao) || (opcao <= 0) || (opcao > 5) ){
        console.log('Erro. Opção invalida. Digite uma opcao de 1 a 5');
        opcaoUsuario = ''
        separador()
        menuDeOpcoes()
        opcaoUsuario = input('Opção: ');
        opcao = Number(opcaoUsuario);        
    }        
    return opcao; 
}

//====================opcao selecionada============================
function opcaoSelecionada(numeroOpcao){
    switch(numeroOpcao){
        case 0:
            break;
        case 1:
            let pessoaCadastrada = cadastro(cont);
            return pessoaCadastrada;
    }

}

//---------------------Cadastramento Alunos -------------------------
/*DADOS: Os dados/campos a serem armazenados sobre os alunos são: NOME; RA; IDADE;
SEXO; MÉDIA e RESULTADO (Aprovado/Reprovado).*/
let nome, ra, idade, sexo, media, resultado;
let nomes = []
function cadastro(){ 
    
    do{  
        tratamentoNome();
        tratamenoRa();
        tratamentoIdade(); 
        tratamentoSexo();
        tratamentoMedia(); 
        tratamentoStatus(media); 
        nomes.push({'nome': nome, 'ra': ra, 'idade': idade, 'sexo': sexo, 'media': media, 'resultado': resultado});
        console.log(nomes);    
        //cont = cont + 1;   
    }while(opcaoUsuario()) 
    return nomes;            
}
//=======================tratando nomes=============================
function tratamentoNome(){
    nome = input('Digite o nome').toUpperCase().trim()
    let novaPalavra = nome.match(/[A-z]/g);
    if(novaPalavra === null){
        console.log('Erro...')
        tratamentoNome()
    }else if(nome === nome[0].repeat(nome.length)){1
        console.log('Erro...');
        tratamentoNome();

    }else{
        nova = novaPalavra.join('');
        if(nova === nome){
            console.log(nome)
            return nome;            
        }else if(nova !== nome){
            console.log('Erro...')
            tratamentoNome();
        }
    }
}
//=================tratamento de idade ===========================
function tratamentoIdade(){
    idade = input('Digite a Idade do Aluno entre [7/100]: ')
    idade = parseInt(idade);
    while(isNaN(idade) || (idade < 7) || (idade > 100)){
        console.log('[ERRO]. Idade invalida! Para validar digite uma idade entre 7 e 100');
        idade = parseInt(input('Digite a Idade do Aluno: '));
    }
    return idade;
}
//=================tratamento sexo ==================================
function tratamentoSexo(){
    sexo = input('Digite qual sexo do aluno: [M/F]').toUpperCase().trim();
    while(sexo != 'M' && sexo != 'F'){
        console.log('[ERRO]. Sexo invalidp! Para validar digite um o sexo [M] ou [F]');
        sexo = input('Digite qual sexo do aluno: [M/F]').toUpperCase().trim();
    }


}
//=====================tratando Média=============================

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

//=====================trtamento status aluno =======================
function tratamentoStatus(media){
    resultado=" "
    if(media > 6 ){
        resultado = 'Aprovado';
    }else{
        resultado = 'Reprovado'
    }
    return resultado;
}


// ============Mensagem se Deseja cadastrar mais alunos===========
function opcaoUsuario(){
    usuario = input('Deseja Cadastrar outro Aluno? [S/N] ou [s/n]').toUpperCase().trim()
    if(usuario === 'S'){
        usuario = ''
        return true;
    }
    usuario = ''
    return false;
}


//=====================sair do programa =========================
function sairPrograma(encerrar){
    encerrar = input('Deseja Sair do Programa').toUpperCase()    
    if(encerrar === 'S'){
        return false;        
    }else{
        return true;        
    }  
}

//==================Estrutura Principal=================================

let sair;

do{
    sair = false;
    separador(); //1 chama o seoaparador
    menuDeOpcoes();
    let opEscolhida = escolhaOpcao();

    console.log('cheguei aqui',opcaoSelecionada(opEscolhida));

}while(sairPrograma(sair));
console.log('fim do programa')



