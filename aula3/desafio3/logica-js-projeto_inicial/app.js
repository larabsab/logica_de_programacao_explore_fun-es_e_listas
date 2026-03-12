function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}



// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso){
    let imc = peso/(altura*altura);
    return imc;
}

function executarIMC() {
    let altura = prompt('Digite sua altura em m (ex: 1.75):');
    let peso = prompt('Digite seu peso em kg:');
    let meuIMC = imc(parseFloat(altura), parseFloat(peso));
    exibirTextoNaTela('resultado', `Seu IMC é: ${meuIMC.toFixed(2)}`);
}



// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }
    let fatorial = 1;
    for (let i = numero; i > 1; i--){
        fatorial *= i;
    }
    return fatorial;
}

function executarFatorial(){
    let numero = prompt('Informe um número para ser fatorado');
    if (numero !== null && numero !== ""){
        let fatorialResultado = fatorial(numero);
        exibirTextoNaTela('resultado', `O resultado do fatorial de ${numero} é igual a <br> <strong>${fatorialResultado}<strong>`);
    }
}



// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor 
// equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarParaReal(dolar){
    let real = dolar * 4.80;
    return real;
}

function executarDolarParaReal(){
    let valorDolar = prompt('Informe o valor do dólar que deseja converter em real: ');
    let valorReal = dolarParaReal(valorDolar);
    exibirTextoNaTela('resultado',`O valor de $${valorDolar} dólares em reais fica R$${valorReal.toFixed(2)}`)
}



// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando 
// altura e largura que serão dadas como parâmetro.
function perimetro(altura, largura){
    let perimetro = (altura * 2) + (largura * 2);
    return perimetro;
}

function executarPerimetro(){
    let alturaRetangulo = prompt('Informe a altura da sala retangular');
    let larguraRetangulo = prompt('Informe a largura da sala retangular');
    let resultadoPerimetro = perimetro(alturaRetangulo, larguraRetangulo);
    exibirTextoNaTela('resultado', `O valor do perímetro de uma sala retangular de ${alturaRetangulo} de altura e ${larguraRetangulo} é de ${resultadoPerimetro.toFixed(2)}`);
}



// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando 
// seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEPerimetro(raio){
    let pi = 3.14;
    let area = pi * (raio ** 2); // (raio ** 2) é ao quadrado 
    let perimetro = pi * 2 * raio;
    return{
        area: area,
        perimetro: perimetro
    };
}

function executarAreaEPerimetro(){
    let raioCirculo = prompt ('Informe o raio da sala circular');
    let resultadoAreaEPerimetro = areaEPerimetro (parseFloat(raioCirculo));
    exibirTextoNaTela ('resultado', `Uma sala circular de um raio de ${raioCirculo} tem um valor de ${resultadoAreaEPerimetro.area.toFixed(2)} de área e de ${resultadoAreaEPerimetro.perimetro.toFixed(2)} de perímetro`); 

}



// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada (numero){
    let tabuadaCompleta = ''; // acumula os resultados

    for (let i = 1; i <=10; i++){
        let resultado  = numero*i;
        tabuadaCompleta += `${numero} x ${i} = ${resultado} <br>`;
    }
        
    exibirTextoNaTela('resultado', tabuadaCompleta);
}

function executarTabuada(){
    let numeroEscolhido = prompt ('De qual número deseja realizar a tabuada');
    exibirTextoNaTela('resultado', )
    tabuada(numeroEscolhido);
}