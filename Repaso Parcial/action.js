let arregloConRepetidos = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Con repetidos es:", arregloConRepetidos);
let sinRepetidos = arregloConRepetidos.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log("sin repetidos", sinRepetidos );

let arregloanios = [1900,1992,2000];

arregloanios.forEach(anio => {
    if((anio % 4==0)&&(anio % 400==0)||(anio % 100==0))
        console.log("el año",anio,"es bisiesto");
    else{
        console.log("el año",anio,"no es bisiesto");
    }
    
});

class Persona
{
    constructor(nombre,apellido,edad) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    getEdad() {
        return this.edad; 
    }
}

class Item {
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    getPrecio(){
        return this.precio;
    }
    toString(){
        let mensaje='nombre: '+this.nombre+' precio: '+this.precio;
        return mensaje;
    }
}
 
class Carrito{
    constructor(){
        this.arrayItems=[];
    }
    addItem(oneItem){
        this.arrayItems.push(oneItem);
    }
    getTotal(){
        let total=0;
        this.arrayItems.forEach(element => {
            total=total+element.getPrecio();
        });
        return total;
    }
    toString(){
        let mensaje='';
        this.arrayItems.forEach(element => {
            mensaje=mensaje+' producto: '+element.toString();
        });
        return mensaje;
    }
   
}

let unaPersona=new Persona('Federico','Elias',14);
let arrayPersonas=[];
arrayPersonas.push(unaPersona);
unaPersona= new Persona("Allan","Maduro",5);
arrayPersonas.push(unaPersona);
unaPersona= new Persona("Karina","Felice",35);
arrayPersonas.push(unaPersona);
unaPersona=new Persona('Mariela','Cagnoli',30);
arrayPersonas.push(unaPersona);
arrayPersonas.sort((persona1,persona2)=>persona1.getEdad()-persona2.getEdad());
console.log(arrayPersonas);
let item1=new Item('azucar',40);
let item2=new Item('yerba',90);
let item3=new Item('fideos',60);
let carrito=new Carrito();
carrito.addItem(item1);
carrito.addItem(item2);
carrito.addItem(item3);
console.log(carrito.toString());
console.log(carrito.getTotal());

