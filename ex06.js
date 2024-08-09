

// Escreva um programa em JavaScript que utilize a biblioteca mathjs para calcular o logaritmo de um número fornecido pelo usuário.


function CalcularLogaritmo(base, numero){
    return Math.log(numero)/ Math.log(base);
}

const numero = parseFloat(prompt('Digite um numero:'));
const base = parseFloat(prompt('Digite a base o logaritmo:'));
const resultado = CalcularLogaritmo(base,numero);

console.log(`O logaritmo de ${numero}na base ${base} é ${resultado}`);

