const atualizarBotaoFechar = (texto, cor) => {
    let fechar_caixa = document.getElementById("fechar_caixa");
    fechar_caixa.innerHTML = texto;
    fechar_caixa.style.backgroundColor = cor;
};
const caixa_dialogo = (dialogo) =>{
    carregamento();
    setTimeout(() => {
        if(dialogo === "Vazio"){ //ajude e usuário a preencher todos os dado
            mostrarCaixaDialogo(`<p>Preencha todos os dados!</p>`)//Chama a função mostrar conteúdo e o parámetro é a mensagem para o usuário
            return
        }
        if(dialogo === "Existe"){
            mostrarCaixaDialogo(
                `<p>A tarefa que tentou adicionar já exite!</p>
                <p>Verifique a sua lista de tarefas e tente novamente!</p>`
            ) 
            return
        }
        if (dialogo === "Deletar") {
            let deletar = document.getElementById("deletar");
            deletar.classList.remove("hidden");

            atualizarBotaoFechar("Cancelar", "#4caf50");
            mostrarCaixaDialogo(
                `<h3>Atenção!</h3>
                 <p>Deseja deletar a tarefa?</p>
                 <p>Uma vez deletada, não será possível restaurá-la</p>`
            );
            return;
        }
    }, 1000)
}

const focus = document.getElementById("focus");
const caixaDdialogo = document.getElementById("caixaDdialogo");

function carregamento(){
    const loading = document.getElementById("loading")
    loading.classList.remove("hidden");
    focus.classList.add("focus");
    setTimeout(() =>{
        loading.classList.add("hidden");
        focus.classList.remove("focus")
    }, 1000)
}

const mostrarCaixaDialogo = (conteudo) =>{
    const txt = document.getElementById("txt")

    focus.classList.add("focus");
    caixaDdialogo.classList.remove("hidden"); //A class hidden é removida da tag com o id caixaDdialogo, fazendo o elemento aparecer na tela
    txt.innerHTML = conteudo;
}

function fecharDialogo(){//Responsável por add novamente a class hidden e esconder o elemento anteriormente renderizado
    caixaDdialogo.classList.add("hidden");
    focus.classList.remove("focus")
}

document.getElementById("fechar_caixa").addEventListener("click", fecharDialogo)//O botão executa a função fecharDialogo
export {caixa_dialogo, carregamento, fecharDialogo}