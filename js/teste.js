const tarefas = [
    {nome: "Lavar"},
    {nome: "Comer"},
    {nome: "Dormir"}
]

const add = "jantar"

const existe = tarefas.some((tarefa) => tarefa.nome === add);//A função some retorna true se o nome da tarefa existir no array tarefas

if(existe){
    console.log("Existe")
}else{
    tarefas.push({nome: add})
}

console.log(tarefas)