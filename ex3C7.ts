//Crie um objeto livro com as propriedades titulo, autor e anoPublicacao. Imprima o título e o autor do livro.

type Livro = {
    titulo: string;
    autor: string;
    anodePublicaçao:Number;
}

const livro : Livro = { 
    titulo: "Broken Souls",
    autor: "Lya Almeida",
    anodePublicaçao:2023,
}

console.log (`Titulo: ${livro.titulo}`);
console.log(`Autor:${livro.autor}`);

