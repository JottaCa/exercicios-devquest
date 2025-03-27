nomeDoUsuario(nome);

window.alert(`Seja bem vindo(a), ${nome}!`);

function nomeDoUsuario(nome) {
    nome = window.prompt('Digite aqui seu nome:');
    return nome;    
}