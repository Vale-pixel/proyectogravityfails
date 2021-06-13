class EnemigoB{
    constructor(){
this.x = x;
    this.y = y;
    this.dir = dir;
    this.randomX = 0;
    this.randomDir = 0;
    this. muerto = false;
    }

    
    


raton(){
    
    image(raton,this.x,this.y);
    this.especial();
}

verificarImpactoE(x,y){
    if(x > this.x && x <(this.x + 39) && y > this.y && y < this.y + 67){        
        this.muerto = true; // muere cuando lo tocan
        return true;
    }
    return false;



}


estaMuertoE(){
    return this.muerto
}


 especial(){
    if (frameCount % 90 == 0) {
        this.cambiarDeDireccion();
        this.rebotar();
}
}
cambiarDeDireccion(){
    this.dir = int(random(4));
}


mover(){
   
    switch (this.dir) {
        case 0:// arriba
            this.y-=2;
            break;
        case 1://abajo
            this.y+=2;
            break;
        case 2://izquierda
            this.x-=2;
            break;
        case 3://derecha
            this.x+=2;
            break;
    }
    
this.especial();
}

rebotar(){
    if(this.y>500){
        this.dir = 0;
    }else if(this.y<0){
        this.dir = 1;
    }
    if(this.x>990){
        this.dir = 2;
    }else if(this.x<0){
        this.dir = 3;
    }
}


}