function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
// -----------------------------------------APENAS UMA BRINCADEIRA COM AMIGOS 
function validador () {
    let palavra = prompt('Digite uma palavra');
    let separandoLetras = palavra.split('');
    let palavraInvertida = separandoLetras.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavraInvertida === palavra) {
        alert(`A palavra [ ${palavra} ] é igual ao inverso dela [ ${palavraInvertida} ]`)
    }
    else{
        alert(`[ ${palavra} ] não é igual ao oposto dela [${palavraInvertida}]`)
    }

}
// -----------------------------------------APENAS UMA BRINCADEIRA COM AMIGOS
