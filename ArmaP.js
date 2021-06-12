class ArmaP{
    constructor(x, y){

        this.x = x;
        this.y = y;
        this.activo = true;
    }


    mostrar(){
        image(hacha,this.x, this.y);
        this.mover();

    }

    mover(){
        this.x ++;
        if(this.x > length){
            this.activo = false;
        }
    }

    estaActivo(){
        return this.activo;
    }

}