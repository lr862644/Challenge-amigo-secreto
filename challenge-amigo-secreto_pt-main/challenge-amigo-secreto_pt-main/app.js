let amigos = [];

function pegarNome() {
   let nome = document.getElementById('amigo').value;
    return nome
}  

function adicionarAmigo(){
    let nome = pegarNome();
    if( nome == ""){
        alert("Por favor insira um nome.");
    }else{
        amigos.push(nome);
        listaAmigos()
        limparCaixa();
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Sem amigos para sortear");
    }else{
        let numeroSorteado = Math.random() * amigos.length;
        let sorteio = Math.floor(numeroSorteado)
        resultado(amigos[sorteio])
    }
}

function listaAmigos(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = `${amigos} `
}

function resultado(ganhador){
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `O Amigo sorteado foi ${ganhador}`

}

function limparCaixa(){
    document.querySelector('input').value = '';
}