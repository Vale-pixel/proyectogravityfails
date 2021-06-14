class AbuelaF {
    constructor(x, y, dir){
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.vel = 4;
    }
  
    mostrar() {
      image(abuela, this.x, this.y);
    }
    
      verificarImpacto() {
        // además de marcarlo como muerto... retorna el valor para usarlo
        if (
          this.x > personaje.x &&
          this.x < personaje.x + 78 &&
          this.y > personaje.y &&
          this.y < personaje.y + 117
        ) {
          console.log("entro");
          this.muerto = true; // muere cuando lo tocan no?
          return true;
        }
        return false;
      }
  
    estaMuerto() {
      return this.muerto;
    }
  }