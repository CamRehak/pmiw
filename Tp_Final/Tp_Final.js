let anchoPantalla = 640;
let altoPantalla = 480;
let margenX = 40; 
let margenY = 20;  
let imginicio, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18;
let pantallaActual = 1;  
let botonSiguiente, botonInicio, boton1, boton2, boton3, boton4,boton5,boton6,botonFinal;

function preload() {
  imginicio = loadImage("data/pantallainicio.jpeg");
  img1 = loadImage("data/pantalla1.png");
  img2 = loadImage("data/pantalla2.png");
  img3 = loadImage("data/pantalla3.png");
  img4 = loadImage("data/pantalla4.jpeg");
  img5 = loadImage("data/pantalla5.jpeg");
  img6 = loadImage("data/pantalla6.png");
  img7 = loadImage("data/pantalla7.jpeg");
  img8 = loadImage("data/pantalla8.jpeg");
  img9 = loadImage("data/pantalla9.jpeg");
  img10 = loadImage("data/pantalla10.jpeg");
  img11 = loadImage("data/pantalla11.jpeg");
  img12 = loadImage("data/pantalla12.png");
  img13 = loadImage("data/pantalla13.png");
  img14 = loadImage("data/pantalla14.jpeg");
  img15 = loadImage("data/pantalla15.jpeg");
  img16 = loadImage("data/pantalla16.jpeg");
  img17 = loadImage("data/pantalla17.jpeg");
  img18 = loadImage("data/pantalla18.jpeg");
}

function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  
  // Botón "Siguiente"
  botonSiguiente = createButton('Siguiente');
  botonSiguiente.position(anchoPantalla - 130, altoPantalla - 70);
   botonSiguiente.size(100, 40);
  botonSiguiente.mousePressed(cambiarPantalla);

  // Botón " boton1"
  boton1 = createButton('Entrar al tunel');
  boton1.position(50, altoPantalla - 70);
  boton1.size(150, 50);
  boton1.mousePressed(cambiarPantalla1);
  
  // Botón " boton2"
  boton2 = createButton('Volver a la casa');
  boton2.position(450, altoPantalla - 70);
  boton2.size(150, 50);
  boton2.mousePressed(cambiarPantalla2);
  
  // Botón " boton3"
  boton3 = createButton('Creerle a Mei');
  boton3.position(50, altoPantalla - 70);
  boton3.size(150, 50);
  boton3.mousePressed(cambiarPantalla3);
  
  // Botón " boton4"
  boton4 = createButton('Llevarla a la casa');
  boton4.position(450, altoPantalla - 70);
  boton4.size(150, 50);
  boton4.mousePressed(cambiarPantalla4);
  
    // Botón " boton5"
  boton5 = createButton('Seguir los rastros');
  boton5.position(450, altoPantalla - 70);
  boton5.size(150, 50);
  boton5.mousePressed(cambiarPantalla5);
  
  // Botón " boton6"
 boton6 = createButton('Ignorarlos');
  boton6.position(50, altoPantalla - 70);
  boton6.size(150, 50);
 boton6.mousePressed(cambiarPantalla6);
   
  // Botón " botonFinal"
  botonFinal = createButton('Final');
  botonFinal.position(450, altoPantalla - 70);
  botonFinal.size(150, 50);
  botonFinal.mousePressed(cambiarPantallafinal);
  
  // Botón "inicio"
botonInicio = createButton('INICIO');
botonInicio.position(265, altoPantalla - 70);
botonInicio.style('font-size', '24px'); 
botonInicio.style('padding', '10px 20px'); 
botonInicio.mousePressed(cambiarPantallaInicio);

}

function draw() {
  background(0);
  textAlign(LEFT, TOP);  
  textSize(20);
  fill(255);
  tint(255, 255, 255, 127);
  
  if ([2, 3, 5, 6, 7,8,10,11,12,13,14,16, 18, 19,21].includes(pantallaActual)) { 
    botonSiguiente.show(); 
    boton1.hide(); 
     boton2.hide();
     boton3.hide();
     boton4.hide();
     boton5.hide();
     boton6.hide();
     botonInicio.hide();
     botonFinal.hide();
  } else if ([4].includes(pantallaActual)) {
    boton1.show();  
     boton2.show();  
     boton3.hide();
      boton4.hide();
       boton5.hide();
     boton6.hide();
    botonSiguiente.hide();  
  } else if ([1].includes(pantallaActual)) {
     botonInicio.show();
      boton2.hide();
     boton1.hide();  
     boton3.hide();
      boton4.hide();
       boton5.hide();
     boton6.hide();
     botonSiguiente.hide();  
     botonFinal.hide();
  } else if ([9].includes(pantallaActual)) {
    boton3.show();
     boton4.show();
     botonInicio.hide();
      boton2.hide();
     boton1.hide();  
      boton5.hide();
     boton6.hide();
     botonSiguiente.hide(); 
      botonFinal.hide();
  }else if ([15, 20, 22].includes(pantallaActual)) {
    botonFinal.show();
    boton3.hide();
     boton4.hide();
     botonInicio.hide();
      boton2.hide();
     boton1.hide();  
      boton5.hide();
     boton6.hide();
     botonSiguiente.hide();  
     
  }else if ([17].includes(pantallaActual)) {
    botonFinal.hide();
    boton3.hide();
     boton4.hide();
     botonInicio.hide();
      boton2.hide();
     boton1.hide();  
      boton5.show();
     boton6.show();
     botonSiguiente.hide();  
     
  } else {
    botonSiguiente.hide();  
    boton1.hide();
    boton2.hide();
    boton3.hide();
    boton4.hide();
    botonInicio.hide();
    botonFinal.hide();
     boton5.hide();
     boton6.hide();
  }

  switch (pantallaActual) {
    case 1:
      
      image(imginicio, 0, 0, anchoPantalla, altoPantalla);
      textSize(60);
      text("Mi vecino Totoro", margenX + 60 ,  margenY + 20 , anchoPantalla - margenX * 2);
      break;
      
       case 2:
      image(img1, 0, 0, anchoPantalla, altoPantalla);
      text("Satsuki y Mei llegan a su nueva casa, emocionadas y un poco nerviosas. Se han mudado para estar más cerca del hospital donde cuidan a su madre enferma.  En este nuevo hogar, rodeado de naturaleza, las hermanas comenzarán a descubrir secretos y maravillas que cambiarán su vida para siempre.  La aventura recien empieza!", margenX, margenY, anchoPantalla - margenX * 2);
      break; 
      
      case 3:
      image(img2, 0, 0, anchoPantalla, altoPantalla);
      text(" Mientras Satsuki explora el interior de la casa, Mei decide aventurarse al jardín. Allí, su curiosidad la lleva hacia el árbol más grande del lugar. Al acercarse, descubre un túnel secreto escondido entre sus raíces. Con el corazón latiendo de emoción, Mei se siente atraída por la misteriosa entrada, lista para descubrir qué secretos aguarda dentro.",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
       case 4:
       background (108,59,42); 
      text("¿Que preferis, entrar al tunel para investigar el bosque o volver a investigar la casa? ", margenX, margenY + 150 , anchoPantalla - margenX * 2);
      break;
      
     case 5:
      image(img3, 0, 0, anchoPantalla, altoPantalla);
      text("Mei se adentra en el túnel y comienza a recorrer un largo camino lleno de sombras y ecos. Sin embargo, la aventura da un giro inesperado cuando pierde el equilibrio y cae en un pozo. Para su sorpresa, aterriza suavemente sobre una superficie peluda y misteriosa. Confundida pero intrigada, Mei se da cuenta de que ha entrado en un mundo mágico donde nada es lo que parece.",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
      case 6:
      image(img4, 0, 0, anchoPantalla, altoPantalla);
      text("Mei se encuentra cara a cara con Totoro, una enorme y encantadora criatura. A pesar de su tamaño, Totoro emana una calidez que la tranquiliza. Ambos conectan instantáneamente y, en un mágico momento, deciden descansar juntos, compartiendo paz y amistad.",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
      
       case 7:
      image(img5, 0, 0, anchoPantalla, altoPantalla);
      text("Satsuki vuelve de la escuela emocionada por contarle a Mei sobre su día, pero al no encontrarla en casa, la preocupación la invade. Sin dudarlo, sale al bosque llamando a su hermana, adentrándose en el misterio y la incertidumbre.",  margenX, margenY + 250, anchoPantalla - margenX * 2);
      break;
      
      
       case 8:
      image(img6, 0, 0, anchoPantalla, altoPantalla);
      text("Satsuki, al buscar a Mei, escucha un susurro entre las hojas. A lo lejos, ve a su hermana dormida en el bosque, rodeada de un aire mágico. Se acerca y la despierta suavemente. Mei, emocionada, le cuenta sobre su encuentro con Totoro y las maravillas del túnel, mientras Satsuki la escucha, aún confundida.",  margenX , margenY + 10, anchoPantalla - margenX * 2);
      break;
      
      case 9:
       background (108,59,42); 
      text("¿Que preferis,creerle a Mei sobre la existencia de Totoro o Llevarla a la casa? ", margenX, margenY + 150 , anchoPantalla - margenX * 2);
      break;
      
       case 10:
      image(img7, 0, 0, anchoPantalla, altoPantalla);
      text("Bajo la lluvia, Satsuki y Mei esperan a su padre cuando Totoro aparece. Emocionada, Satsuki le ofrece el paraguas de su padre. Totoro, sonriente, lo acepta con alegría, y juntos comparten un momento de unión bajo la lluvia.",  margenX, margenY + 50, anchoPantalla - margenX * 2);
      break;
      
      
       case 11:
      image(img8, 0, 0, anchoPantalla, altoPantalla);
      text("Al escuchar el suave sonido de las gotas de lluvia golpeando el paraguas, Totoro se ilumina de emoción. Con una alegría desbordante, comienza a saltar, haciendo que las gotas caigan más rápido y llenen el aire de risas y diversión. Satsuki y Mei observan asombradas, riendo junto a él.",  margenX, margenY + 280, anchoPantalla - margenX * 2);
      break;
    
    
     case 12:
      image(img9, 0, 0, anchoPantalla, altoPantalla);
      text("Antes de que llegue su padre, el Gatobus aparece entre los árboles. Totoro, emocionado, se despide de Satsuki y Mei, saltando al autobús. Las hermanas lo observan, fascinadas, mientras el Gatobus se aleja, dejando un aire de magia y misterio en el bosque.",  margenX, margenY + 270, anchoPantalla - margenX * 2);
      break;
      
      
     case 13:
      image(img10, 0, 0, anchoPantalla, altoPantalla);
      text("Al día siguiente, Satsuki y Mei reciben una llamada del hospital que trae noticias sobre su madre. La emoción y la preocupación inundan el ambiente, y Mei, deseosa de ver a su mamá, decide salir a buscarla. Sin embargo, mientras se adentra en el camino, la ansiedad la envuelve y, distraída por sus pensamientos, se pierde entre los senderos del bosque",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
      
       case 14:
      image(img11, 0, 0, anchoPantalla, altoPantalla);
      text("Desesperada por la desaparición de Mei, Satsuki llama a Totoro y al Gatobus, confiando en su ayuda. En un instante, Totoro llega con el Gatobus, listos para la aventura. Juntos, forman un equipo dispuesto a recorrer el bosque y encontrar a Mei.", margenX, margenY + 270, anchoPantalla - margenX * 2);
      break;
      
       case 15:
      image(img12, 0, 0, anchoPantalla, altoPantalla);
      text("Satsuki y Totoro encuentran a Mei, quien aliviada, rompe en risas de alegría. Juntos, regresan a casa compartiendo historias de sus aventuras. El vínculo entre ellos es más fuerte, y el bosque, un lugar lleno de magia.",  margenX, margenY + 310, anchoPantalla - margenX * 2);
      break;
      
      
       case 16:
      image(img13, 0, 0, anchoPantalla, altoPantalla);
      text("Mientras exploran la casa, se encuentran con unas traviesas Criaturas de Hollín que, al parecer, han estado jugando en la pared. Sus pequeños cuerpos dejan un rastro de hollín, como si estuvieran marcando su camino en este mundo mágico. Con curiosidad, se acercan a observarlo.",  margenX, margenY + 250, anchoPantalla - margenX * 2);
      break;
      
       case 17:
       background (108,59,42); 
      text("¿Que preferis, ignorarlos o seguir los rastros para ver de que se trata ? ", margenX, margenY + 150 , anchoPantalla - margenX * 2);
      break;
      
      
       case 18:
      image(img14, 0, 0, anchoPantalla, altoPantalla);
      text("Al abrir la puerta oculta, encontraron una habitación oscura y misteriosa. Las Criaturas de Hollín las rodearon con ojos brillantes y curiosos. El encuentro las sorprendió, mientras se preguntaban qué más escondía ese lugar olvidado.",  margenX, margenY + 50, anchoPantalla - margenX * 2);
      break;
      
       case 19:
      image(img15, 0, 0, anchoPantalla, altoPantalla);
      text("Las Criaturas de Hollín, impresionadas por la valentía de Satsuki y Mei, les ofrecieron un deseo. Con determinación, las hermanas pidieron que su madre se recuperara. Su deseo sincero llenó la habitación de luz cálida y esperanzadora, mientras las criaturas asintieron, listas para hacerlo realidad.",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
      
       case 20:
      image(img16, 0, 0, anchoPantalla, altoPantalla);
      text("Al día siguiente, la madre de Satsuki y Mei regresó a casa, sana y feliz. Las hermanas la abrazaron con alegría, sintiendo que su deseo se había hecho realidad. La familia celebró su reencuentro, agradecida por el amor y la fortaleza que los mantuvo unidos en los momentos difíciles.",  margenX, margenY +280, anchoPantalla - margenX * 2);
      break;
      
       case 21:
      image(img17, 0, 0, anchoPantalla, altoPantalla);
      text("Después de un día lleno de emociones, Satsuki y Mei se acostaron a dormir, sintiéndose tranquilas y agradecidas . Sin embargo, al despertar, se encontraron con una escena inesperada: las Criaturas de Hollín las habían invadido, y estaban por todas partes.",  margenX, margenY + 50, anchoPantalla - margenX * 2);
      break;
      
       case 22:
      image(img18, 0, 0, anchoPantalla, altoPantalla);
      text("Satsuki y Mei intentaron sacar a las Criaturas de Hollín, pero estaban por todas partes. Incapaces de controlarlas, decidieron abandonar la casa. Aunque se sintieron despojadas de su hogar, la emoción de la aventura seguía viva en ellas.",  margenX, margenY + 10, anchoPantalla - margenX * 2);
      break;
      
  }
}

function cambiarPantalla() {
  if (pantallaActual < 22) {
    pantallaActual++;
  }
}

function cambiarPantalla1() {
  pantallaActual = 5;  
}
function cambiarPantalla2() {
  pantallaActual = 16;  
}
function cambiarPantalla3() {
  pantallaActual = 10;  
}

function cambiarPantalla4() {
  pantallaActual = 16;  
}

function cambiarPantallafinal() {
  pantallaActual = 1;  
}

function cambiarPantalla5() {
  pantallaActual = 18;  
}

function cambiarPantalla6() {
  pantallaActual = 21;  
}

function cambiarPantallaInicio() {
  pantallaActual = 2;  
}
