class Producto {
    constructor(nombre,precio,imagen,descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen=imagen;
        this.descripcion = descripcion;
    }
}


var producto1=new Producto("Taladro","169,95 € ","images/taladro.jpg","TALADRO DE PERCUSION BOSH GSB 20-2 RE. Uno de los más potentes y livianos de la categoría de 750 W Protector de cable articulado: flexibilidad y durabilidad. Carcasa de engranaje metálica y mandril robusto garantizan mayor vida útil a la herramienta.");
var producto2=new Producto("Amoladora","130,99 € ","images/amoladora.jpg","AMOLADORA MAKITA DE 115 MM 1400 W MODELO GA4540C Amoladora Makita de 115 mm 1400W modelo GA4540C con Super Joint System II que suprime las sacudidas que se producen por bloqueos accidentales del disco durante los trabajos de corte o desbaste, arranque suave y velocidad variable.");
var producto3=new Producto("Atornillador","349,99 € ","images/atornillador.jpg","ATORNILLADOR - BATERIA - 18V - MAKITA Capacidad máxima tornillo hexagonal: 6 mm Incluye: BATERIA 18V ION LITIO, CARGADOR, MALETIN, Atornillador a batería BL 18V Litio-ion");
var producto4=new Producto("Lijadora","234,99 € ","images/lijadora.jpg","LIJADORA ORBITAL MILWAUKEE ROS125E <br> Lijadora Roto-orbital con potencia de 300 W, velocidad variable entre 7000-12000 rpm y disco de 125 mm. Lijadora roto-orbital con un excelente rendimiento de lijado gracias a la rotación y oscilación simultáneas del disco.");
var producto5=new Producto("Hidrolavadora", "259.99 €","images/hidrolavadora.jpg","HIDROJET 590 Hidrolavadora Semi Profesional 8 Lts/min 100/130 Bar 3HP 220V <br>Hidrolavadora Hidrojet 590 especialmente diseñada para usos periódicos y de suciedad media para el lavado de superficies no muy extensas brindando excelentes prestaciones de calidad y uso. Está provista de todos los sistemas de seguridad para soportar los frecuentes maltratos que suelen sufrir estas máquinas.");
var producto6=new Producto("Compresor","317,07 ","images/compresor.jpg","COMPRESOR HYUNDAI HYAC100-3 Compresor de fácil uso, compatco y fácilmente transportable. Dispone de asa de agarre para facilitar el tranpsorte con el kit de ruedas integrado. Componentes de alta calidad. Mantenimiento sencillo, se suministra listo para trabajar. Dispone de conector rápido, presostato de conexión y desconexión. Bajo nivel de vibraciones y ruido.");
var productos=[producto1,producto2,producto3,producto4,producto5,producto6];
productos.forEach(element => {
    crearProducto(element);
});



function crearProducto(unProducto){
    var etiquetaDiv1=document.createElement("div");
    etiquetaDiv1.className="col-lg-4 col-md-6 mb-4";

    var etiquetaDiv2=document.createElement("div");
    etiquetaDiv2.className="card h-100";

    var etiquetaA1=document.createElement("a");
    
    var etiquetaImg=document.createElement("img");
    etiquetaImg.className="card-img-top";
    etiquetaImg.src=unProducto.imagen;
    
    etiquetaDiv3=document.createElement("div");
    etiquetaDiv3.className="card-body";
    
    var etiquetaH4=document.createElement("h4");
    etiquetaH4.className="card-title";
    etiquetaH4.textContent=unProducto.nombre;
    //etiquetaH4.innerHTML=unProducto.nombre;

    var etiquetaH5=document.createElement("h5");
    etiquetaH5.innerHTML=unProducto.precio;
    
    var etiquetaP=document.createElement("p");
    etiquetaP.className="card-text";
    etiquetaP.innerHTML=unProducto.descripcion;
    
    var etiquetaButton=document.createElement("button");
    etiquetaButton.style="background-color:green";
    etiquetaButton.innerHTML="AGREGAR AL CARRITO";
    etiquetaButton.className="carrito";
    etiquetaButton.onclick=function(){carrito.agregarProductoCarrito(unProducto)}

    var etiquetaDiv4=document.createElement("div");
    etiquetaDiv4.className="card-footer";
    var etiquetaSmall=document.createElement("small");
    etiquetaSmall.className="text-muted";
    etiquetaSmall.innerHTML="&#9733; &#9733; &#9733; &#9733; &#9734;";

    etiquetaDiv4.appendChild(etiquetaSmall);
    etiquetaDiv3.appendChild(etiquetaH4);
    etiquetaDiv3.appendChild(etiquetaH5);
    etiquetaDiv3.appendChild(etiquetaP); 
    etiquetaA1.appendChild(etiquetaImg);
    etiquetaDiv2.appendChild(etiquetaA1);
    etiquetaDiv2.appendChild(etiquetaDiv3);
    etiquetaDiv2.appendChild(etiquetaButton);
    etiquetaDiv2.appendChild(etiquetaDiv4);
    etiquetaDiv1.appendChild(etiquetaDiv2);
    
    var row=document.getElementById("lista");
    row.appendChild(etiquetaDiv1);

    
}

class Carrito {
    constructor() {
        this.lineasProducto=[];
    }

    agregarProductoCarrito(producto){
        var pos=-1;
        if (this.lineasProducto.length>0){
            this.lineasProducto.forEach(miFuncion);
            function miFuncion(element, indice){
                if(element.nombre==producto.nombre){
                    pos=indice;
                }
            }
        }
        if(pos!=-1){
            this.lineasProducto[pos].cantidad++;
        }
        else{
            var lineaProducto=new LineaProducto(producto.nombre);
            this.lineasProducto.push(lineaProducto);
        }  
        mostrarCarrito();
} 
    }
    


class LineaProducto {
    constructor(nombre) {
        
        this.nombre = nombre;
        this.cantidad = 1;
    }
}
var carrito = new Carrito();


function mostrarCarrito(){
        var tbody=document.getElementById("carrito");
        tbody.innerHTML="";

        carrito.lineasProducto.forEach(element => {
        
        var etiquetaTr=document.createElement("tr");
        
        var etiquetaTd1=document.createElement("td");
        etiquetaTd1.textContent=element.nombre;
        console.log(element.nombre);
        
        etiquetaTr.appendChild(etiquetaTd1);

        var etiquetaTd2=document.createElement("td");
        etiquetaTd2.textContent=element.cantidad+" / ";

        etiquetaButton2=document.createElement("button");
        etiquetaImg2=document.createElement("img");
        etiquetaImg2.width="40";
        etiquetaImg2.height="40";            
        etiquetaButton2.className="delete";
        etiquetaImg2.src="images/cesto-de-basura.png";
        etiquetaButton2.appendChild(etiquetaImg2);
        etiquetaButton2.onclick=function(){borrarProducto(element,this)}

        etiquetaTd2.appendChild(etiquetaButton2);

        etiquetaTr.appendChild(etiquetaTd2);
        tbody.appendChild(etiquetaTr);
    });
    
   
}

function borrarProducto(producto,btn){
    if(producto.cantidad>1){
        producto.cantidad--;
    }
    else{
        var pos=carrito.lineasProducto.indexOf(producto);
        if(pos!=-1){
            carrito.lineasProducto.splice(pos,1);
        }
    }
    mostrarCarrito();
}