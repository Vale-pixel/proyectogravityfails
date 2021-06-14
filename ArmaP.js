class ArmaP {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.activo = true;
  }

  mostrar() {
    image(hacha, this.x, this.y);
    this.mover();
  }

  mostrarRayos() {
    rect(this.x + 3, this.y - 3, 3, 8);
    this.mover();
  }

  mover() {
    this.x--;
    if (this.x > length) {
      this.activo = false;
    }
  }

  estaActivo() {
    return this.activo;
  }
}
