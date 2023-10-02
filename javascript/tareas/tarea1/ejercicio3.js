"use strict";
const prompt = require('prompt-sync')();
const fechaEntrega = "02/10/2023";
const nombreCiclo = "Desarrollo de aplicaciones web";
const nombreModulo = "Desarrollo web entorno cliente";
const curso = 2;
const nombreAlumno = "Juan Rangel de Prada";
const edad = 26.9;

class MostrarInformacion{

    constructor(fechaEntrega, nombreCiclo, nombreModulo, curso, nombreAlumno, edad){
        this.fechaEntrega = fechaEntrega;
        this.nombreCiclo = nombreCiclo;
        this.nombreModulo = nombreModulo;
        this.curso = curso;
        this.nombreAlumno = nombreAlumno;
        this.edad = edad;
    }


    mostrarVersion() {
        console.log(this.imprimirCaracteres("-", 10, "#", 5, "?", 15));
        console.log("Fecha de entrega = " + fechaEntrega);
        console.log("Nombre del ciclo = " + nombreCiclo);
        console.log("Nombre del modulo = " + nombreModulo);
        console.log("Curso = " + curso);
        console.log("Nombre del alumno = " + nombreAlumno);
        console.log("Edad = " + edad);
        console.log(this.imprimirCaracteres("+", 7, "{", 5, "¿", 14));
    }

    imprimirCaracteres(a, na, b, nb, c, nc){
        var charact = "";
        for(let n=0;n<na;n++){
            charact += a;
        }
        for(let n=0;n<nb;n++){
            charact += b;
        }
        for(let n=0;n<nc;n++){
            charact += c;
        }
        return charact;
    }
    

}

class Juego{

    jugar(){

        let numeroMisterioso = prompt("Introduzca un numero secreto entre 0 y 100: ");
        /* while (Number.isInteger(numeroMisterioso) == false){
            numeroMisterioso = prompt("Introduzca un numero valido: ");
        } */
        while(numeroMisterioso < 0 || numeroMisterioso > 100){
            numeroMisterioso = prompt("Introduzca un numero valido: ");
        }
    
        let intentos = 0;
        let acierto = false;
        while(intentos <10 && acierto == false){
    
            let intento = prompt("Introduzca un numero entre 0 y 100: ");
            while(intento < 0 || intento > 100 /* || Number.isInteger(intento) == false */){
                intento = prompt("Introduzca un numero valido: ");
            }
            intentos++;
            if(intento == numeroMisterioso){
                acierto = true;
            }else if(intento < numeroMisterioso){
                console.log("El numero misterioso es mayor que el introducido.");
            }else{
                console.log("El numero misterioso es menor que el introducido.");
            }
    
        }
    
        if(acierto == true){
            console.log("Has ganado!");
        }else{
            console.log("Has perdido");
        }
    }
}



var miVersion = new MostrarInformacion(fechaEntrega, nombreCiclo, nombreModulo, curso, nombreAlumno, edad);
miVersion.mostrarVersion();
let nuevoJuego = new Juego();
nuevoJuego.jugar();