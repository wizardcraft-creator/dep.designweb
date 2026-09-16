let saudacao_a = () =>{
    alert(`olá fulano, seja bem-vindo!`);
}

let saudacao_b = (nome) =>{
    alert(`olá ${nome}, seja bem-vindo!`);
}

let saudacao_c = (nome="desconhecido") =>{
    alert(`ola ${nome}, seja bem-vindo!`);
}

let saudacao_d = (nome="desconhecido") =>{
    return `olá ${nome}, seja bem-vindo!`;
}