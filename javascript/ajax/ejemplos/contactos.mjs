
const plantilla = {
    '<>': 'tr', 'html': [
        {'<>': 'td', 'html': '${nombre'},
        {'<>': 'td', 'html': '${apellidos'}
    ]
};

fetch("http://localhost:3000/contactos")
    .then(response => response.text())
    .then(respuesta => {
        //lsita de contactos
        const contactos = JSON.parse(respuesta);

        $("#tabla").json2html(contactos, plantilla);
    });




