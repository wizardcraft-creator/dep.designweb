alert('oi do externo')

var num = parseFloat(prompt("digite um valor: "));
if (num == 0){
    alert(`${num} é zero`)
}else if (num %2 != 0){
    alert(`${num} é ímpar`)
}else{
    alert(`${num} é par`)
}