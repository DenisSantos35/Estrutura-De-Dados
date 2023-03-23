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
1. Cadastrar Alunos. ok
2. Relatório de Alunos em ordem crescente por Nome. ok
3. Relatório de Alunos em ordem decrescente por RA.ok
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
//############################importacao de biblioteca##################################
const prompt = require('prompt-sync');
const input = prompt();

let msg = ''
//#########################Menu Opcao e escolha de opção################################
//=========================logo escola=================================
function separador(msg){
    console.log('=~=~=~==~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=')
    console.log(`             ${msg}                                `)
    console.log('=~=~=~==~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=')
}


function separadorEnd(){
    console.log('=~=~=~==~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=')    
}
function separadorRelatorio(){
    console.log('************************')
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
        separador(msg='FICHA DE CADASTRO DE ALUNOS');
        menuDeOpcoes() ;      
        opcaoUsuario = input('Opção: ');        
        opcao = Number(opcaoUsuario);  
        separadorEnd();     ; 
    }        
    return opcao; 
}

//====================opcao selecionada============================
let pessoaCadastrada;
function opcaoSelecionada(numeroOpcao){
    let pessoas;
    switch(numeroOpcao){
        case 0:
        case 1:
            separador(msg='CADASTRAR ALUNO');
             pessoaCadastrada = cadastro();
            return pessoaCadastrada;
        case 2:
            separador(msg='RELATORIO NOMES ORDEM CRESCENTE');            
            pessoas = relatorio(pessoaCadastrada, (obj1,obj2)=> {return obj1.nome > obj2.nome})
            mensagemRelatorio(pessoas)
            return
        case 3:
            separador(msg='RELATORIO RA ORDEM DECRESCENTE');
            pessoas = relatorio(pessoaCadastrada, (obj1,obj2) =>{return obj1.ra < obj2.ra})
            mensagemRelatorio(pessoas);            
            return
        case 4:
            separador(msg='RELATORIO ALUNOS APROVADOS');
            if(pessoaCadastrada === undefined){
                console.log('Não há alunos cadastrado. Por favor cadastre alunos para gerar o relatorio.')
                return; 
            }else{
                pessoas = filtroAprovados(relatorio(pessoaCadastrada, (obj1,obj2)=> {return obj1.nome > obj2.nome}));
                mensagemRelatorio(pessoas)
                return;
            }
        case 5:
            sair = sairPrograma(sair) 
            return;
            
    }
}
//##############################Fim menu de opçoes#####################################
//##############################mensagem relatorio#####################################
function mensagemRelatorio(pessoas){
    for(let i=0; i<pessoas.length;i++){
        console.log(`NOME: ${pessoas[i].nome}`);
        console.log(`RA: ${pessoas[i].ra}`);
        console.log(`IDADE: ${pessoas[i].idade}`);
        console.log(`SEXO: ${pessoas[i].sexo}`);
        console.log(`MEDIA: ${pessoas[i].media}`);
        console.log(`RESULTADO: ${pessoas[i].resultado}`);
        separadorRelatorio()
    }
}

//###########################[1]Cadastramento Alunos ######################################
/*DADOS: Os dados/campos a serem armazenados sobre os alunos são: NOME; RA; IDADE;
SEXO; MÉDIA e RESULTADO (Aprovado/Reprovado).*/

//=====================Programa principal do cadastramento============================
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
        //cont = cont + 1;   
    }while(opcaoUsuario()) 
    return nomes;            
}
//=======================tratando nomes=============================
function tratamentoNome(){
    nome = input('Digite o nome do aluno: ').toUpperCase().trim()
    let novaPalavra = nome.match(/[A-z]/g);
    if(novaPalavra === null){
        console.log('Erro...')
        tratamentoNome()
    }else if(nome === nome[0].repeat(nome.length)){1
        console.log('Erro...');
        tratamentoNome();

    }else{
        console.log(nova)
        nova = novaPalavra.join('');
        if(nova === nome){
            return nome;            
        }else if(nova !== nome){
            console.log('Erro...')
            tratamentoNome();
        }
    }
}

//=====================tratamento ra =============================
let contagem = 0;
function condicaoRa(ra){
    const verNum = new RegExp('^[0-9]+$')
    while(ra.length !== 13 || (verNum.test(ra) === false) || (ra[0].repeat(13) === ra)){
        console.log('[Erro]. Numero de ra invalido.');
        ra = input('Digite o numero do seu RA: ');
    }
    ra = parseInt(ra);
    return ra
}
function tratamenoRa(){
    ra = input('Digite o numero do RA do aluno: ')
    ra = condicaoRa(ra);
    if(nomes.length > 0){
        contagem++;
        for(let i = 0; i < nomes.length; i++){
            while(ra === nomes[i].ra){
                console.log('[Erro]. Numero de ra já cadastrado');
                ra = input('Digite o numero do seu RA: ');
                ra = condicaoRa(ra);
                i = 0;
            }            
        }       
    }
    return ra;
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
function tratamento(media){
    media = media.split(',');
    if(media.length > 0){
        media = media.join('.');
    }else{
        media.join('');
    }
    media = parseFloat(media);
    return media
}

function tratamentoMedia(){
    media = input('Digite a média do Aluno entre [0 a 10]:');
    media = tratamento(media);

    while(isNaN(media) || (media < 0) || (media > 10)){
        console.log('[ERRO]. Média invalida! Para validar digite uma média entre 0 e 10');
        media = input('Digite a média do Aluno: ');
        media = tratamento(media);
    }
    return media;
}

//=====================tratamento status aluno =======================
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
    while(usuario !=='S' && usuario!=='N'){
        console.log('[ERRO]...digite [S] para Sim ou [N] para Não')
        usuario = input('Deseja Cadastrar outro Aluno? [S/N] ou [s/n]').toUpperCase().trim()
    }
    if(usuario === 'S'){
        usuario = ''
        separadorEnd()
        return true;
    }
    usuario = ''
    separadorEnd()
    // return sair = false;
}

//##############################Fim do cadastramento#####################################

//######################[2] Relatório de Alunos em ordem crescente por Nome###############
//######################[3] Relatório de Alunos em ordem crescente por Nome###############
function relatorio(array,funOrd){
    // [ 1, 2 ,3 4, 5, 6, 7, 8]
    if(array === undefined){
        return 'Não há alunos cadastrado. Por favor cadastre alunos para gerar o relatorio.'
    }else{
        for(let ini = 0; ini < array.length - 1; ini++){
            let menor = ini + 1;
            for(let i = menor + 1; i < array.length; i++){
                if(funOrd(array[menor],array[i])){
                    menor = i;
                }
            }
            if(funOrd(array[ini],array[menor])){
                [array[ini],array[menor]] = [array[menor], array[ini]]
            }
        }
        return pessoaCadastrada 
    }
       
}
//#######################[4] Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados#########

function filtroAprovados(array){  
    let novoArray = [];  
    for(let i = 0; i < array.length; i++){
        if(array[i].resultado === 'Aprovado'){
            novoArray.push(array[i])
        }
    }
    return novoArray
    

}


//###############################sair do programa #######################################
function sairPrograma(encerrar){
    encerrar = input('Deseja Sair do Programa').toUpperCase()    
    if(encerrar === 'S'){
        return false;        
    }else{
        return true;        
    }  
}
//################################Fim Sair do programa ###################################

//#################################Estrutura Principal###################################

let sair;

do{
    sair = true;
    separador(msg='FICHA DE CADASTRO DE ALUNOS'); //1 chama o seoaparador
    menuDeOpcoes();
    let opEscolhida = escolhaOpcao();
    separadorEnd()
    opcaoSelecionada(opEscolhida);
    //console.log('acesso pessoas cadstradas', pessoaCadastrada)    

}while(sair === true);
console.log('fim do programa')



