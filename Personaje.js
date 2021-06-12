class Personaje {
    constructor() {
        this.x = 30;//pixeles
        this.y = 30;//pixeles

        this.personaje = [];
        this.armaP = [];
        this.enemigo = [];
    }



    /*mostrar() {
        switch (escogerPersonaje){
            case 'tiostan':
                image(tiostan, this.x, this.y);
                break;
            case 'dipper':
                image(dipper, this.x, this.y);
                break;
            case 'mabel':
                image(mabel, this.x, this.y);
                break;
        }
     //  personaje.mouseClicked();
       console.log(personaje);
    }
    */

    mostrarTiostan(){
        image(tiostan, this.x, this.y);
    }
    
        mostrarMabel(){
        image(mabel, this.x, this.y);
    }
    
        mostrarDipper(){
        image(dipper, this.x, this.y);
    }
        cambioPersonaje() {
    
        }

    cambioPersonaje() {

    }

    mouseClicked(){
      
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

    disparar() {
        // this.armaP.push(new )
    }

    traerTiros() {

    }

    RemoverTiros() {

    }

    TraerEnemigo() {

    }






}