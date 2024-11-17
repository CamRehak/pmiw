
class Paleta {
  constructor() {
    this.ancho = 100;
    this.alto = 15;
    this.x = width / 2 - this.ancho / 2;
    this.y = height - this.alto - 10;
    this.velocidad = 10;
  }

  mostrar() {
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }
    this.x = constrain(this.x, 0, width - this.ancho); //para q no salga de lapnatala
  }
}
