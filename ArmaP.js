class ArmaP{
    constructor(){
        this.xArmaP = ArmaP;
        this.yArmpaP = yArmpaP;
        this.activo = true;
    }


    mostrar(){
        image();

    }

    mover(){
        this.xarmaP --;
        if(this.xArmaP > width){
            this.activo = false;
        }
    }

}