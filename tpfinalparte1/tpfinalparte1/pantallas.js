function cargarFondo(img, x, y, ancho, alto){
  image(img, x, y, ancho, alto);
}

function cargarTexto(txt, x, y){
  push()
  noStroke();
  fill(0,0,0,80);
  rect(x+100,y+150,590,y+150);
  pop()
  push()
  textSize(20);
  fill(255,255,255);
  text(txt, x+100, y+150,590);
  noFill();
  pop()
}

function Pantalla(img, x, y, ancho, alto, txt, x2, y2, txt2, x3, y3, ancho2, alto2, txt3, x4, y4, ancho3, alto3){
    cargarFondo(img, x, y, ancho, alto);
    cargarTexto(txt, x2, y2);
    boton(x3, y3, ancho2, alto2, txt2);
    boton(x4, y4, ancho3, alto3, txt3);
}


function cargarPantalla(){
 if(estado == 0){
    Pantalla(fondos[0], 0, 0, 640, 480, 0, -1000, 0,  texto[0], 470, 420, 150, 50);
  }

   else if(estado == 1){
    Pantalla(fondos[1], 0, 0, 640, 480, texto[2], -80, 0,  texto[3], 470, 420, 150, 50);
  }
  else if(estado == 2){
    Pantalla(fondos[2], 0, 0, 640, 480, texto[4], -80, 0,  texto[3], 470, 420, 150, 50);
  }
   else if(estado == 3){
   Pantalla(fondos[3], 0, 0, 640, 480, texto[5], -80, 0, texto[6], 20, 420, 150, 50, texto[7], 470, 420, 150, 50);
  }
  else if(estado == 4){
    Pantalla(fondos[4], 0, 0, 640, 480, texto[8], -80, 0, texto[3],470, 420, 150, 50);
  }
    else if(estado == 5){
    Pantalla(fondos[5], 0, 0, 640, 480, texto[9], -80, 0, texto[3], 470, 420, 150, 50);
  }
   else if(estado == 6){
    Pantalla(fondos[6], 0, 0, 640, 480, texto[10], -80, 0, texto[3], 470, 420, 150, 50);
  }
   else if(estado == 7){
    Pantalla(fondos[7], 0, 0, 640, 480, texto[11], -80, 0, texto[3], 470, 420, 150, 50);
  }
     else if(estado == 8){
    Pantalla(fondos[8], 0, 0, 640, 480, texto[12], -80, 0, texto[13], 20, 420, 150, 50, texto[14], 470, 420, 150, 50);
  }
      else if(estado == 9){
    Pantalla(fondos[9], 0, 0, 640, 480, texto[15], -80, 0, texto[3], 470, 420, 150, 50);
  }
       else if(estado == 10){
    Pantalla(fondos[10], 0, 0, 640, 480, texto[16], -80, 0, texto[3], 470, 420, 150, 50);
  }
     else if(estado == 11){
    Pantalla(fondos[11], 0, 0, 640, 480, texto[17], -80, 0, texto[3], 470, 420, 150, 50);
  }
      else if(estado == 12){
    Pantalla(fondos[12], 0, 0, 640, 480, texto[18], -80, 0, texto[3], 470, 420, 150, 50);
  }
        else if(estado == 13){
    Pantalla(fondos[13], 0, 0, 640, 480, texto[19], -80, 0, texto[3], 470, 420, 150, 50);
  }
     else if(estado == 14){
    Pantalla(fondos[14], 0, 0, 640, 480, texto[20], -80, 0, texto[21], 470, 420, 150, 50);
  }
  else if(estado == 15){
    Pantalla(fondos[15], 0, 0, 640, 480, texto[22], -80, 0,  texto[3], 470, 420, 150, 50);
}
 else if(estado == 16){
   Pantalla(fondos[16], 0, 0, 640, 480, texto[23], -80, 0, texto[24], 20, 420, 150, 50, texto[25], 470, 420, 150, 50);
}
 else if(estado == 17){
   Pantalla(fondos[17], 0, 0, 640, 480, texto[26], -80, 0,  texto[3], 470, 420, 150, 50);
}
 else if(estado == 18){
   Pantalla(fondos[18], 0, 0, 640, 480, texto[27], -80, 0, texto[3],  470, 420, 150, 50);
}
 else if(estado == 19){
  Pantalla(fondos[19], 0, 0, 640, 480, texto[28], -80, 0, texto[21],  470, 420, 150, 50);
}
 else if(estado == 20){
  Pantalla(fondos[20], 0, 0, 640, 480, texto[29], -80, 0, texto[3],  470, 420, 150, 50);
}
else if(estado == 21){
  Pantalla(fondos[21], 0, 0, 640, 480, texto[30], -80, 0, texto[21], 470, 420, 150, 50);
}
else if(estado == 22){ 
  Pantalla(fondos[22], 0, 0, 640, 480, texto[31], -80, 0, texto[32], 20, 420, 150, 50,texto[33], 470, 420, 150, 50);
}
else if(estado == 23){ 
  Pantalla(fondos[23], 0, 0, 640, 480, texto[34], -80, 0, texto[32], 470, 420, 150, 50);
}
}


function musicaFondo(){
 if (!sonido.isPlaying()){
    sonido.loop(true);
  }
}
