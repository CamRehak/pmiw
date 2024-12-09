class Enemigo {
  constructor(posX,posY) {
    this.posX = posX  ;
    this.posY = posY ;
    this.bala = new Bala();
  }

  dibujar() {
     image(imgcriaturas, this.posX , this.posY + 10, 50, 50);
  }

  haTocadoBala (bala){
  let d = dist(bala.posX, bala.posY, this.posX + 25, this.posY + 25);
      if (d < bala.radio + 25) {
bala.reboteEnemigo()
       return null;

      }
      return this;
  }
}
