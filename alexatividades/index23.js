// Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.
function ImprimePrimeiroNome() {
  const NomeCompleto = prompt("Digite seu nome completo: ");
  const nomes = NomeCompleto.split(' ');
  const PrimeiroNome = nomes[0];
  console.log(PrimeiroNome);
}
ImprimePrimeiroNome();
