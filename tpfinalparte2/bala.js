class Bala {
  constructor(posX, posY, velocidadX, velocidadY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidadX = 4;
    this.velocidadY = 3;
    this.radio = 10;
  }

  dibujar() {
    fill(0);
    ellipse(this.posX, this.posY, this.radio * 2, this.radio * 2);
  }

  mover() {
    this.posX += this.velocidadX;
    this.posY += this.velocidadY;

    // Rebote en los límites de la pantalla
    if (this.posX - this.radio < 0 || this.posX + this.radio > width) {
      this.velocidadX = -this.velocidadX;
      this.posX = constrain(this.posX, this.radio, width - this.radio);
    }

    if (this.posY - this.radio < 0 ) {
      this.velocidadY = -this.velocidadY;
      this.posY = constrain(this.posY, this.radio, height - this.radio);
    }
  }

  rebotePersonaje() {
    this.velocidadY = -this.velocidadY;
    this.velocidadX = constrain(this.velocidadX, -5, 5);
  }
  reboteEnemigo() {
    this.velocidadY = -this.velocidadY;
  }
}
