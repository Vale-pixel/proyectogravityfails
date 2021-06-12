class Personaje {
    constructor() {
        this.x = 50;//pixeles
        this.y = 337;//pixeles

       
        this.armaP = [];
        this.enemigo = [];
    }

    mostrarTiostan(){
        image(tiostan, this.x, this.y);
        this.arregloArma();
        
    }
    
        mostrarMabel(){
        image(mabel, this.x, this.y);
        this.arregloArma();
       
    }
    
        mostrarDipper(){
        image(dipper, this.x, this.y);
        this.arregloArma();
        
    }

    recolectarP(){
        
    }

    arregloArma(){
        for(let i = 0; i < this.armaP.length ; i ++){
            this.armaP[i].mostrar();
            this.removerTiroInactivo();
            this.removerEnemigo();
        }

    }
    disparar() {
         this.armaP.push(new ArmaP(this.x, this.y));
    }

    traerTiro() {
        return this.armaP;


    }

    removerTiroInactivo() {
        for(let i = 0; i < this.armaP.lenght ; i ++){
            if(!this.armaP[i].estaActivo()){
                //remover
                this.armaP.splice(i,1);
                break;
            }
        }    
    }

   


    mover() {
        switch (key) {
            case "A":
                this.x -= 25;
                break;
            case 'a':
                this.x -= 25;
                break;
            case "D":
                this.x += 25;
                break;
            case 'd':
                this.x += 25;
                break;

            case "W":
                this.y -= 25;
                break;
            case 'w':
                this.y -= 25;
                break;
            case "S":
                this.y += 25;
                break;
            case 's':
                this.y += 25;
                break;
        }
    }

    

    traerEnemigo() {
        this.enemigo.push(new Enemigo(raton));

    }

    removerEnemigo(){
        for(let i = 0; i < this.enemigo.lenght ; i ++){
            if(!this.enemigo[i].estaMuertoE()){
                //remove
                this.enemigo.splice(i,1);
                break;
                
    
            }
        }    


    }
}


