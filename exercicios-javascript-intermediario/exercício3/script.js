const btnQuadrado = document.getElementById('btn-quadrado');

btnQuadrado.addEventListener('click', ()=> {
    let botaoAzul = btnQuadrado.classList.contains('azul');

    if(botaoAzul){
        btnQuadrado.classList.remove('azul')
    } else {
        btnQuadrado.classList.add('azul')
    }
})