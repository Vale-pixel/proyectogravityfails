let inicial, escogerP, cuarto, tienda, bosque, portal, pag_grande, diario_gran, gameO, winner, dipper, mabel,
  tiostan, raton, muercie, abuela, abuelo, hombreTauro, gnomo, bill, rosa, hacha, paginas, alfombra, cinta, tronco,
  fuegoazul, fuegorosa, corazon, linterna;

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
}

function draw() {
  //background(220);
  image(inicial, 0, 0);
}
