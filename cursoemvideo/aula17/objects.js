let amigo = {
    nome: 'José', 
    idade: 20, 
    sexo: 'Masculino', 
    peso: 80,
    engordar(p = 0) {
        console.log('Engordou!');
        this.peso += p;
    }
};

amigo.engordar(2);

console.log(`Esse cara, o ${amigo.nome}, pesa ${amigo.peso}Kg`);