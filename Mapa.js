class Mapa {
    constructor() {
        this.casilla = [];
    }

    crearCasillas() {
        for (let i = 0; i < 12; i++) {
            this.casilla.push(new Array(7));
        }
        //Asignar valores iniciales
        for (let fil = 0; fil < 7; fil++) {
            for (let col = 0; col < 12; col++) {
                this.casilla[fil][col] = 0;
            }
        }
    }

    personalizarObstaculos(nivel) {

        switch (nivel) { //Diferenciar zonas de movilidad y obstaculos de acuerdo a cada pantalla
            case 0:

                for (let fi = 0; fi < 7; fi++) {
                    for (let co = 0; co < 12; co++) {
                        this.casilla[fi][co] = 0;
                    }
                }

                for (let fil = 0; fil < 7; fil++) {
                    for (let col = 0; col < 12; col++) {
                        //Margenes
                        this.casilla[0][col] = 1;
                        this.casilla[fil][0] = 1;
                        this.casilla[fil][11] = 1;
                        this.casilla[6][fil - 4] = 1;
                        this.casilla[6][fil + 10] = 1;



                        //Pescado
                        this.casilla[3][3] = 1;
                        this.casilla[3][4] = 1;
                        this.casilla[3][5] = 1;
                        this.casilla[3][6] = 1;
                        this.casilla[3][7] = 1;
                        this.casilla[3][8] = 1;
                        this.casilla[4][3] = 1;
                        this.casilla[4][4] = 1;
                        this.casilla[4][5] = 1;
                        this.casilla[4][6] = 1;
                        this.casilla[4][7] = 1;
                        this.casilla[4][8] = 1;
                    }

                }

                break;
            case 1:

                for (let fila = 0; fila < 7; fila++) {
                    for (let columna = 0; columna < 12; columna++) {
                        this.casilla[fila][columna] = 0;
                    }
                }
                for (let fil = 0; fil < 7; fil++) {
                    for (let col = 0; col < 12; col++) {
                        //Margenes
                        this.casilla[6][col] = 1;
                        this.casilla[fil][0] = 1;
                        this.casilla[0][fil - 4] = 1;
                        this.casilla[0][fil + 9] = 1;
                        this.casilla[1][fil + 9] = 1;
                        this.casilla[5][11] = 1;
                    }
                }

                break;
            case 2:

                for (let f = 0; f < 7; f++) {
                    for (let c = 0; c < 12; c++) {
                        this.casilla[f][c] = 0;
                    }
                }
                for (let fil = 0; fil < 7; fil++) {
                    for (let col = 0; col < 12; col++) {
                        //Verduras
                        this.casilla[0][fil - 5] = 1;
                        this.casilla[1][fil - 5] = 1;
                        //Mostaza
                        this.casilla[0][fil + 9] = 1;
                        //Ramen
                        this.casilla[5][fil - 5] = 1;
                        this.casilla[6][fil - 5] = 1;
                        this.casilla[4][0] = 1;
                        //Sushis
                        this.casilla[1][3] = 1;
                        this.casilla[1][5] = 1;
                        this.casilla[1][7] = 1;
                        this.casilla[3][3] = 1;
                        this.casilla[3][5] = 1;
                        this.casilla[3][7] = 1;
                        this.casilla[5][3] = 1;
                        this.casilla[5][5] = 1;
                        this.casilla[5][7] = 1;
                        //Salsa soya
                        this.casilla[4][9] = 1;
                        this.casilla[4][10] = 1;
                        this.casilla[5][9] = 1;
                        this.casilla[5][10] = 1;
                    }
                }

                break;

            case 3:

                for (let f = 0; f < 7; f++) {
                    for (let c = 0; c < 12; c++) {
                        this.casilla[f][c] = 0;
                    }
                }

                for (let fil = 0; fil < 7; fil++) {
                    for (let col = 0; col < 12; col++) {

                        //Sushis
                        this.casilla[0][col] = 1;
                        this.casilla[6][col] = 1;
                    }
                }

                break;
        }





    }

    personalizarSalidas(salidaNivel) {

        for (let fil = 0; fil < 7; fil++) {
            for (let col = 0; col < 12; col++) {

                switch (salidaNivel) { //Salidas para cada pantalla que te permiten pasar de nivel
                    case 0:
                        this.casilla[6][5] = 2;
                        this.casilla[6][6] = 2;
                        break;
                    case 1:
                        this.casilla[3][11] = 2;

                        break;
                    case 2:
                        this.casilla[3][11] = 2;

                        break;
                    case 3:
                        this.casilla[3][11] = 2;
                        break;

                }
            }
        }

    }
    mostrar() {

        for (let fil = 0; fil < 7; fil++) {
            for (let col = 0; col < 12; col++) {
                if (this.casilla[fil][col] === 0) { //Zona para caminar
                    fill(255);
                } else if (this.casilla[fil][col] === 1) { //Obstaculos
                    fill(0);
                } else if (this.casilla[fil][col] === 2) { //Salidas
                    fill(67, 214, 133);
                }
                stroke(0);
                rect(col * 100, fil * 100, 100, 100);

            }
        }

    }

    getLocacion(newFil, newCol) {

        return this.casilla[newFil][newCol];

    }

}