class Animal{
    constructor(n, p, c, a, r){
        this.nome = n;
        this.peso = p;
        this.cor = c;
        this.altura = a;
        this.raca = r;
    }
    falar(){
        alert("oi");
    }
    comer(kg){
        this.peso += kg;
        alert("comi");
    }
    cagar(kg){
        this.peso -= kg;
        alert("caguei");
    }
        saudar(){
        let msg = `nome: ${this.nome}`;
            msg = msg + `\npeso: ${this.peso}`;
            msg = msg + `\ncor: ${this.cor}`;
            msg = msg + `\naltura: ${this.altura}`;
            msg = msg + `\nraça: ${this.raca}`;
            msg = msg + `\ndentes: ${this.dentes}`;
        alert(msg);
    }
}


class Cachorro extends Animal{
    constructor(n, p, c, a, r, d){
        super(n, p, c, a, r);
        this.dentes = d;
    }
    falar(){
        alert("auauau");
    }
    saudar(){
        super.saudar();
        alert("sou um cachorro");
    }
}

class Papagaio extends Animal{
    constructor(n, p, c, a, r){
        super(n, p, c, a, r);
    }
    falar(){
        alert("piu piu piu");
    }
    saudar(){
        super.saudar();
        alert("sou um papagaio");
    }
}

const balu = new Animal("Balu Brasil", 12.5, "preto", 0.55, "vira-lata");   
const mel = new Animal("Mel Brasil", 45.0, "amarela", 1.5, "labrador");
const leleco = new Papagaio("Leleco Brasil", 0.250, "verde", 0.15, "arara");
const priscila = new Animal("Priscila Brasil", 0.250, "amarela", 0.15, "homo sapiens");