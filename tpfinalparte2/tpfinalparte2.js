
//https://youtu.be/8gYUousw93E

let paleta, bola;
let bloques = [];
let estadoJuego = 'inicio';
let sonidoFondo;
let imagenFondo;

function preload() {
  sonidoFondo = createAudio('data/Bosquemagico.mp3'); 
  imagenFondo = loadImage('data/fondo.jpeg');
}

function setup() {
  createCanvas(640, 480);
  paleta = new Paleta();
  bola = new Bola();
  crearBloques();
  sonidoFondo.loop();
}

function draw() {
  tint(255, 50);
  image(imagenFondo, 0, 0, width, height);

  
  if (estadoJuego === 'inicio') {
    mostrarInstrucciones();
  } else if (estadoJuego === 'jugando') {
    paleta.mostrar();
    paleta.mover();

    bola.mostrar();
    bola.mover();
    bola.verificarBordes();
    bola.verificarPaleta(paleta);

    for (let i = 0; i < bloques.length; i++) {
      bloques[i].mostrar();
      if (bola.golpea(bloques[i])) {
        bloques.splice(i, 1);
        bola.revertir('y');
        i--;
      }
    }

    if (bloques.length === 0) {
      estadoJuego = 'ganar';
    }
    if (bola.fueraDePantalla()) {
      estadoJuego = 'perder';
    }
  } else if (estadoJuego === 'ganar') {
    mostrarMensajeGanar();
  } else if (estadoJuego === 'perder') {
    mostrarMensajePerder();
  }
}
