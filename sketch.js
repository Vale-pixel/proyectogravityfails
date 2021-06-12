let inicial, escogerP, cuarto, tienda, bosque, portal, pag_grande, diario_gran, gameO, winner, dipper, mabel,
  tiostan, raton, muercie, abuela, abuelo, hombreTauro, gnomo, bill, rosa, hacha, paginas, alfombra, cinta, tronco,
  fuegoazul, fuegorosa, corazon, linterna;

let pantalla = 0;
let presionado = false;
let personaje;

let enemigo = new Enemigo(500, 50, 1);
let arma = new ArmaE;

let vida = [];

let tioStann = false;
let mabell = false;
let dipperr = false

function preload() {
  //pantallas
  inicial = loadImage("/assets/Pantalla inicial-8.png");
  escogerP = loadImage("/assets/EscogerPersonaje-8.png");
  cuarto = loadImage("/assets/Cuarto Dipper_2-8.png");
  tienda = loadImage("/assets/0tienda0.png");
  bosque = loadImage("/assets/Mapa Bosque-8.png");
  portal = loadImage("/assets/0portal0.png");
  pag_grande = loadImage("/assets/pag_grande.png");
  diario_gran = loadImage("/assets/diario_gran.png");
  gameO = loadImage("/assets/gameO.png");
  winner = loadImage("/assets/winner.png");

  //personajes
  dipper = loadImage("/assets/dipper.png");
  mabel = loadImage("/assets/mabel.png");
  tiostan = loadImage("/assets/0tiostan0.png");
  raton = loadImage("/assets/raton.png");
  muercie = loadImage("/assets/muercie.png");
  abuela = loadImage("/assets/Abuela Fantasma.png");
  abuelo = loadImage("/assets/ABUELO FANTASMA.png");
  hombreTauro = loadImage("/assets/HombreTauro.png");
  gnomo = loadImage("/assets/0gnomo0.png");
  bill = loadImage("/assets/0bill0.png");
  rosa = loadImage("/assets/0rosa0.png");

  //elementos
  hacha = loadImage("/assets/hacha.png");
  paginas = loadImage("/assets/PaginasDelLibro-8.png");
  alfombra = loadImage("/assets/alfombra.png");
  cinta = loadImage("/assets/0cinta0.png");
  tronco = loadImage("/assets/Tronco.png");
  fuegoazul = loadImage("/assets/0fuegoazul0.png");
  fuegorosa = loadImage("/assets/0fuegorosa0.png");
  corazon = loadImage("/assets/CorazónVida.png");
  linterna = loadImage("/assets/0linterna0.png");
}

function setup() {
  createCanvas(1000, 500);

  //arreglo vidas
  for (let i = 0; i < 4; i++) {
    let x = (i * 76) + 40;
    let y = 40;
    vida.push(new Vida(x, y));
  }

personaje = new Personaje();

}

function draw() {

  //pantallas con sus elementos
  switch (pantalla) {

    case (0):
      image(inicial, 0, 0); //pantalla inicio
      break;

    case (1):
      image(escogerP, 0, 0);//pantalla escoger personaje
      stroke(100);
      fill(255);
      textSize(15);
      text("CON UN CLICK", 438, 142)
      break;

    case (2):

      image(cuarto, 0, 0);//pantalla cuarto dipper y mabel

      enemigo.raton();
      fill(0);
      textSize(36);
      text("1", 930, 98);

      //Pintar los personajes dependiendo la elección

      //Tio Stan
      if (tioStann === true) {
        personaje.mostrarTiostan();
      }

      //Mabel
      if (mabell === true) {
        personaje.mostrarMabel();
      }

      //Dipper
      if (dipperr === true) {
        personaje.mostrarDipper();
      }

      //arreglo de vidas 
      for (let i = 0; i < vida.length; i++) {
        vida[i].mostrar();
      }

      for (let i = 0; i < vida.length; i++) {
        vida[i].mostrar();
      }

      enemigo.mover();
      enemigo.rebotar();

      break;
    case (3):
      image(pag_grande, 0, 0); //pantalla de codigo
      fill(0);
      textSize(36);
      text("2", 930, 98);
      break;
    case (4):
      image(diario_gran, 0, 0); //pantalla ingresar codigo
      fill(0);
      textSize(36);
      text("2", 930, 98);
      break;
    case (5):
      image(tienda, 0, 0); //pantalla tienda embrujada
      personaje.mostrar();
      fill(0);
      textSize(36);
      text("3", 930, 98);

      //Pintar los personajes dependiendo la elección

      //Tio Stan
      if (tioStann === true) {
        personaje.mostrarTiostan();
      }

      //Mabel
      if (mabell === true) {
        personaje.mostrarMabel();
      }

      //Dipper
      if (dipperr === true) {
        personaje.mostrarDipper();
      }
      break;

    case (6):
      image(bosque, 0, 0); //pantalla bosque 
      personaje.mostrar();
      fill(0);
      textSize(36);
      text("5", 930, 98);

      //Pintar los personajes dependiendo la elección

      //Tio Stan
      if (tioStann === true) {
        personaje.mostrarTiostan();
      }

      //Mabel
      if (mabell === true) {
        personaje.mostrarMabel();
      }

      //Dipper
      if (dipperr === true) {
        personaje.mostrarDipper();
      }
      break;

    case (7):
      image(portal, 0, 0); //pantalla laboratorio y portal 
      personaje.mostrar();
      fill(0);
      textSize(36);
      text("6", 930, 98);

      //Pintar los personajes dependiendo la elección

      //Tio Stan
      if (tioStann === true) {
        personaje.mostrarTiostan();
      }

      //Mabel
      if (mabell === true) {
        personaje.mostrarMabel();
      }

      //Dipper
      if (dipperr === true) {
        personaje.mostrarDipper();
      }
      break;

    case (8):
      image(gameO, 0, 0); //Pantalla Game Over
      break;

    case (9):
      image(winner, 0, 0); //Pantalla ganador
      break;

  }
}

function mousePressed() {

  //cambio de pantalla
  switch (pantalla) {

    case 0: //Pantalla de inicio

      //Botón de comenzar
      if (mouseX > 402 && mouseX < 402 + 176 &&
        mouseY > 440 && mouseY < 440 + 39) {
        pantalla = 1;
        
      }
      break;

    case 1: //Pantalla de elección de personaje

      //Botón Tio Stan
      if (mouseX > 56 && mouseX < 56 + 144 &&
        mouseY > 224 && mouseY < 224 + 205) {
        tioStann = true;
        personaje.disparar();
        console.log('disparo');
        

      }


       //Botón mabel
       if (mouseX > 779 && mouseX < 779 + 144 &&
         mouseY > 224 && mouseY < 224 + 205) {
         mabell = true;
         personaje.disparar();
         console.log('disparo');

       }

       //Botón dipper
       if (mouseX > 426 && mouseX < 426 + 144 &&
         mouseY > 224 && mouseY < 224 + 205) {
         dipperr = true;
         personaje.
         console.log('disparo');
       }



      //boton de comenzar
      if (mouseX > 402 && mouseX < 402 + 176 &&
        mouseY > 440 && mouseY < 440 + 39) {
        pantalla = 2;
      }

      break;

    case 2:

      break;
  }

  console.log(mouseX, mouseY);


}

function keyPressed() {

  personaje.mover();
  console.log(personaje.mover);

}


