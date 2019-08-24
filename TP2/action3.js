var id=0;
function insertRow(elemento){
    var tbody = document.getElementById("lista");
    var hilera = document.createElement("tr");
    hilera.className="listElement";
    var celda1 = document.createElement("td");
    celda1.innerHTML=elemento.value;
    hilera.appendChild(celda1);
    var celda2=document.createElement("td");
    celda2.innerHTML="se agrego la fila nro:"+id;
    hilera.appendChild(celda2);
    var celda3=document.createElement("td");
    
    var input=document.createElement("input");
    input.type="button";
    input.id="deleteDep";
    input.value="Borrar";
    input.onclick=function(){deleteRow(this)};
    console.log(input);
    celda3.appendChild(input);
    hilera.appendChild(celda3);
    tbody.appendChild(hilera);
    id++;
}
function deleteRow(btn) {
    var row = btn.parentNode.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

function highlight()
{
    var element=document.getElementsByClassName(m="myClass");
    for (let index = 0; index < element.length; index++) {
        var unElement = element[index];
    }
    console.log(element);
}
