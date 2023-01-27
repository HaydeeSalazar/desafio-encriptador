function encriptar(){
    
    var frase = document.getElementById("input").value.toLowerCase();

    
    var textoEncriptado = frase.replace('e', "enter");
    //1.Cuando vuelves a declarar textoEncriptado PIERDES la variable
    //2.Tienes que hacer el replace obre tu variable que va cambiando
    textoEncriptado = textoEncriptado.replace('i', "imes");
    textoEncriptado = textoEncriptado.replace('a', "ai");
    textoEncriptado = textoEncriptado.replace('o', "ober");
    textoEncriptado = textoEncriptado.replace('u', "ufat");

    document.getElementById("resultado").value = textoEncriptado;
}


function desencriptar(){
    var frase = document.getElementById("input").value.toLowerCase();

    
    //gatoiber
    var textoEncriptado = frase.replace("enter",'e');
    //1.Cuando vuelves a declarar textoEncriptado PIERDES la variable
    //2.Tienes que hacer el replace obre tu variable que va cambiando
    textoEncriptado = textoEncriptado.replace("imes",'i');
    textoEncriptado = textoEncriptado.replace("ai",'a');
    textoEncriptado = textoEncriptado.replace( "ober",'o');
    textoEncriptado = textoEncriptado.replace( "ufat",'u');

    document.getElementById("resultado").value = textoEncriptado;
}

function copy(){
    
    const textoResultado = document.getElementById("resultado").value;
    //El navigator es un objeto que hace referencia al navegador en el cual estamos trabajando
    //El objeto navegador TIENE una propiedad que se llama clipboard (portapapeles)
    //El objeto clipboard tiene un metodo que se llama writeText que es el que te permite guardar en el portapapeles
    //del sistema que usas el texto que le mandes de parametros, en este caso textoResultado
    navigator.clipboard.writeText(textoResultado);
}

document.getElementById("input").addEventListener('blur',(event)=>{
    
    var input = document.getElementById("input");
    if(input.value!=""){
        //En este caso, la caja de texto no esta vacia
        //Entonces, quitamos el background para que no estorbe
        input.style.backgroundImage = "none";
    }else{
        //En caso de que la caja de texto SÍ venga vacía
        //Ponemos de nuevo la imagen
        input.style.backgroundImage="url('assets/img/png/fondo-texto.png')";
    }
} );

document.getElementById("input").addEventListener('focus',(event)=>{
    

        input.style.backgroundImage = "none";

});