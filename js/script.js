const num_td = 6;

function add_tarefa(){
    event.preventDefault(); // Evita o recarregamento da página
    //cAMPOS DE IMPUT
    let tarefa = document.getElementById("id_tarefa").value;
    let prioridade = document.getElementById("id_prioridade").value;
    let descricao = document.getElementById("id_descricao").value;

    //VALIDANDO OS CAMPOS
    if(tarefa.trim() === "" || prioridade.trim() === "" || descricao.trim()===""){
        
    }

    //DATA ACTUAL - CRIAÇÃO DA TAREFA
    const data = new Date()
    let hoje = (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`)
    //ICONES DE INFORMAÇÃO, EDIÇÃO E DELETE
    let info = document.createElement("img")
    info.setAttribute('src',"icon/info.svg")
    info.setAttribute('alt',"eddite")

    let edite = document.createElement("img")
    edite.setAttribute('src',"icon/editar.svg")
    edite.setAttribute('alt',"eddite")

    let delet = document.createElement("img")
    delet.setAttribute('src',"icon/delete.svg")
    delet.setAttribute('alt',"eddite")
    //Criando a linha da tabela
    let nova_tarefa = document.createElement("tr") //Criação de uma nova linha
    let nova_td
    for(let td = 0; td < num_td; td++){
        nova_td = document.createElement("td")

        switch (td){
            case 0:
                nova_td.appendChild(info)
                break
            case 1:
                nova_td.textContent= tarefa
                break
            case 2:
                nova_td.textContent = prioridade
                break
            case 3:
                nova_td.textContent = hoje
                break
            case 4:
                nova_td.appendChild(edite)
                break
            case 5:
                nova_td.appendChild(delet)
                break
            default:
                break
        }
        nova_tarefa.appendChild(nova_td)
    }

    //Mostrando a tarefa
    let tbody = document.getElementById("mostrar_tarefa")
    tbody.appendChild(nova_tarefa)

    //LIMPANDO OS CAMPOS DE INPUT
    tarefa = document.getElementById("id_tarefa").value ="";
    prioridade = document.getElementById("id_prioridade").value = "";
    descricao = document.getElementById("id_descricao").value = "";
}