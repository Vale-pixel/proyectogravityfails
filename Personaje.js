class Personaje {
  constructor() {
    this.x = 50; //pixeles
    this.y = 337; //pixeles

    this.armaP = [];
    this.armaR = [];
    this.enemigo = [];
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

  recolectarP() {
    if (pantalla === 2) {
      if (
        mouseX > 992 &&
        mouseX < 922 + 36 &&
        mouseY > 43 &&
        mouseY < 43 + 78
      ) {
        textSize(20);
        fill(255);
        text(
          "Encuentra el elemento esencial para explorar el siguente nivel",
          187,
          481
        );
      }
    }
    return false;
  }

  arregloArma() {
    for (let i = 0; i < this.armaP.length; i++) {
      this.armaP[i].mostrar();
      this.removerTiroInactivo();
      this.removerEnemigo();
    }
    for (let i = 0; i < this.armaR.length; i++) {
      this.armaR[i].mostrarRayos();
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

  traerTiro() {
    return this.armaP;
  }

  removerTiroInactivo() {
    for (let i = 0; i < this.armaP.lenght; i++) {
      if (!this.armaP[i].estaActivo()) {
        //remover
        this.armaP.splice(i, 1);
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
      case "X":
        this.disparar();
        break;
      case "x":
        this.disparar();
        break;
      case "Z":
        this.dispararRayos();
        break;
      case "z":
        this.dispararRayos();
        break;
    }
  }

  traerEnemigo() {
    this.enemigo.push(new Enemigo(raton));
  }

  removerEnemigo() {
    for (let i = 0; i < this.enemigo.lenght; i++) {
      if (!this.enemigo[i].estaMuertoE()) {
        //remove
        this.enemigo.splice(i, 1);
        break;
      }
    }
  }
}
