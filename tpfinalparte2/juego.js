class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearPersonaje();
    this.bala = null;
    this.estado= "inicio" //acordarse de cambiarlo a jugando
     this.pantallas = new Pantallas();
  }

//estados
  dibujar() {
  if (this.estado == "jugando") {
    this.dibujarPartida();
  } else if (this.estado == "ganado") {
    this.pantallas.pantallaGanaste();
  } else if (this.estado == "perdido") {
    this.pantallas.pantallaPerdiste(); 
  } else if (this.estado == "inicio") {
    this.pantallas.pantallaInicio(); 
  }
}

  dibujarPartida() {
     image(imgfondo, 0, 0, width, height);
    this.personaje.dibujar();
    this.personaje.mover();

    if (this.bala) {
      this.bala.mover();
      this.bala.dibujar();
      this.personaje.haTocadoLaBala(this.bala)

        for (let i = this.enemigos.length - 1; i >= 0; i--) {
        let enemigo = this.enemigos[i];
        if (enemigo) {
          this.enemigos[i] = enemigo.haTocadoBala (this.bala)
        }
      }
    }
    this.JuegoGanado()
      this.JuegoPerdido()
      for (let i = 0; i < this.enemigos.length; i++) {
      if (this.enemigos[i]) {
        this.enemigos[i].dibujar();
      }
    }
  }

  crearEnemigos() {
     this.enemigos = [];
     this.filas = 4; 
     this.columnas = this.cantidadEnemigos; 
     this.espacioHorizontal = 50;
     this.espacioVertical = 50;    

  
  for (let fila = 0; fila < this.filas; fila++) {
    for (let col = 0; col < this.columnas; col++) {
      let posX = col * this.espacioHorizontal;  
      let posY = fila * this.espacioVertical;   

      
      this.enemigos.push(new Enemigo(posX, posY));  
    }
  }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50);
  }

  JuegoGanado() {
    for (let i = 0; i < this.enemigos.length; i++) {
      if (this.enemigos[i]) {
        return;
      } //si todos los enemigos estan en null el jugador gana kpo tuki
    }
    this.estado="ganado"
  }
  JuegoPerdido() {
    if (this.bala && this.personaje.estadebajo(this.bala)) {
      this.estado="perdido"
    }
  }

reiniciarJuego() {
  this.estado = "inicio"; 
  this.crearEnemigos();  
  this.crearPersonaje(); 
  this.bala = null;      
}

teclaPresionada(keyCode) {
  if (this.estado === "inicio" && keyCode === ENTER) {
    this.estado = "jugando";
  } else if (this.estado === "jugando") {
    this.personaje.teclaPresionada(keyCode);
    if (keyCode === 32 && !this.bala) { 
      this.dispararBala();
    }
  } else if ((this.estado === "ganado" || this.estado === "perdido") && keyCode === 82) { 
    this.reiniciarJuego();
  }
} 

  teclaLiberada(keyCode) {
    this.personaje.teclaLiberada(keyCode);
  }

  dispararBala() {
    this.bala = new Bala(this.personaje.posX + 25, this.personaje.posY - 25, 5, 5);
  }
}
