// faça uma estrutura if/else para verificar se um usuários pode dirigit
//armazene em variáveis algumas informações sobre idade, usuário e se tem cnh
//se a idade for maior que 18 e tem cnh, exiba a mensage
//se não tiver 18 nem cnh exiba outra mensag

let idade = 19;
let cnh = true;

if(idade >= 21 && cnh == true){
    console.log("Pode dirigir");
}   else if(idade >= 19 && cnh == false){
    console.log("não pode dirigir");
}   else {
    console.log("não pode dirigir");
}

//o resultado deu não pode dirigir, porque para ser true são necessárias duas condições serem
//verdadeiras