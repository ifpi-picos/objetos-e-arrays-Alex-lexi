// Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um array. Em seguida, exiba no console os filmes informados.

const filmes = [];

for (let i = 0; i<5; i++) {
  const nomeFilme = prompt("Digite o nome do filme:");
  filmes.push(nomeFilme);
}
console.log("Filmes informados:");
for (const filme of filmes){
  console.log(filme);}