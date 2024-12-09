class Pantallas {
 
  constructor(juego, x, y) {
    this.juego = juego;
    this.x = width /2 ;
    this.y = height/2 ;
   this.descripcion = "¡Las criaturas invadieron la casa, ayudanos a matarlas!";
   this.instrucciones = "Tienes que eliminar a las criaturas del techo y \nevitar que la bala toque el suelo.\nMovete con las flechas de derecha a izquierda\ny apretá la barra espaciadora para disparar.";
    this.iniciar = "Tocar ENTER para iniciar";
   this.perdiste = "¡Perdiste!";
   this.perdiste1 = "Las criaturas invadieron toda la casa.";
   this.ganaste = "¡Ganaste!";
   this.ganaste1 = "Salvaste a la familia de las criaturas";
   this.alumnas = "Creditos:Camila Rehak y Catalina Goyeneche";
   this.reiniciar = "¿Queres volver a jugar?";
   this.reiniciar2 = "Presiona la tecla R para Reiniciar";
  }
  
  
  pantallaGanaste() {
    image(imgganaste, 0, 0,640, 480);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.ganaste,this.x, this.y- 170);
    fill(154,208,242, 180);
    rect(110,310,420,70);
    textSize(20);
    fill(5, 0, 82);
    text(this.ganaste1,this.x, this.y + 90);
    textSize(18);
    fill(255);
    text(this.reiniciar,this.x, this.y + 120);
    textSize(20);
    fill(255);
    text(this.alumnas,this.x + 110, this.y + 220);
    fill(93, 203, 214, 180);
    rect(140, 390, 360, 40);
    textSize(18);
    fill(255);
    text(this.reiniciar2,this.x, this.y + 170);
  }

  pantallaPerdiste() {
    image(imgperdiste, 0, 0,640, 480);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.perdiste,this.x, this.y - 170);
    fill(154,208,242, 180);
    rect(120,310,400,50);
    textSize(20);
    fill(0, 5, 82);
    text(this.perdiste1,this.x, this.y + 90);
    textSize(18);
    fill(255);
    text(this.reiciniar, this.x, this.y+ 120);
    textSize(20);
    fill(5);
    text(this.alumnas,this.x + 110, this.y + 220);
    fill(93, 203, 214, 180);
    rect(140, 390, 360, 40);
    textSize(18);
    fill(255);
    text(this.reiniciar2,this.x, this.y + 170);
  }
  
   pantallaInicio() {
    image(imginicio, 0, 0,640, 480);
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(255);
    text(this.descripcion, this.x, this.y - 15);
    fill(88, 74, 103, 180);
    rect(110, 310, 420, 70);
    textSize(18);
    fill(255);
    text(this.instrucciones,  this.x, this.y + 80);
    fill(93, 203, 214, 180);
    rect(140, 390, 360, 40);
    textSize(20);
    fill(255);
    text(this.iniciar,this.x , this.y + 170);
    textSize(20);
    fill(255);
    text(this.alumnas,this.x + 110, this.y + 220);
    
  
    
    

  }





}
