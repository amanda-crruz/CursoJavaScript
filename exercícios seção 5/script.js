//verifique se o número é primo
//um número primo, é um númeral natural, maior que 1 e apenas
//divisível por si próprio e por 1

let num = 41;
let divisores = 0;

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        divisores++
    }
}

if(divisores == 2) {
    console.log(`O número ${num} é primo`);
}else {
    console.log(`O número não é primo`);
}



