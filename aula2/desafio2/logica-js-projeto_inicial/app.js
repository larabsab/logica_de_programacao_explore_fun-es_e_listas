// 1.Criar uma função que exibe "Olá, mundo!" no console.
function frase (){
    console.log('Olá mundo!');
}

frase();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function recebeNome(nome){
    console.log(`Olá, ${nome}!`);
}

let nome = prompt('Digite um nome');

recebeNome(nome);

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobro(numero){
    let numeroDobro = numero * 2;
    console.log(`O número recebido é ${numeroDobro}`);
}

let numeroRecebido = prompt('Digite um número');

numeroDobro(numeroRecebido);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculoMedia (numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

let numero1 = parseInt(prompt('Digite o primeiro número'));
let numero2 = parseInt(prompt('Digite o segundo número'));
let numero3 = parseInt(prompt('Digite o terceiro número'));

let media = calculoMedia(numero1, numero2, numero3);
console.log(`A media do número ${numero1}, ${numero2} e ${numero3} é ${media}`);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero (num1, num2){
    if (num1>num2){
        return num1;
    } else {
        return num2;
    }
}

let num1 = parseInt(prompt('Digite um número'));
let num2 = parseInt(prompt('Digite um segundo número'));
let resultadoMaiorNumero = maiorNumero(num1, num2);
console.log (`O maior número entre ${num1} e ${num2} é o ${resultadoMaiorNumero}`);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function aoQuadrado (num){
    return num * num;
}

let num = parseInt(prompt('Escolha um número para ser multiplicado por ele mesmo'));
let resultadoAoQuadrado = aoQuadrado(num);
console.log(`O resultado ao quadrado do número ${num} é de ${resultadoAoQuadrado}`);