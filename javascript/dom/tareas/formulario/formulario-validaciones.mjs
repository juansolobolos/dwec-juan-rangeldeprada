window.addEventListener("load", () => {
    const helper = document.getElementById("helper");
    
    
    document.querySelectorAll("input").forEach(element => {
        element.addEventListener("blur", validar);
    });
});



function validar(evento){
    let entradas = {"nombre":"El nombre no debe esta vacio", "apellidos":"El campo apellidos no debe estar vacio", 
    "nif":"Debe introducir un DNI valido", "email":"Debe introducir un email valido", "password2":"Ambas contraseñas deben ser iguales"};
    let id = evento.target.id;
    let contenido = evento.target.value;
    let fallo = false;
    switch(id){
        case "nombre":
            if(contenido.trim() == ""){
                fallo = true;
            }else{
                fallo = false;
            }
            break;
        case "apellidos":
            if(contenido.trim() == ""){
                fallo = true;
            }else{
                fallo = false;
            }
            break;
        case "nif":
            let patronDNI = /^[0-9]{8}[A-Za-z]$/;
            if(patronDNI.test(contenido)){
                fallo = false;
            }else{
                fallo = true;
            }
            break;
        case "email":
            if(contenido.includes("@")){
                fallo = false;
            }else{
                fallo = true;
            }
            break;
        case "password2":
            if(document.getElementById("password1").value == contenido){
                fallo = false;
            }else{
                fallo = true;
            }
            break;
    }
    if(fallo == true){
        helper.innerText = entradas[id];
        evento.target.style.backgroundColor = "red";
    }else{
        helper.innerText = "";
        evento.target.style.backgroundColor = "white";
    }
    
    
}