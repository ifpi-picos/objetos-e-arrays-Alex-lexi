//Usando CommonJS, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) e exponenciação.  Em seguida, utilize essas funções em outro arquivo.

function soma(a, b) {
        return a + b; 
    }
function subtracao(a, b){
        return a - b; 
}
function multiplicacao(a, b){
        return a * b;
}
function divisao(a ,b) {
        return a / b;
}
function exponenciacao ( a, b){
        return a ** b;
}
module.exports = {soma, subtracao, multiplicacao, divisao, exponenciacao };
