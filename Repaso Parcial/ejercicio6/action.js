//funcion que llama a las funciones de crear thead y tbody para crear la tabla
function getTable(){
    let totalColum=document.getElementById("totalColum").value;
    let totalRow=document.getElementById("totalRow").value;
    if(totalColum){
        if (totalRow){  
            createThead(totalColum);
            createTbody(totalRow,totalColum);
        }
        else{
            alert("no existe la cantidad de filas");
        }
    }
    else{
        alert("no existe la cantidad de columnas");
       
    }
}


//funcion que crea la cabecera de una tabla en funcion del arreglo de cabeceras que recibe por parametro

function createThead(totalColum){
    let trEtiqueta=document.createElement("tr");
    let thEtiqueta;
    
    for (let i = 0; i < totalColum; i++) {
        thEtiqueta=document.createElement("th");
        thEtiqueta.innerHTML="column"+i;
        trEtiqueta.appendChild(thEtiqueta);
    }
    let thHtml=document.getElementById("thead");
    if(thHtml){
        thHtml.appendChild(trEtiqueta);
    }
    else{
        alert("la etiqueta thead que intenta obtener no existe o el nombre de id no es el correcto");
    }
}

//funcion que crea el cuerpo de la tabla recibiendo como parametro la cantidad de filas y columnas
function createTbody(totalRow,totalColum){
    let tbodyHtml=document.getElementById('tbody');
    let trEtiqueta;
    let tdEtiqueta;
    if(tbodyHtml){
        for (let i1 = 0; i1 < totalRow; i1++) {
            trEtiqueta=document.createElement("tr");
            for (let i2 = 0; i2< totalColum ; i2++){
                tdEtiqueta = document.createElement("td");
                tdEtiqueta.innerHTML="***";
                trEtiqueta.appendChild(tdEtiqueta);
            }
            tbodyHtml.appendChild(trEtiqueta);
        }
    }
    else{
        alert("la etiqueta tbody no existe o tiene mal el nombre de id");
    }
}
