function cambiarColor(){
    variable_album= document.getElementById("album");
    variable_album.style.backgroundColor = "blue";
}


function cambiarTamano(){
    const tamano = document.getElementsByClassName("imagen");
    const tamano1= tamano[0]
    tamano1.style.height = "auto";
    tamano1.style.width = "50px";
    console.log(tamano[0]);
}
