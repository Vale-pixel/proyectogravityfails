class Personaje {
  constructor() {
    this.x = 50; //pixeles
    this.y = 337; //pixeles

    this.armaP = [];
    this.armaR = [];
    this.enemigoB = [];

    this.vida = 4;
  }

  mostrarTiostan() {
    image(tiostan, this.x, this.y);
    this.arregloArma();
  }

  mostrarMabel() {
    image(mabel, this.x, this.y);
    this.arregloArma();
  }

  mostrarDipper() {
    image(dipper, this.x, this.y);
    this.arregloArma();
  }

  arregloArma() {
    for (let i = 0; i < this.armaP.length; i++) {
      this.armaP[i].mostrar();
      this.removerTiroInactivo();
      this.removerEnemigo();
    }
  }
  disparar() {
    this.armaP.push(new ArmaP(this.x, this.y));
  }
  dispararRayos() {
    this.armaR.push(new ArmaP(this.x, this.y));
  }

  getTiro() {
    return this.armaP;
  }

  getTiroR() {
    return this.armaR;
  }

  removerTiroInactivo() {
    for (let i = 0; i < this.armaP.lenght && this.armaR.length; i++) {
      if (!this.armaP[i].estaActivo() && !this.armaR[i].estaActivo()) {
        //remover
        break;
      }
    }
  }

  mover() {
    switch (key) {
      case "A":
        this.x -= 25;

        break;
      case "a":
        this.x -= 25;
        break;
      case "D":
        this.x += 25;
        break;
      case "d":
        this.x += 25;
        break;

      case "W":
        this.y -= 25;
        break;
      case "w":
        this.y -= 25;
        break;
      case "S":
        this.y += 25;
        break;
      case "s":
        this.y += 25;
        break;
    }
  }

  dispararGeneral() {
    switch (key) {
      case "X":
        if (pantalla === 6 && 7) {
          this.disparar();
        }
        break;
      case "x":
        if (pantalla === 6 && 7) {
          this.disparar();
        }
        break;
      case "Z":
        if (pantalla === 6 && 7) {
          this.dispararRayos();
        }
        break;
      case "z":
        if (pantalla === 6 && 7) {
          this.dispararRayos();
        }
        break;
    }
  }

  bringEnemigoRosa() {
    this.enemigoB.push(new Rosa());
  }

  removerEnemigo() {
    for (let i = 0; i < this.enemigoB.lenght; i++) {
      if (!this.enemigoB[i].estaMuerto()) {
        //remove
        this.enemigoB.splice(i, 1);
        break;
      }
    }
  }

  reducirVida() {
    this.vida -= 1;
  }
}
