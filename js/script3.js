let nome = prompt("Digite seu nome? ");//string
let nasc = Number(prompt("Digite sua data de nascimento: "));//number
let viva = confirm("clique em ok se você estiver vivo");//boolean
let altura = Number(prompt("Digite sua altura: "));//number
let sexo = prompt("Digite seu sexo: ")//underfined
let peso = Number(prompt("Digite seu peso: "));//vazio(nulo)
let imc = peso / altura;//NaN (Not a Number) - valor invalido

console.log("nome", typeof(nome));
console.log("nasc", typeof(nasc));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));

msg = (`nome: ${nome}\nAno de Nascimento: ${nasc}\nViva: ${viva}`);
msg = msg + (`Altura: ${altura}\nSexo: ${sexo}\nPeso: ${peso}\n`);
msg = msg + `IMC: ${imc.toFixed(2)}`;

alert(msg);