class EnemigoB {
  constructor(x, y, dir, vel) {
    this.x = x;
    this.y = 100;
    this.dir = dir;
    this.vel = 4;
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

  verificarImpactoE(x, y) {
    if (x > this.x && x < this.x + 78 && y > this.y && y < this.y + 117) {
      this.muerto = true; // muere cuando lo tocan
      return true;
    }
    return false;
  }

  estaMuerto() {
    return this.muerto;
  }
}
