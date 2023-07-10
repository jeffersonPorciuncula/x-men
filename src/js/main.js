// const itemCiclope = document.getElementById('ciclope');
// const itemJeanGrey = document.getElementById('jean-grey');
// const itemLinceNegra = document.getElementById('lince-negra');
// const itemMagneto = document.getElementById('magneto');
// const itemNoturno = document.getElementById('noturno');
// const itemTempestade = document.getElementById('tempestade');
// const itemVampira = document.getElementById('vampira');
// const itemWolverine = document.getElementById('wolverine');

const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    /////aperte f12
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

    /////aperte f12
        alterarImagemPersonagemSelecionado(personagem);

    /////aperte f12
        alterarNomePersonagemSelecionado(personagem);
        
    /////aperte f12
        alterarDescricaoPersonagem(personagem);

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    //nomePersonagem.innerText = `${idPersonagem}` // tbm serve 
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
