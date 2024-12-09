function boton(x, y, ancho, alto, txt) {
  if (zona(x, y, ancho, alto)) {
    fill(34, 140, 113);
  } else {
    fill(140, 34, 60);
  }
  rect(x, y, ancho, alto);
  push()
    textAlign(CENTER);
  fill(255, 255, 255);
  text(txt, x+(ancho/2), y+(alto/2)+5);
  noFill();
  pop()
}

function zona (zonax, zonay, zonaancho, zonaalto) {
  return mouseX > zonax && mouseX < zonax+zonaancho && mouseY > zonay && mouseY < zonay+zonaalto;
}

function clickboton(bx, by, bal, ban, target) {
  if (zona(bx, by, bal, ban)) {

    estado = target
  }
}

function mousePressed() {
  musicaFondo();


  if (estado === 0) {
    clickboton(470, 420, 150, 50, 1);
  } else if (estado === -1) {
    clickboton(20, 420, 150, 50, 0);
  } else if (estado === 1) {
    clickboton(470, 420, 150, 50, 2);
  } else if (estado === 2) {
    clickboton(470, 420, 150, 50, 3);
  } else if (estado === 3) {
    clickboton(20, 420, 150, 50, 4);
    clickboton(470, 420, 150, 50, 15);
  } else if (estado === 4) {
    clickboton(470, 420, 150, 50, 5);
  } else if (estado === 5) {
    clickboton(470, 420, 150, 50, 6);
  } else if (estado === 6) {
    clickboton(470, 420, 150, 50, 7);
  } else if (estado === 7) {
    clickboton( 470, 420, 150, 50, 8);
  } else if (estado === 8) {
    clickboton(20, 420, 150, 50, 9);
    clickboton( 470, 420, 150, 50, 15);
  } else if (estado === 9) {
    clickboton(470, 420, 150, 50, 10);
  } else if (estado === 10) {
    clickboton(470, 420, 150, 50, 11);
  } else if (estado === 11) {
    clickboton(470, 420, 150, 50, 12);
  } else if (estado === 12) {
    clickboton(470, 420, 150, 50, 13);
  } else if (estado === 13) {
    clickboton(470, 420, 150, 50, 14);
  } else if (estado === 14) {
    clickboton(470, 420, 150, 50, 22);
  } else if (estado === 15) {
    clickboton(470, 420, 150, 50, 16);
  } else if (estado === 16) {
    clickboton(20, 420, 150, 50, 20);
    clickboton(470, 420, 150, 50, 17);
  } else if (estado === 17) {
    clickboton(470, 420, 150, 50, 18);
  } else if (estado === 18) {
    clickboton(470, 420, 150, 50, 19);
  } else if (estado === 19) {
    clickboton(470, 420, 150, 50, 22);
  } else if (estado === 20) {
    clickboton( 470, 420, 150, 50, 21);
  } else if (estado === 21) {
    clickboton( 470, 420, 150, 50, 22);
  } else if (estado === 22) {
    clickboton(20, 420, 150, 50, 0);
    clickboton( 470, 420, 150, 50, 23);
  } else if (estado === 23) {
    clickboton( 470, 420, 150, 50, 0);
  }
}
