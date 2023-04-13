//1
let number = 100;

while(number < 111){
    console.log(number++);
}

//2

let n1 = 5;
let n2 = 6;
let n3 = 7;

if(n1 > n2 && n1 > n3) {
    console.log(`${n1} é maior`);
}else if(n2 > n1 && n2 > n3){
    console.log(`${n2} é maior`);
}else{
    console.log(`${n3} é maior`);
}

//3

if(n1 < n2 && n1 < n3) {
    console.log(`${n1} é menor`);
}else if(n2 < n1 && n2 < n3){
    console.log(`${n2} é menor`);
}else{
    console.log(`${n3} é menor`);
}

//4
let pessoa = {
    nome: 'Paulo',
    cpf: '167.746.978-34',
    idade: 47,
    dataNascimento: '04/09/1999'
}

console.log(pessoa);

//5
let produto = {
    nomeProduto: 'Celular',
    preco: 1000,
    estoque: 20,
    validade: '05/05/2040'
}

let produtoa = document.querySelector('#produto');

produtoa.innerHTML  = `Produto: ${produto.nomeProduto}, Preço: ${produto.preco}, Estoque: ${produto.estoque}, Validade: ${produto.validade}`

//6 °C = (°F − 32) ÷ 1, 8

let fahrenheit = 86;

let converteCelsius = (fahrenheit - 32) / 1.8;

console.log(`A temperatura em Celsius é ${converteCelsius}`);

//7

let valor = 3000;
let novoValor = 3500;

let reajuste = ((novoValor - valor)/novoValor)*100;

console.log(`O percentual de reajuste é de ${reajuste.toFixed(2)}%`);

//8 IMC = peso / ( altura )2 

let peso = 60;
let altura = 1.60;
let imc  = peso / (altura * altura);

if(imc > 18.5 && imc < 25){
    console.log(`Seu IMC ${imc.toFixed(2)} é de uma pessoa adulta e ele estar no peso normal.`);
}else if(imc < 18.5){
    console.log(`Seu IMC ${imc.toFixed(2)} estar abaixo do peso.`);
}else if(imc > 25 && imc < 30){
    console.log(`Seu IMC  ${imc.toFixed(2)} estar acima do peso.`);
}else{
    console.log(`Seu IMC ${imc.toFixed(2)} é de uma pessoa obesa.`);
}