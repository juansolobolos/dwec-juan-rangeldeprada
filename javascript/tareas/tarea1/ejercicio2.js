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
        let charact = "";
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


let miVersion = new MostrarInformacion(fechaEntrega, nombreCiclo, nombreModulo, curso, nombreAlumno, edad);
miVersion.mostrarVersion();