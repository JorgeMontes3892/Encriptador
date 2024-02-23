function validartexto(){
  let texto = document.querySelector("#input-texto").value;
  let validador = texto.match(/^[a-z]*$/);

  if (!validador || validador === 0){
      alert("Solo son permitidos letras minusculas, sin acentos y sin espacios")
      location.reload();
      return true;
  }
}

function palabrarepetida(){
  let texto = document.querySelector("#input-texto").value;
  let palabraRepetida = texto.match(/imes/gi)

  if(!palabraRepetida || palabraRepetida ===0)
  return true;
}

function cifrar (){
  if (!validartexto(true)){
  const texto = document.querySelector("#input-texto").value;
  const textoCifrado = texto.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
  }
}

let boton1 = document.querySelector("#btn-cifrar"); boton1.onclick = cifrar;

function desencriptar (){
  if (!validartexto(true)){
  let texto = document.querySelector("#input-texto").value;
  const textoDesencriptado = texto.replaceAll(/ufat/gi,"u").replaceAll(/ober/gi, "o").replaceAll(/enter/gi, "e").replaceAll(/ai/gi, "a").replaceAll(/imes/gi, "i")/*jaimenters = james*/
  document.querySelector(".text-input-salida").value = textoDesencriptado;
  document.querySelector("#input-texto").value;
  }
}
let boton2 = document.querySelector("#btn-decifrar"); boton2.onclick = desencriptar;

function copiar(){
  let texto =  document.querySelector(".text-input-salida");
  navigator.clipboard.writeText(texto.value);
  }

let boton3 = document.querySelector("#btn-copy"); 
  boton3.onclick = copiar
