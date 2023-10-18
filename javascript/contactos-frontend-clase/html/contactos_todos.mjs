const plantilla = {
    '<>': 'tr', 'html': [
        {'<>': 'th', 'scope': 'row', 'html':'${id'},
        {'<>': 'td', 'html': '${nombre'},
        {'<>': 'td', 'html': '${apellidos'}
    ]
};

fetch("http://localhost:3000/contactos")
    .then(response => response.text())
    .then(respuesta => {
        //lsita de contactos
        const contactos = JSON.parse(respuesta);

        $("#tablaContactos").json2html(contactos, plantilla);
    });


    //implementacion de las busquedas
    document.getElementById("btBuscar").addEventListener("click", (evento) => {
        
        //Obtengo la cadena de texto en el campo
        const iFiltro = document.getElementById("iFiltro");
        const filtro = iFiltro.value;
        

        //Descargamos los datos
        fetch('http://localhost:3000/contactos?q=${filtro}')
        .then(response => response.text())
        .then(datos => {


            //lsita de contactos
            const contactos =JSON.parse(datos);

            $('#tablaContactos').empty();
            $('#tablaContactos').json2html(contactos, plantilla);
        })

    });
