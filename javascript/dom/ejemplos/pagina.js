/* const divHola = document.getElementById((hola))
console.log(divHola) */


//get element by id
const parrafo2 = document.getElementById("parrafo2")
console.log(parrafo2);
parrafo2.textContent = ("adios mundo")

//get elements by tagname
const pes = document.getElementsByTagName("p");
for(let p of pes){
    console.log(p.textContent);
}

//se pueden anidar get elements para una busqueda concreta
//const a = document.getElementsByClassName("ninio").getElementsByName("carlitos");










