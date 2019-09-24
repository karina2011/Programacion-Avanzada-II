var arrayString=["hola","chau","avanzada","karina","felice"];
//var arrayString=[];
//var arrayString=["hola","chau","avanzada",4,"karina","felice"];
function capsLockArray(arrayString){
    return new Promise((resolve,reject)=>{
        let error='null';
        let oneString;
        for (let index = 0; index < arrayString.length; index++) {
            oneString = arrayString[index];
            if(typeof oneString =="string"){
                arrayString[index]=oneString.charAt(0).toUpperCase() + oneString.slice(1);
            }
            else{
                error="el arreglo contiene un elemento que no es string";
            }
            
        }
        if(error=='null'){
            resolve(arrayString);
        }
        else{
            reject(error);
        }
    
    })
}


function sortArray(arrayString){
    return new Promise((resolve,reject)=>{
        if(arrayString.length>0){
            resolve(arrayString.sort());
        }
        else{
            reject("el arreglo se encuentra vacio");
        }
    });
}
/*
var secuentialStart= async function(){
    
    arratString= await capsLockArray(arrayString);
    console.log("arreglo con mayusculas: "+arrayString);
    arrayString=await sortArray(arrayString);
    console.log("arreglo ordenado: "+arrayString);
    
};

secuentialStart();*/

var firstPromise=capsLockArray(arrayString)
    .then((arrayCapsLock)=>{
        console.log("arreglo con mayusculas: "+arrayCapsLock);
        var secondPromise=sortArray(arrayCapsLock)
        .then((arraySort)=>{
            console.log("arreglo ordenado: "+arraySort);
        })
        .catch((reason)=>{
            console.log(reason);
        })
    })
    .catch((reason)=>{
        console.log(reason);
    });


