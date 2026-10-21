const balu = {
    nome: "Balu Brasil",
    peso: 12.5,
    cor: "preto",
    altura:0.55,
    raca: "vira-lata",
    falar(){
        alert("au au au");
    },
    comer(kg){
        this.peso += kg;
    },
    cagar(kg){
        this.peso -= kg;
    },
    saudar(){
        let msg = `Olá, meu nome é ${this.nome}, tenho ${this.peso} kg e sou da raça ${this.raca}`;
        alert(msg);                                                                                                                                                                                                                                                                                                                 
    }
}

const mel = {
    nome: "Mel",
    peso: 45.0,
    cor: "amarela",
    altura: 1.5,
    raca: "labrador",
    falar(){
        alert("au au au");
    },
    comer(kg){
        this.peso += kg;
    },
    cagar(kg){
        this.peso -= kg;
    },
    saudar(){
        let msg = `Olá, meu nome é ${this.nome}, tenho ${this.peso} kg e sou da raça ${this.raca}`;
        alert(msg);                                                                                                                                                                                                                                                                                                                 
    }
}