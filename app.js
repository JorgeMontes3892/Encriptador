function cifrar (){
    let texto = document.querySelector("#input-texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }


    
let boton1 = document.querySelector("#btn-cifrar"); boton1.onclick = cifrar;

function desencriptar (){
    let texto = document.querySelector("#input-texto").value;
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

}

let boton2 = document.querySelector("#btn-decifrar"); boton2.onclick = desencriptar;

 function copiar(){
    let texto =  document.querySelector(".text-input-salida");
    navigator.clipboard.writeText(texto.value);
    }

    let boton3 = document.querySelector("#btn-copy"); 
    boton3.onclick = copiar


 