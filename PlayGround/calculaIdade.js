function calculaIdade(anos){
    return `A ${this.nome} tem ${this.idade
    } e daqui a ${anos} anos, ${this.nome} tera ${
        this.idade + anos} anos de idade.`;
}

const pessoa1 = 
{
    nome: "Maria",
    idade: 56,
}
const pessoa2 = 
{
    nome: "Paulo",
    idade: 49,
}
const pessoa3 = 
{
    nome: "João",
    idade: 18,
}
const animal = 
{
    nome: "Mimy",
    idade: 3,
    raca: 'Pug',
}

// **** call or applay ****

//console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa2, [30]));