let tarefas = [
    {nome: "Lavar", prioeidade: 1},
    {nome: "Lavar", prioeidade: 2},
    {nome: "Dormir", prioeidade: 3}
]

function PrioridadeAlta(NomeRemovido, PriRemovida){
    tarefas = tarefas.filter((tarefa) => !(tarefa.nome == NomeRemovido && tarefa.prioeidade == PriRemovida) )
    console.log(tarefas)
}

PrioridadeAlta("Lavar", 2)