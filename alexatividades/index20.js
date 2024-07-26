// Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

const pessoas = [
  {nome : 'Ana', idade: 17},
  {nome : 'Maria', idade: 25},
  {nome : 'João', idade: 15},
  {nome : 'Pedro', idade: 20},]
const pessoaMaiorIdade = pessoas.find(pessoa => pessoa.idade > 18);
console.log(pessoaMaiorIdade);
