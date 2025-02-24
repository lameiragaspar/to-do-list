const caixa_dialogo = (dialogo) =>{

    if(dialogo == "Vasio"){ //ajude e usuário a preencher todos os dado
        mostrarCaixaDialogo(`<p>Preencha todos os dados!</p>`)//Chama a função mostrar conteúdo e o parámetro é a mensagem para o usuário
    }else{
        return
    }
}

function mostrarCaixaDialogo(conteudo){
    const caixaDdialogo = document.getElementById("caixaDdialogo");
    const txt = document.getElementById("txt")

    txt.innerHTML = conteudo //A mensagem para o usuário é atribuida na tag com a class txt
    caixaDdialogo.classList.remove("hidden"); //A class hidden é removida da tag com o id caixaDdialogo, fazendo o elemento aparecer na tela

    function fecharDialogo(){//Responsável por add novamente a class hidden e esconder o elemento anteriormente renderizado
        caixaDdialogo.classList.add("hidden")
    }
    let fechar_caixa = document.getElementById("fechar_caixa")
    fechar_caixa.addEventListener("click", fecharDialogo)//O botão executa a função fecharDialogo
}

export default caixa_dialogo;