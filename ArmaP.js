class ArmaP {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.activo = true;
  }

  mostrar() {
    image(hachader, this.x, this.y);
    this.mover();
  }

  mostrarRayos() {
    rect(this.x + 55, this.y + 60, 8, 3);
    this.mover();
  }

  mover() {
    this.x++;
    if (this.x > length) {
      this.activo = false;
    }
  }

  estaActivo() {
    return this.activo;
  }
}
