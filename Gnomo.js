class Gnomo extends EnemigoB{
    constructor(x, y, dir,vel) {
      super(x, y, dir, vel);
    
          this.x = x;
          this.y = y;
          this.dir = dir;
          this.vel = 2;
      }
    
      mostrarB() {
        image(gnomo, this.x, this.y);
      }
    }