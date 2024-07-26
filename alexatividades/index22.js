// Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

function NomesSeparar (){
  const NomeCompleto = prompt ( "Digite seu nome completo: ")
const nomes = NomeCompleto.split(' ')
  const PrimeiroNome = nomes[0]
  const UltimoNome = nomes[nomes.length - 1];
  console.log ("priemiro nome:"  ,  PrimeiroNome);
  console.log ("ultimo nome:"  ,  UltimoNome);
}
NomesSeparar();


