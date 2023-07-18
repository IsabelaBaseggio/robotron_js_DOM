const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  'bracos': {
    'forca': 29,
    'poder': 35,
    'energia': -21,
    'velocidade': -5
  },
  'blindagem': {
    'forca': 41,
    'poder': 20,
    'energia': 0,
    'velocidade': -20
  },
  'nucleos': {
    'forca': 0,
    'poder': 7,
    'energia': 40,
    'velocidade': -4
  },
  'pernas': {
    'forca': 27,
    'poder': 21,
    'energia': -32,
    'velocidade': 43
  },
  'foguetes': {
    'forca': 0,
    'poder': 28,
    'energia': 0,
    'velocidade': -2
  }
}

controle.forEach( (elemento) => {

    elemento.addEventListener("click", (evento) => {
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        

    })

} )

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    let pecaValue = parseInt(peca.value);
    if (pecaValue > 0) {
      peca.value = peca.value - 1;
    }
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}


function atualizaEstatisticas(peca, operacao, controle){  

  estatisticas.forEach( (elemento) => {
    console.log();
    if(operacao === "+"){
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    } else {
      const pecaValue = parseInt(controle.querySelector("[data-contador]").value);
        if(pecaValue > 0) {
          elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }      
    }
    
  } )
  
}