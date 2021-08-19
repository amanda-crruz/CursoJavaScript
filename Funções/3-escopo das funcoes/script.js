//Tudo que está fora das funções é o escopo global

let x = 15;

function imprimir() {
    let x = 25

    console.log(x);
    
}
imprimir();

console.log(x);