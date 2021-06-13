class Raton extends Enemigo{
    constructor(x, y, dir) {
        super(x,y,dir)
     

    }

    mostrar(){
        image(raton, this.x, this.y);
    }

}