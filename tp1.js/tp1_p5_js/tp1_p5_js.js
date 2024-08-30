//link al video: https://youtu.be/lhgxlz6Kzro
let tamañoCuadro = 40;
let numCuadros = 20;
let interactivo = false;
let ilusion;

function preload() {
  ilusion = loadImage('data/ilusion.jpeg');
}

function setup() {
  createCanvas(800, 400);
  background(255);
  noLoop();
}

function draw() {
  background(255);
  image(ilusion, width / 2 - ilusion.width, 0);
  
  for (let i = width / 2; i < width; i += tamañoCuadro) {
    for (let j = 0; j < height; j += tamañoCuadro) {
      fill(randomColor());
      rect(i, j, tamañoCuadro, tamañoCuadro);

      let tipoForma = obtenerTipoForma(j, i);
      let tamañoForma = tamañoCuadro / 2;

      // Dibujar forma dentro del cuadro
      if (tipoForma == 0) {
        fill(randomColor());
        ellipse(i + tamañoCuadro / 2, j + tamañoCuadro / 2, tamañoForma, tamañoForma);
      } else {
        fill(randomColor());
        rect(i + tamañoCuadro / 4, j + tamañoCuadro / 4, tamañoForma, tamañoForma);
      }
    }
  }
}

function obtenerTipoForma(j, i) {
  let fila = floor(j / tamañoCuadro);
  let columna = floor(i / tamañoCuadro) - 10;

  if (fila < 2) {
    return 0; // Fila 1 y 2: todos círculos
  } else if (fila < 5) {
    // Fila 3 a 5: dos círculos, seis cuadrados, dos círculos
    if (columna < 2 || columna > 7) {
      return 0; // Círculos
    } else {
      return 1; // Cuadrados
    }
  } else if (fila < 8) {
    // Fila 6 a 8: dos cuadrados, seis círculos, dos cuadrados
    if (columna < 2 || columna > 7) {
      return 1; // Cuadrados
    } else {
      return 0; // Círculos
    }
  } else {
    return 1; // Fila 9 y 10: todos cuadrados
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function mousePressed() {
  cambiarTamañoCuadro(20); // Cambiar tamaño de los cuadros al tocar el mouse
  interactivo = true;
  calcularCantidadYTamanoCuadros(tamañoCuadro, numCuadros); // Calcular e imprimir la cantidad y el tamaño de los cuadros
  redraw();
}

function mouseReleased() {
  interactivo = false;
}

// Función propia que no retorna un valor y tiene parámetros propios
function cambiarTamañoCuadro(nuevoTamaño) {
  tamañoCuadro = nuevoTamaño;
}

// Función propia que retorna un valor y tiene parámetros propios
function calcularCantidadYTamanoCuadros(tamañoCuadro, numCuadros) {
  let mensaje = "Cantidad de cuadros: " + numCuadros + ", Tamaño de cada cuadro: " + tamañoCuadro;
  print(mensaje);
  return mensaje;
}

// Función para re-iniciar el programa al presionar una tecla
function keyPressed() {
  if (key == 'r' || key == 'R') {
    cambiarTamañoCuadro(40); // Restablecer el tamaño original de los cuadros
    numCuadros = 20;
    interactivo = false;
    redraw();
  }
}
