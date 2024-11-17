//https://youtu.be/10GlDiwLWsI

let sonido;
let fondos=[];
let estado;
let texto=[];

function preload() {
  for(let i=0; i<35; i++){
   texto[i] = loadStrings("data/textos/texto"+i+".txt");
 }
  
 for(let i=0; i<24; i++){
   fondos[i] = loadImage("data/imagenes/foto"+i+".jpeg");
 }
  
 sonido = loadSound("data/Bosquemagico.mp3");

}


function setup() {
  createCanvas(640, 480);
  imageMode(RIGHT)
  estado = 0;
  textSize(14);
  
}

function draw() {
 
    print(mouseX+"/"+mouseY+" estado: "+estado);  
    cargarPantalla();
}
