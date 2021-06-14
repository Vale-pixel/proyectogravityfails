class Rosa extends EnemigoB {
  constructor(x, y, dir, vel) {
    super(x, y, dir, vel);

    this.x = x;
    this.y = y;
    this.dir = dir;
    this.vel = 3;
  }

  mostrarB() {
    image(rosa, this.x, this.y);
  }
}
