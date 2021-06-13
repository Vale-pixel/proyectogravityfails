class Murcielago extends Enemigo {
    constructor(x,y,dir){
        super(x,y,dir)
    }
mostrar(){
    image(muercie, this.x, this.y);
}

}