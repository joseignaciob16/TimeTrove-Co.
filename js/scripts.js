
function validarFormulario() {
    var usuario = document.getElementById("txt-user").value;
    var contraseña = document.getElementById("txt-password").value;


    if (usuario === "" || contraseña === "") {
        alert("¡Ingrese usuario y contraseña!");
        return false; 
    }
    return true; 
}


function validarRegistro(){
    var usuario = document.getElementById("txt-nombre").value;
    var contraseña = document.getElementById("txt-password").value;
    var email = document.getElementById("txt-email").value;

    if (usuario === "" || email === "" || contraseña === "") {
        alert("¡Ingrese todos los datos!");
        return false; 
    }

    alert("¡USUARIO CREADO EXTIOSAMENTE!");
    return true; 
}

function realizarCompra() {
    alert('Gracias por tu compra');
    localStorage.removeItem('carrito');
    location.reload(); 
}


