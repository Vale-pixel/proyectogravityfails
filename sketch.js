let inicial,
  escogerP,
  cuarto,
  tienda,
  bosque,
  portal,
  pag_grande,
  diario_gran,
  gameO,
  winner,
  dipper,
  mabel,
  tiostan,
  raton,
  muercie,
  abuela,
  abuelo,
  hombreTauro,
  gnomo,
  bill,
  rosa,
  hacha,
  paginas,
  alfombra,
  cinta,
  tronco,
  fuegoazul,
  fuegorosa,
  corazon,
  linterna;

let vida = [];

let personaje;
let estantes;

let arma = new ArmaE();
let ratonI = new Raton(500, 50, 1);
let murcieI = new Murcielago(500, 50, 1);
let abuelaF = new AbuelaF(500, 50, 1);
let abueloF = new AbueloF(500, 50, 1);
let gnomoI = new Gnomo(689, 100, 1);
let hombreTauroI = new HombreTauro(814, 100, 0);
let rosaI = new Rosa(500, 100, 1);
let billI = new Bill(745, 100, 0);

let libro = false;
let recolectadoP = false;
let recolectadaV = false;
let tioStann = false;
let mabell = false;
let dipperr = false;
let logolpean = false;
let presionado = false;

let pantalla = 0;
let x = 287;
let y = 126;
let dx = 855;
let dy = 213;
//definir arreglo para mapa
let ArregloA = new Array(23);
let ArregloB = new Array(48);

//validar mapa en la matriz
let pCol;
let pFil;
let xPos = 30;
let yPos = 20;

let mapa = [];
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
  caja = loadImage("/assets/Cajita-8.png");
}

function setup() {
  createCanvas(1000, 500);
  personaje = new Personaje();
  console.log(personaje);

  //hacer arreglo de arreglos
  for (let i = 0; i < 23; i++) {
    mapa.push(new Array(23));
  }
  for (let i = 0; i < 48; i++) {
    mapa.push(new Array(48));
  }

  //asignar valores iniciales
  for (let fil = 0; fil < 23; fil++) {
    for (let col = 0; col < 48; col++) {
      mapa[fil][col] = 0;
    }
  }
  console.log(mapa);
  //fil= y, col= x
  mapa[1][2] = 1;
  mapa[9][5] = 1;
  mapa[9][6] = 1;
  mapa[9][7] = 1;
  console.log(mapa);
}

function draw() {
  if (personaje.vida === 0) {
    pantalla = 8;
  }

 if (presionado === true){
   location.reload();
 }
  

  
  
  //pantallas con sus elementos
  switch (pantalla) {
    case 0:
      image(inicial, 0, 0); //pantalla inicio
      
    
      break;

    case 1:
      image(escogerP, 0, 0); //pantalla escoger personaje
      stroke(100);
      fill(255);
      textSize(15);
      text("CON UN CLICK", 438, 142);
      break;

    case 2:
      image(cuarto, 0, 0); //pantalla cuarto dipper y mabel

      fill(0);
      textSize(36);
      text("1", 930, 98); //numero de nivel en diario

      fill(255);
      stroke(20); //intrucciones iniciales
      textSize(16);
      text(
        "Da doble click sobre el diario del misterio en la esquina superior derecha en cada nivel para recibir las instrucciones y borrarlas",
        40,
        27
      );

      image(alfombra, x, y); //alfombra

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

      mostrarVidas();

      //alfombra y texto
      if (x < 287) {
        noStroke();
        fill(255);
        textSize(20);
        text(
          "Da click a las páginas para recolectarlas y pasar de nivel",
          270,
          481
        );
      }

      //cualidades raton
      ratonI.mostrar();
      ratonI.mover();
      ratonI.rebotar();

      //cualidades rosa
      rosaI.mostrarB();
      rosaI.moverB();
      rosaI.rebotarB();

      //cualidades bill
      billI.mostrarB();
      billI.moverB();
      billI.rebotarB();

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        textSize(15);
        if (libro) {
          text(
            "Encuentra las paginas del libro para pasar de nivel ¡No dejes que los ratones te toquen!",
            70,
            481
          );
          noStroke();
          fill(0);
          textSize(13);
          text("Prueba mover los objetos del cuarto con clicks ", 666, 481);
        } else {
        }
      }

      //adquirir elementos
      if (recolectadoP) {
        image(paginas, 907, 135);
        pantalla = 3;
        x = 287;
      }

      //perder vida con contacto enemigo
      if (ratonI.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 500);
      }
      break;
    case 3:
      image(cuarto, 0, 0); //pantalla cuarto dipper y mabel

      fill(0);
      textSize(36);
      text("2", 930, 98); //numero de nivel en diario

      image(alfombra, x, y); //alfombra
      image(paginas, 907, 135); //paginas
      image(corazon, 866, 235); //corazon
      image(caja, dx, dy, 75, 75); //caja

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

      mostrarVidas();

      //caja y texto
      if (dx < 855) {
        noStroke();
        fill(255);
        textSize(20);
        text("Da click a la vida para recolectarla y pasar de nivel", 270, 481);
      }

      //cualidades murcielago
      murcieI.mostrar();
      murcieI.mover();
      murcieI.rebotar();

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        textSize(15);
        if (libro) {
          text(
            "Encuentra la vida extra para pasar de nivel ¡No dejes que los murcielagos te toquen!",
            70,
            481
          );
          noStroke();
          fill(0);
          textSize(13);
          text("Prueba mover los objetos del cuarto con clicks", 666, 481);
        } else {
        }
      }

      //adquirir elementos
      if (recolectadaV) {
        image(corazon, 910, 212);
        pantalla = 4;
        dx = 855;
      }

      if (murcieI.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 1000);
      }

      break;
    case 4:
      image(tienda, 0, 0); //pantalla tienda embrujada
      fill(0);
      textSize(36);
      text("3", 935, 98);

      image(paginas, 922, 135); //paginas recolectadas
      image(cinta, 371, 154); //cinta del tiempo

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

      mostrarVidas();

      //cualidades abuelos
      /*
      abuelaF.mostrar();
      abuelaF.mover();
      abuelaF.rebotar();

      abueloF.mostrar();
      abueloF.mover();
      abueloF.rebotar();
*/

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        rect(218, 460, 600, 30);

        stroke(15);
        fill(0);
        textSize(15);
        if (libro) {
          text(
            "Recoge la cinta del tiempo para pasar de nivel ¡No dejes que los abuelos te toquen!",
            239,
            481
          );
        }
      }

      //perder vida con contacto abuela
      if (abuelaF.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 500);
      }
      //perder vida con contacto abuelo
      if (abueloF.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 500);
      }

      //pintar valores
      for (let fil = 1; fil < 23; fil++) {
        for (let col = 2; col < 48; col++) {
          if (mapa[fil][col] === 0) {
            noFill();
          } else if (mapa[fil][col] == 1) {
            fill(0);
          }
          stroke(0);
          rect(col * 20, fil * 20, 20, 20);
        }
      }
      ellipse(xPos, yPos, 10, 10);

      break;

    case 5:
      image(tienda, 0, 0); //pantalla tienda embrujada
      fill(0);
      textSize(36);
      text("4", 935, 98);

      image(paginas, 924, 138); //paginas recolectadas
      image(cinta, 928, 199); //cinta del tiempo recolectada

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

      //cualidades abuelos
      abuelaF.mostrar();
      abuelaF.mover();
      abuelaF.rebotar();

      abueloF.mostrar();
      abueloF.mover();
      abueloF.rebotar();

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        rect(218, 460, 600, 30);

        stroke(15);
        fill(0);
        textSize(15);
        if (libro) {
          text(
            "Llega a la salida para pasar de nivel ¡No dejes que los abuelos te toquen!",
            239,
            481
          );
        }
      }

      //perder vida con contacto abuela
      if (abuelaF.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 500);
      }
      //perder vida con contacto abuelo
      if (abueloF.verificarImpacto(personaje.x, personaje.y) && !logolpean) {
        logolpean = true;
        personaje.reducirVida();
      }
      if (logolpean) {
        setTimeout(() => {
          logolpean = false;
        }, 500);
      }
      break;

    case 6:
      image(bosque, 0, 0); //pantalla bosque
      personaje.mostrar();
      fill(0);
      textSize(36);
      text("5", 930, 98);

      image(paginas, 924, 138); //paginas recolectadas
      image(cinta, 928, 199); //cinta del tiempo recolectada

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
      mostrarVidas();

      //cualidades gnomo
      gnomoI.mostrarB();
      gnomoI.moverB();
      gnomoI.rebotarB();

      //cualidades hombretauro
      hombreTauroI.mostrarB();
      hombreTauroI.moverB();
      hombreTauroI.rebotarB();

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        rect(218, 460, 600, 30);

        stroke(15);
        fill(0);
        textSize(15);
        if (libro) {
          text(
            "Llega a la cabaña del misterio ¡usa tus armas (z-x) para derrotar a los enemigos!",
            200,
            481
          );
        }
      }

      break;

    case 7:
      image(portal, 0, 0); //pantalla laboratorio y portal
      personaje.mostrar();
      fill(0);
      textSize(36);
      text("6", 930, 98);

      image(paginas, 924, 138); //paginas recolectadas
      image(cinta, 928, 199); //cinta del tiempo recolectada

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
      mostrarVidas();

      //intrucciones del diario
      if (libro) {
        noStroke();
        fill(255);
        rect(218, 460, 600, 30);

        stroke(15);
        fill(0);
        textSize(15);
        if (libro) {
          text(
            "Llega hasta el ¡usa tus armas (z-x) para derrotar a los enemigos!",
            200,
            481
          );
        }
      }

      break;
    case 8:

     image(gameO, 0, 0); //Pantalla Game Over
     

      break;

    case 9:
      image(winner, 0, 0); //Pantalla ganador
      break;

}


  }


function mousePressed() {
  //cambio de pantalla
  switch (pantalla) {
    case 0: //Pantalla de inicio
      //Botón de comenzar
      if (
        mouseX > 402 &&
        mouseX < 402 + 176 &&
        mouseY > 440 &&
        mouseY < 440 + 39
      ) {
        pantalla = 1;
      }
      break;

    case 1: //Pantalla de elección de personaje
      //Botón Tio Stan
      if (
        mouseX > 56 &&
        mouseX < 56 + 144 &&
        mouseY > 224 &&
        mouseY < 224 + 205
      ) {
        tioStann = true;
      }

      //Botón mabel
      if (
        mouseX > 779 &&
        mouseX < 779 + 144 &&
        mouseY > 224 &&
        mouseY < 224 + 205
      ) {
        mabell = true;
      }

      //Botón dipper
      if (
        mouseX > 426 &&
        mouseX < 426 + 144 &&
        mouseY > 224 &&
        mouseY < 224 + 205
      ) {
        dipperr = true;
      }

      //boton de comenzar
      if (
        mouseX > 402 &&
        mouseX < 402 + 176 &&
        mouseY > 440 &&
        mouseY < 440 + 39
      ) {
        pantalla = 2;
      }

      break;

    case 2:
      //movimiento alfombra
      if (dist(mouseX, mouseY, x + 124, y + 124) < 150) {
        x = 120;
      }
      break;

    case 3:
      //movimiento alfombra
      if (dist(mouseX, mouseY, dx + 70, dy + 70) < 90) {
        dx = 790;
      }
      break;
        
  }
  //recoleccion de paginas
  if (mouseX > 367 && mouseX < 390 && mouseY > 210 && mouseY < 240) {
    recolectadoP = true;
  }
  //recoleccion de vida
  if (mouseX > 867 && mouseX < 887 && mouseY > 234 && mouseY < 254) {
    recolectadaV = true;
    personaje.vida += 1;
  }
  //mensaje de libro
  if (mouseX > 922 && mouseX < 959 && mouseY > 43 && mouseY < 120) {
    libro = !libro;
  }


if (pantalla === 8){
  if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 500) {
    console.log("melo");
    presionado = true;
  }
}

  console.log(mouseX, mouseY);
}
//cambio de gamme over a pantalla inicial

function mouseClicked(){
  
 }

function mouseClicked() {
  if (pantalla === 8) {
    console.log("epa");
    presionado = true;
    pantalla = 2;
  }
}


function keyPressed() {
  personaje.mover(); //movimiento personaje
  personaje.dispararGeneral(); //disparos de hacha y rayos z x
  if (pantalla === 4) {
    //fil-y=1   col-x=2
    switch (key) {
      case "A":
        if (personaje && pCol - 1 >= 0) {
          if (mapa[pFil][pCol - 1] === 0) {
            pCol -= 1;
          }
        }
        break;
      case "a":
        if (personaje && pCol - 1 >= 0) {
          if (mapa[pFil][pCol - 1] === 0) {
            pCol -= 1;
          }
        }
        break;
      case "D":
        if (personaje && pCol + 1 < 10) {
          if (mapa[pFil][pCol + 1] === 0) {
            pCol += 1;
          }
        }
        break;
      case "d":
        if (personaje && pCol + 1 < 10) {
          if (mapa[pFil][pCol + 1] === 0) {
            pCol += 1;
          }
        }
        break;

      case "W":
        if (personaje && pFil - 1 >= 0) {
          if (mapa[pFil - 1][pCol] === 0) {
            pFil -= 1;
          }
        }
        break;
      case "w":
        if (personaje && pFil - 1 >= 0) {
          if (mapa[pFil - 1][pCol] === 0) {
            pFil -= 1;
          }
        }
        break;
      case "S":
        if (personaje && pFil + 1 <= 10) {
          if (mapa[pFil + 1][pCol] === 0) {
            pFil += 1;
          }
        }
        break;
      case "s":
        if (personaje && pFil + 1 <= 10) {
          if (mapa[pFil + 1][pCol] === 0) {
            pFil += 1;
          }
        }
        break;
    }
  }
}

function mostrarVidas() {
  for (let i = 0; i < personaje.vida; i++) {
    let x1 = i * 76 + 40;
    let y1 = 40;
    // vida.push(new Vida(x, y));
    image(corazon, x1, y1);
  }
}
