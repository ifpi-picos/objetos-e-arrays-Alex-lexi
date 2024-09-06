//Crie um objeto para representar um aluno, incluindo propriedades como nome, idade, curso e notas. Popule o objeto com valores e imprima os dados do aluno.


type Aluno = {
    nome: string;
    idade: Number;
    curso: string;
    notas:Number [];
}

const aluno : Aluno = {
    nome: " alexia ",
    idade : 20,
    curso : "ADS",
    notas : [7,6,9,4,7],
}

function ImprimirDadosAluno (aluno: Aluno) {
console.log (`Nome:${ aluno.nome}`)
console.log(`Idade:${aluno.idade}`)
console.log(`Curso:${aluno.curso}`)
console.log(`Notas:${aluno.notas.join(", ")}`) // transforma o array de números em uma unica string onde cada elemento é separado por virgula e um espaço 
}

ImprimirDadosAluno(aluno);

