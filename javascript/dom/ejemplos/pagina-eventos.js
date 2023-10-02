window.addEventListener("load", inicializarEventos);



function inicializarEventos(){
    const boton1 = document.getElementById("boton1");

    boton1.addEventListener("click", (enento)=> {

        alert("boton 1 pulsado")

    });

    boton1.addEventListener("click", onBoton1Click);

    function onBoton1Click(){
        alert("boton 1 pulsado");
    }
}
