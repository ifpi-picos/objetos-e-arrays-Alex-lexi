//Declaração das principais variáveis

let filmesParaAssistir = [];
let filmesAssistidos = [];

/* variavel para add os filmes na lista 
O usuário fornece os dados (titulo e ano)
Em seguida os dados fornecidos são combinados em um objeto {titulo,ano} que é add ao array filmes. */

const adicionarFilme = (filmes) => {
    const titulo = prompt("Digite o título do filme:");
    const ano = prompt("Digite o ano de lançamento do filme:");
    filmes.push({ titulo, ano });
    console.log(`Filme '${titulo}' adicionado.`);
};

/*variavel para ordenar os os filmes (titulo e ano) 
*/

const ordenarFilmes = (filmes, criterio) => {
    return filmes.sort((a, b) => {
        if (criterio === "ano") {
            return parseInt(a.ano) - parseInt(b.ano); // Converte strings para números antes de comparar
        } else {
            return a[criterio].localeCompare(b[criterio]); // Usado para comparar strings (título)
        }
    });
};

// Pesquisa os filmes na lista e retorna para o usuário

const pesquisarFilme = (filmes, titulo) => {
    return filmes.find(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
};

// Exibe a lista de filmes para o usuário 

const exibirListas = () => {
    console.log("Para assistir:", filmesParaAssistir);
    console.log("Assistidos:", filmesAssistidos);
};

/*Move um filme da lista de filmes para assistir para a lista de filmes assistidos 
findIndex encontra o índice do filme na lista filmes para assistir 
Splice remove o filme da lista filmes para assistir e add na lista de filmes assistidos*/

const marcarComoAssistido = (titulo) => {
    const index = filmesParaAssistir.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
    if (index !== -1) {
        filmesAssistidos.push(...filmesParaAssistir.splice(index, 1));
        console.log(`Filme '${titulo}' marcado como assistido.`);
    }
};

//Remove um filme da lista de filmes


const removerFilme = (filmes, titulo) => {
    const index = filmes.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
    if (index !== -1) filmes.splice(index, 1);
};

// Main: matem o programama em execução 
//continuar : variável para o loop 
//main no fim // inicia o programa, chama a função principal e ativa o loop de opções 


const main = () => {
    let continuar = true;
    while (continuar) {
        const opcao = prompt("1. Adicionar\n2. Ordenar\n3. Pesquisar\n4. Exibir\n5. Assistido\n6. Remover\n7. Sair");
        switch (opcao) {
            case "1": adicionarFilme(filmesParaAssistir); break;
            case "2": const criterio = prompt("titulo ou ano?"); filmesParaAssistir = ordenarFilmes(filmesParaAssistir, criterio); break;
            case "3": const titulo = prompt("Título do filme:"); console.log(pesquisarFilme(filmesParaAssistir, titulo) || "Não encontrado."); break;
            case "4": exibirListas(); break;
            case "5": const tituloAssistido = prompt("Qual filme você assistiu?"); marcarComoAssistido(tituloAssistido); break;
            case "6": const tituloRemover = prompt("Qual filme remover?"); removerFilme(filmesParaAssistir, tituloRemover); break;
            case "7": continuar = false; break;
            default: console.log("Opção inválida.");
        }
    }
};

main();
