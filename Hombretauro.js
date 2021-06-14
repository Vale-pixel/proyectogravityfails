class HombreTauro extends EnemigoB{
    constructor(x, y, dir,vel) {
      super(x, y, dir, vel);
    
          this.x = x;
          this.y = y;
          this.dir = dir;
          this.vel = 2;
      }
    
      mostrarB() {
        image(hombreTauro, this.x, this.y);
      }
    }