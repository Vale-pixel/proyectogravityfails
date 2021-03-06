class Enemigo {
  constructor(x, y, dir, vel) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.vel = 5;
  }
  mover() {
    if (this.dir == 0) {
      //abajo
      this.y -= this.vel;
    } else if (this.dir == 1) {
      //arriba
      this.y += this.vel;
    } else if (this.dir == 2) {
      //derecha
      this.x += this.vel;
    } else if (this.dir == 3) {
      //izquierda
      this.x -= this.vel;
    } else if (this.dir == 4) {
      //diagonal izquierda abajo
      this.x -= this.vel;
      this.y -= this.vel;
    } else if (this.dir == 5) {
      //diagonale derecha arriba
      this.x += this.vel;
      this.y += this.vel;
    } else if (this.dir == 6) {
      //diagonal izquierda arriba
      this.x -= this.vel;
      this.y += this.vel;
    } else if (this.dir == 7) {
      //diagonal dercha abajo
      this.x += this.vel;
      this.y -= this.vel;
    }
  }

  rebotar() {
    if (this.y >= 400) {
      let nr = Math.random() * 3 + 1;

      this.dir = nr == 1 ? 6 : nr == 2 ? 1 : 4;
    } else if (this.y <= 40) {
      let nr = Math.random() * 3 + 1;

      this.dir = nr == 1 ? 7 : nr == 2 ? 4 : 6;
    } else if (this.x <= 60) {
      let nr = Math.random() * 3 + 2;

      this.dir = nr == 1 ? 7 : nr == 2 ? 2 : 2;
    } else if (this.x >= 940) {
      let nr = Math.random() * 3 + 2;

      this.dir = nr == 1 ? 7 : nr == 2 ? 2 : 6;
    }
  }
}
