var url="https://utn-2019-avanzada2-tp5.herokuapp.com/records";
class Registro{
    constructor(id,email,genero, first_name,last_name,last_conected_ip)
    {
        this.id=id;
        this.email=email;
        this.genero=genero;
        this.nombre=first_name;
        this.apellido=last_name;
        this.ip=last_conected_ip;
    }
}
var primeraParte=[];
var registros;

function promesaObtenerRegistros()
{
    return new Promise(function(resolve, reject)
    {
        var request=new XMLHttpRequest();
        request.open("GET",url);
        request.responseType="json";
        request.onload=function()
                       {
                           pasarJsonAarreglo(request,resolve);
                       }
        request.onerror= function()
                        {
                            reject(Error("error"))
                        }
        request.send();
    })
}

function pasarJsonAarreglo(request,resolve)
{
    if(request.status==200){
        var json= request.response;
        var unRegistro;
        var arregloRegistro=[];
        
        json.forEach(registro => {
            unRegistro=new Registro(registro.id,registro.email,registro.gender,registro.first_name,registro.last_name,registro.last_connected_ip);
            arregloRegistro.push(unRegistro);
            
        });
        //console.log(arregloRegistro.length);
        resolve(arregloRegistro);//retorna el arreglo creado en base a json
    }
    else{
        reject(Error("error: "+request.statusText));
    }
}

function obtenerRegistrosPorPagina(){
    
    promesaObtenerRegistros().then(registros => 
    {
        var cantidadRegistros=registros.length;
        cantidadPaginas= cantidadRegistros/20;
        //cantidadPaginas=3;
        //console.log(cantidadPaginas);
        var desde=0;
        var hasta=desde+20;
        for (let index = 1; index <= cantidadPaginas; index++) 
        {
            var parteArreglo = registros.slice(desde,hasta);
            console.log(parteArreglo);
            crearPagina(parteArreglo,index);
            desde=hasta;
            hasta=hasta+20;
        }

    })
    
}

function crearPagina(parteArreglo,numero)
{
    var etiquetaUl=document.getElementById("pagination");
    var etiquetaLi=document.createElement("li");
    var etiquetaA=document.createElement("a");
    etiquetaA.href="#";
    if(numero==1)
    {
        /*var etiquetaLi1=document.createElement("li");
        etiquetaLi1.className="disabled";
        var etiquetaA1=document.createElement("a");
        etiquetaA1.href="#";
        etiquetaA1.innerHTML="&laquo;";
        console.log(etiquetaA1);
        etiquetaLi1.appendChild(etiquetaA1);
        etiquetaUl.appendChild(etiquetaLi1);*/
        dibujarTabla(parteArreglo);

       /* var etiquetaLi2=document.createElement("li");
        var etiquetaA2=document.createElement("a");
        etiquetaA2.href="#";
        etiquetaA2.innerHTML="&raquo;";
        etiquetaLi2.appendChild(etiquetaA2);
        etiquetaUl.appendChild(etiquetaLi2);*/
    }
    etiquetaA.onclick=function(){dibujarTabla(parteArreglo)};
    etiquetaA.name =numero;
    etiquetaA.innerHTML=numero;
    etiquetaLi.appendChild(etiquetaA);
    
    etiquetaUl.appendChild(etiquetaLi);
    
}


function dibujarTabla(registros){
    var tbody=document.getElementById("datos");
    tbody.innerHTML="";
    registros.forEach(registro=>{


        //tbody=document.getElementById("datos");
        
        var etiquetaTr=document.createElement("tr");
        
        var etiquetaTd1=document.createElement("td");
        etiquetaTd1.textContent=registro.id;
        
        etiquetaTr.appendChild(etiquetaTd1);

        var etiquetaTd2=document.createElement("td");
        etiquetaTd2.textContent=registro.email;

        etiquetaTr.appendChild(etiquetaTd2);

        var etiquetaTd3=document.createElement("td");
        etiquetaTd3.textContent=registro.genero;

        etiquetaTr.appendChild(etiquetaTd3);

        var etiquetaTd4=document.createElement("td");
        etiquetaTd4.textContent=registro.nombre;

        etiquetaTr.appendChild(etiquetaTd4);

        var etiquetaTd5=document.createElement("td");
        etiquetaTd5.textContent=registro.apellido;

        etiquetaTr.appendChild(etiquetaTd5);

        var etiquetaTd6=document.createElement("td");
        etiquetaTd6.textContent=registro.ip;

        etiquetaTr.appendChild(etiquetaTd6);

        tbody.appendChild(etiquetaTr);
    
    })
}

window.onload = () => obtenerRegistrosPorPagina();
