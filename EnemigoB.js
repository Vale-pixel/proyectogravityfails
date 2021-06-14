class EnemigoB {
  constructor(x, y, dir, vel) {
    this.x = x;
    this.y = 100;
    this.dir = dir;
    this.vel = 5;
    this.muerto = false;
  }

  moverB() {
    switch (this.dir) {
      case 0: // arriba
        this.y -= this.vel;
        break;
      case 1: //abajo
        this.y += this.vel;
        break;
    }
  }

  rebotarB() {
    if (this.y > 350) {
      this.dir = 0;
    } else if (this.y < 50) {
      this.dir = 1;
    }
  }
}
