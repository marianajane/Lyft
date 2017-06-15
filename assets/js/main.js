document.getElementsByClassName("sort").addEventListener("click", agregarNumber);

function agregarNumber(elemento){
          var historial1 = document.getElementById("resultado");
           historial1.value += elemento.getAttribute("value");
}