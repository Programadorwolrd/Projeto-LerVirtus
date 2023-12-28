
// Variaveis que serão utilizadas
button.onclick = function () {
    let paginas = document.querySelector("#inuput1");
    let dias = document.querySelector("#inuput2");
    let valor1 = paginas.value;
    let valor2 = dias.value;



    if (valor1 < 0 || valor2 <= 0) {
  alert("Digite valores válidos para páginas e dias.");
}

    else {
     let resultado = valor1 / valor2; 
     inuput3.value = resultado;
    


}};




