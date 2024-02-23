const textoUsuario = document.querySelector("#input-texto")
const textoSalida = document.querySelector(".text-input-salida")
const matriz_code = [
   ["e","enter"], //0
   ["i", "imes"], //1
   ["a", "ai"], //2 
   ["o", "ober"], //3
   ["u", "ufat"], //4
];

const matriz_code_desencriptar = [
    ["enter","e"], //0
    ["ai", "a"], //1
    ["imes", "i"], //2
    ["ober", "o"], //3
    ["ufat", "u"], //4
];

function validartexto(){
    let texto = document.querySelector("#input-texto").value;
    let validador = texto.match(/^[a-z]*$/);
  
    if (!validador || validador === 0){
        alert("Solo son permitidos letras minusculas, sin acentos y sin espacios")
        location.reload();
        return true;
    }
  }

function btncifrar(){
    const texto =  cifrar(textoUsuario.value);
    textoSalida.value = texto;
}

function cifrar(textoCifrado) {
    if(!validartexto(true)){
    for (let i = 0; i < matriz_code.length; i++) {
        if (textoCifrado.includes(matriz_code[i][0])) {
        textoCifrado = textoCifrado.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
        );
        }
    } 
    return textoCifrado
}
}


function btndesencriptar(){
    const texto = desencriptar(textoUsuario.value);
    textoSalida.value = texto;
}

function desencriptar(textodesencriptado) {
    if(!validartexto(true)){
    for (let i = 0; i < matriz_code_desencriptar.length; i++) {
        if (textodesencriptado.includes(matriz_code_desencriptar[i][0])) {
        textodesencriptado = textodesencriptado.replaceAll(
        matriz_code_desencriptar[i][0],
        matriz_code_desencriptar[i][1],
        );
        }
    } 
    return textodesencriptado
    }
}

function btncopiar(){
    const copy = copiar(textoUsuario.value)
    textoSalida = copy
}

function copiar(){
    let texto =  document.querySelector(".text-input-salida");
    navigator.clipboard.writeText(texto.value);
}