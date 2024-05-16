let students = [
    { name: 'Rebeca', test1: 9, test2: 8 },
    { name: 'Niltão', test1: 7, test2: 10 },
    { name: 'Isa', test1: 10, test2: 10 },
    { name: 'Rodriguez', test1: 3, test2: 2 },
]

let calcAverage = (test1, test2) => {
    return average = (Number(test1) + Number(test2)) / 2
}

let result = (average, name) => {
    if (average >= 7)
        return `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
    else
        return `Não foi dessa vez, ${name}! Tente novamente!`
}

for (let student of students) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${calcAverage(student.test1, student.test2)}\n${result(average, student.name)}`)
}
