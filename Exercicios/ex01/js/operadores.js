let num1 = document.querySelector('.number1');
let num2 = document.querySelector('.number2');
const btn = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');
const select = document.querySelector('#operator');

function validacao(){
   if(num1.value === ""){
        alert('Digite o primeiro numero')
        num1.value = "";
        num1.focus();
        return false;
   }
   if(num2.value === ""){
    alert('Digite o segundo numero')
    num2.value = "";
    num2.focus();
    return false;
}
if(select.selectedIndex == 0){
    alert('Selecione um operador');
    return false;
}
    
    return true;
}

function calculadora(){
    if(validacao()){
        num1 = Number(num1.value)
        num2 = Number(num2.value)
        if(select.selectedIndex === 1 ){
            resultado.innerHTML = soma(num1, num2);            

        };
        if(select.selectedIndex === 2){
            resultado.innerHTML = subtracao(num1, num2);
        }
        if(select.selectedIndex === 3 ){
            resultado.innerHTML = multiplicacao(num1, num2);
        };
        if(select.selectedIndex === 2){
            if(num2.value !== 0){
                resultado.innerHTML = divisao(num1, num2);
            }else{
                const msg = "impossivel dividir um numero por 0."
                resultado.innerHTML = msg;
            }
        }
        num1.value = ""
        num2.value = ""
       
    }
    
}

function soma(x,y) { return x + y}
function subtracao(x, y) {return x - y}
function divisao(x, y){ return x / y}
function multiplicacao(x, y){return x * y}



btn.addEventListener('click', calculadora);
