const aluno = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Ana',
        nota: 3,
        turma: '2C'
    },
    {
        nome: 'Bruna',
        nota: 8,
        turma: '3A'
    },
    {
        nome: 'Victor',
        nota: 4,
        turma: '3A'
    },
];

function alunosAprovado(arr, media) {
    let aprovados = [];

    for(let i =0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovado(aluno, 5));