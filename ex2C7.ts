//Crie um objeto carro com as propriedades marca, modelo e ano. Em seguida, imprima a marca do carro.

// Definição do tipo do carro 
type Carro = {
    marca: string ;
    modelo: string
    ano: Number;
}

// criação e um objeto constante chamado carro, e especiicando que ele segue o modelo Carro especificado anteriormente.


 const carro : Carro = {
    marca: "Ford",
    modelo: "SUV",
    ano:2024,
 }

 console.log (`Marca do carro:${carro.marca}`);



