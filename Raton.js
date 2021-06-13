class Raton extends Enemigo {
  constructor(x, y, dir) {
    super(x, y, dir);
  }

  mostrar() {
    image(raton, this.x, this.y);
  }
  verificarImpacto(x, y) {
    // además de marcarlo como muerto... retorna el valor para usarlo
    if (x > this.x && x < this.x + 38 && y > this.y && y < this.y + 66) {
      this.muerto = true; // muere cuando lo tocan no?
      return true;
    }
    return false;
  }

  estaMuerto() {
    return this.muerto;
  }
}
