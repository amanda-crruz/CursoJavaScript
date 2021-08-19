let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a > 10) {

        let a = 0;

        a++;

        console.log(a);
    }

    console.log(a);
}

console.log(a);

multiplicar(3,7);

//resulatado 10 - 1 - 21
// o resultado 10 é referente ao primeiro let a = 10
// resultado 1 é referente ao resultado de a = 3 * 7; a passa a valer 21 em seguinte a é declarada como o somanda o a++ a passa a valer 1
// o resultado 21 é referente ao resultado a = x * y;