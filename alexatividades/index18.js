//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
  { nome:'Toyota Corolla', ano: 2009},
  { nome:'honda Civic', ano : 2011},
  { nome:'Fusca', ano: 2000},
  { nome:'Fiat Uno', ano: 2013}]
const carrosNovos = carros.filter(carro => carro.ano > 2010);
console.log(carrosNovos);