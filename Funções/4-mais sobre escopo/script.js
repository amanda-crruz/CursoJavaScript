//atualmente com let e const, qualquer bloco de código pode separar seu escopo ex if
//um bloco forma outro escopo fora o escopo global

let x = 10

if(x > 5){
    let x = 20;
    x++;
    console.log(x);
}

console.log(x)