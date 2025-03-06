import { caixa_dialogo, carregamento } from "./animate.js";

// Função para salvar tarefas no localStorage
const salvarTarefas = (tarefas) => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

// Função para carregar tarefas do localStorage
const carregarTarefas = () => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
};

// Função para exibir tarefas na tabela
const exibirTarefas = () => {
    const tbody = document.getElementById("mostrar_tarefa");
    tbody.innerHTML = ""; // Limpa a tabela antes de renderizar

    const tarefas = carregarTarefas();
    tarefas.forEach((tarefa) => adicionarLinhaTabela(tarefa));
};

// Função para adicionar uma linha na tabela
const adicionarLinhaTabela = ({ tarefa, prioridade, data }) => {
    const tbody = document.getElementById("mostrar_tarefa");

    let info = document.createElement("img");
    info.setAttribute("src", "icon/info.svg");
    info.setAttribute("alt", "info");

    let edite = document.createElement("img");
    edite.setAttribute("src", "icon/editar.svg");
    edite.setAttribute("alt", "editar");

    let delet = document.createElement("img");
    delet.setAttribute("src", "icon/delete.svg");
    delet.setAttribute("alt", "delete");
    delet.addEventListener("click", () => removerTarefa(tarefa, prioridade));

    let nova_tarefa = document.createElement("tr");

    let colunas = [
        info,
        tarefa,
        prioridade,
        data,
        edite,
        delet
    ];

    colunas.forEach((conteudo, index) => {
        let nova_td = document.createElement("td");

        if (index === 2) { // Ajustando a cor da prioridade
            nova_td.textContent = prioridade;
            nova_td.style.backgroundColor = 
                prioridade === "Alta" ? "#ff5252" :
                prioridade === "Média" ? "#ffa726" :
                "#4caf50";
        } else if (conteudo instanceof HTMLElement) {
            nova_td.appendChild(conteudo);
        } else {
            nova_td.textContent = conteudo;
        }

        nova_tarefa.appendChild(nova_td);
    });

    tbody.appendChild(nova_tarefa);
};

// Função para adicionar uma nova tarefa
const add_tarefa = (event) => {
    event.preventDefault();//Evita o carregamento da página

    let tarefa = document.getElementById("id_tarefa").value;
    let prioridade = document.getElementById("id_prioridade").value;
    let descricao = document.getElementById("id_descricao").value;

    if (tarefa.trim() === "" || prioridade.trim() === "" || descricao.trim() === ""){
        caixa_dialogo("Vazio");
        return;//Para a função se os inputs estiverem vasios
    }

    let tarefas = carregarTarefas()

    const NomeTarefaExiste = tarefas.some((nome) => nome.tarefa === tarefa)
    const prioridadeTarefaExiste = tarefas.some((priorida) => priorida.prioridade === prioridade)

    if(NomeTarefaExiste && prioridadeTarefaExiste){
        caixa_dialogo("Existe")
        return;
    }

    carregamento();
    setTimeout(() => {
        let data = new Date();
        let hoje = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

        let tarefas = carregarTarefas();
        tarefas.push({ tarefa, prioridade, data: hoje });

        salvarTarefas(tarefas);
        exibirTarefas();

        document.getElementById("id_tarefa").value = "";
        document.getElementById("id_prioridade").value = "";
        document.getElementById("id_descricao").value = "";
    }, 1000);
};

// Função para remover uma tarefa do localStorage
const removerTarefa = (tarefaRemovida, prioeidadeRemovida) => {
    let tarefas = carregarTarefas();
    tarefas = tarefas.filter(({tarefa, prioridade}) => !(tarefa === tarefaRemovida && prioridade === prioeidadeRemovida));
    salvarTarefas(tarefas);
    exibirTarefas();
};

// Adicionando evento ao botão de adicionar tarefa
document.getElementById("add_tarefa").addEventListener("click", add_tarefa);

// Carregar tarefas ao iniciar
window.addEventListener("load", exibirTarefas);