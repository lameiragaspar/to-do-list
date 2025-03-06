const tarefas = [
    {nome: "Lavar", prioeidade: 1},
    {nome: "Lavar", prioeidade: 2},
    {nome: "Dormir", prioeidade: 3}
]

function PrioridadeAlta(NomeRemovido, PriRemovida){
    let tarefa = tarefas.filter((tarefa) => !(tarefa.nome == NomeRemovido && tarefa.prioeidade == PriRemovida) )
    console.log(tarefa)
}

PrioridadeAlta("Lavar", 1)