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
        if(pantalla === 1 ){
            if ( mouseX > 56 && mouseX < 56 + 144 && mouseY > 224 && mouseY < 224 + 205){
              pantalla =2;
              image(tiostan, this.x, this.y);
            }
    }
}
    cambioPersonaje() {

    }

    mouseClicked(){
      
         /* personaje = image(tiostan, this.x, this.y);
         console.log('tocó');*/
        }
    
    
/*
        if(pantalla === 1 ){
            if  ( mouseX > 426 && mouseX < 426 + 144 && mouseY > 224 && mouseY < 224 + 205);
            personaje = image(dipper, this.x, this.y);
           }
           if(pantalla === 1 ){
            if  ( mouseX > 779 && mouseX < 779 + 144 && mouseY > 224 && mouseY < 224 + 205);
            personaje = image(mabel, this.x, this.y);
           }
           */
        

    

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