
class Bola {
  constructor() {
    this.reiniciar();
    this.radio = 10;
  }

  mostrar() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radio * 2);
  }

  mover() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 1.0001; //incrementa la velocidad cada vez q se mueva
    this.vy *= 1.0001;
  }

  verificarBordes() { //rebortes
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0) {
      this.vy *= -1;
    }
  }

  verificarPaleta(paleta) {
    if (this.y + this.radio > paleta.y &&
      this.x > paleta.x &&
      this.x < paleta.x + paleta.ancho) {
      this.vy *= -1;
      this.y = paleta.y - this.radio;
    }
  }

  golpea(bloque) {
    return (this.x > bloque.x && this.x < bloque.x + bloque.ancho &&
      this.y - this.radio < bloque.y + bloque.alto && this.y + this.radio > bloque.y);
  }

  revertir(direccion) {
    if (direccion === 'y') {
      this.vy *= -1;
    } else if (direccion === 'x') {
      this.vx *= -1;
    }
  }

  fueraDePantalla() { //no golpea se va afuera
    return this.y > height;
  }

  reiniciar() {
    this.x = width / 2;
    this.y = height - 40;  
    this.vx = random(-5, 5);
    this.vy = -6; 
  }
}
