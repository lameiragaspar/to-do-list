const caixa_dialogo = (dialogo) =>{

    if(dialogo == "Vasio"){ //ajude e usuário a preencher todos os dado
        mostrarCaixaDialogo(`<p>Preencha todos os dados!</p>`)//Chama a função mostrar conteúdo e o parámetro é a mensagem para o usuário
    }else{
        return
    }
}

const mostrarCaixaDialogo = (conteudo) =>{
    const focus = document.getElementById("focus");
    const caixaDdialogo = document.getElementById("caixaDdialogo");
    const loading = document.getElementById("loading")
    const txt = document.getElementById("txt")
    const fechar_caixa = document.getElementById("fechar_caixa")

    focus.classList.add("focus");
    fechar_caixa.classList.add("hidden");
    loading.classList.remove("hidden");

    setTimeout(() =>{
        loading.classList.add("hidden");
        fechar_caixa.classList.remove("hidden")
        caixaDdialogo.classList.remove("hidden"); //A class hidden é removida da tag com o id caixaDdialogo, fazendo o elemento aparecer na tela
        txt.innerHTML = conteudo;
    }, 1500)

    function fecharDialogo(){//Responsável por add novamente a class hidden e esconder o elemento anteriormente renderizado
        caixaDdialogo.classList.add("hidden");
        focus.classList.remove("focus")
    }

    fechar_caixa.addEventListener("click", fecharDialogo)//O botão executa a função fecharDialogo
}

export default caixa_dialogo;