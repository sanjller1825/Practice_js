console.log("Hola Mundo");
//Para ejecutar en consola se usa node .\archivo.js
//Funciones
function saludar(nombre){
    return "Hola, " + nombre;
}

function despedir(){
    return "Adiós."
}

console.log(saludar("Santiago"))
console.log(despedir())

//Errores
try{
    let resultado = noExiste();
}catch(error){
    console.log("Ocurrió un error: ", error.message);
}

//generar un entorno virtual en phyton(sandbox)
//py -m venv practice_ia_js  
//revisar como funciona