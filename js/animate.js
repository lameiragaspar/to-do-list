const caixa_dialogo = (dialogo) =>{
    if(dialogo == "Vasio"){ //ajude e usuário a preencher todos os dado
        carregamento();
        setTimeout(() =>{
            mostrarCaixaDialogo(`<p>Preencha todos os dados!</p>`)//Chama a função mostrar conteúdo e o parámetro é a mensagem para o usuário
        }, 1500)
    }else{
        return
    }
}
const focus = document.getElementById("focus");

function carregamento(){
    const loading = document.getElementById("loading")
    loading.classList.remove("hidden");
    focus.classList.add("focus");
    setTimeout(() =>{
        loading.classList.add("hidden");
        focus.classList.remove("focus")
    }, 1500)
}

const mostrarCaixaDialogo = (conteudo) =>{
    const caixaDdialogo = document.getElementById("caixaDdialogo");
    const txt = document.getElementById("txt")

    focus.classList.add("focus");
    caixaDdialogo.classList.remove("hidden"); //A class hidden é removida da tag com o id caixaDdialogo, fazendo o elemento aparecer na tela
    txt.innerHTML = conteudo;

    function fecharDialogo(){//Responsável por add novamente a class hidden e esconder o elemento anteriormente renderizado
        caixaDdialogo.classList.add("hidden");
        focus.classList.remove("focus")
    }

    document.getElementById("fechar_caixa").addEventListener("click", fecharDialogo)//O botão executa a função fecharDialogo
}

export {caixa_dialogo, carregamento};