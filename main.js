
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // as '!=' tem a funçao de 'diferente' e os '&&' tem a funçao de "and" ou "e"
    if(elemento !=null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('elemento nao encontrado ou seletor nao encontrado');
    }
}
const ListaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

// 'enquanto' = while // "para" = for
for (let contador = 0; contador < ListaDeTeclas.length; contador++ ) {

    const tecla = ListaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

  //  console.log(idAudio)

    ListaDeTeclas[contador].onclick = function () {
        tocaSom (idAudio);
        
    };
   // console.log(contador);
 // as '||' tem a funçao de 'ou'
   tecla.onkeydown = function (evento) {
        if(evento.code ==='Space' || evento.code ==='Enter')
    tecla.classList.add('ativa')
   
}

   tecla.onkeyup = function(evento) {
    tecla.classList.remove('ativa ')
   }
}