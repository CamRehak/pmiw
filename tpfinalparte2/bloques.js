class Bloque {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    fill(213, 186, 152, 50); 
    rect(this.x, this.y, this.ancho, this.alto);
  }
}

function crearBloques() {
  let filas = 5;
  let columnas = 9;
  let anchoBloque = width / columnas;
  let altoBloque = 40;

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      bloques.push(new Bloque(j * anchoBloque, i * altoBloque, anchoBloque, altoBloque));
    }
  }
}
