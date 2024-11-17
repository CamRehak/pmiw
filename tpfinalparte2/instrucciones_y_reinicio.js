function reiniciarJuego() {
  bloques = [];
  crearBloques();
  bola.reiniciar();
  estadoJuego = 'jugando';
   sonidoFondo.loop();
}

function mostrarInstrucciones() {
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Presiona ESPACIO para Iniciar", width / 2, height / 2);
  textSize(15);
  text("Mueve la paleta con las flechas izquierda y derecha.", width / 2, height / 2 + 30);
  text("Destruye todos los bloques sin dejar caer la bola.", width / 2, height / 2 + 50);
}

function mostrarMensajeGanar() {
  textAlign(CENTER);
  fill(255, 255, 0);
  textSize(24);
  text("¡Ganaste! Presiona ESPACIO para Reiniciar", width / 2, height / 2);
}

function mostrarMensajePerder() {
  textAlign(CENTER);
  fill(255, 0, 0);
  textSize(24);
  text("Perdiste! Presiona ESPACIO para Reiniciar", width / 2, height / 2);
}

function keyPressed() {
  if (key === ' ') {
    if (estadoJuego === 'inicio') {
      estadoJuego = 'jugando';
    } else if (estadoJuego === 'ganar' || estadoJuego === 'perder') {
      reiniciarJuego();
    }
  }
}
