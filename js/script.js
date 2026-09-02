//Declaro a variável (crio) e atribuo nome
var nome = "jackson Gabriel Soares De Moura";
//Declaro a variável (crio) e atribuo nasc
let nasc = 2008;
//Declaro a variável (crio) e atribuo viva
const viva = confirm("clique em ok, se estiver viva: ");

//declaro a variável altura
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da função: ${idade}`);
    let menor;

    if(idade < 18){
        menor = true;
    }else {
        menor = false;
    }
    return [idade, menor];
}
let retorno = calcIdade()
if (retorno[1]){
    alert(`Idade: ${retorno[0]}. você é menor de idade`);
}else{
    alert(`Idade: ${retorno[0]}. você é maior de idade`);
}

/*
Da erro, pois, idade não existe fora do escopo dela (bloco de calcIdade)
console.log(`Idade fora da função: ${idade}`);
*/
if(viva){
    //atribui o valor em viva 
    altura = prompt("Digite a sua altura: ")
}