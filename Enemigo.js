class Enemigo {
    constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.randomX = 0;
    this.randomDir = 0;
    
}

raton(){
    
    image(raton,this.x,this.y);
    //this.especial();
}
mover(){
    if(this.dir === 0){
        this.x-=5;
    }else{
        this.x+=5;
    }
    
    this.y += this.randomDir;
}

rebotar(){
    
    this.randomDir = Math.floor(random(-1,2));
    console.log("Funciona"+ this.randomDir);
    if (this.randomDir == 0){
        this.randomDir = -1;
    }
    }
}

/* especial(){
    if (frameCount % 90 == 0) {
        this.cambiarDeDireccion();
}
}
cambiarDeDireccion(){
    this.dir = int(random(4));
}


mover(){
   
    switch (this.dir) {
        case 0:
            this.y-=2;
            break;
        case 1:
            this.y+=2;
            break;
        case 2:
            this.x+=2;
            break;
        case 3:
            this.x-=2;
            break;
    }
    
this.especial();
}


}

/*

rebotar(){
    if(this.x<= 0){
        console.log("izquierda")
    this.dirX*=-1;
    }
    
    if(this.x>= 1000){
        console.log("derecha")
    this.dirX*=-1;
    }

    if(this.y<= 10){
        console.log("arriba")
    this.dirY*=-1;
    }
}
    */

 