import { data } from './mock.js'

function loadData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data.length>0){
            resolve(data)
        }
        else{
            reject("no se pudo encontrar la informacion");
        }
   
    }, 10000)
    })
}
    
function optionSort(){
    loadData()
    .then((response)=>{
            let optionField=document.getElementById("field").value;
            let optionSort=document.getElementById("sort").value;
            sort(response,optionField,optionSort);
            renderTable(response);
    })
    .catch((reason)=>{
        console.log(reason);
    });

}
function sort(data,optionField,optionSort){
    if(optionSort=="asc"){
        data.sort((persona1,persona2)=>(persona1[optionField]>persona2[optionField]) ? 1 : ((persona1[optionField]<persona2[optionField]) ? -1 : 0));     
    }
    else{
        data.sort((persona1,persona2)=>(persona1[optionField]<persona2[optionField]) ? 1 : ((persona1[optionField]>persona2[optionField]) ? -1 : 0));     
    }
}

function renderTable(data) {
    const tbody = document.getElementById("table").getElementsByTagName("tbody")[0]
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild)

    data.forEach(e => {
        const row = tbody.insertRow(-1)
        const id = row.insertCell(-1)
        id.innerHTML = e.id
        const fname = row.insertCell(-1)
        fname.innerHTML = e.first_name
        const lname = row.insertCell(-1)
        lname.innerHTML = e.last_name
        const email = row.insertCell(-1)
        email.innerHTML = e.email
        const dni = row.insertCell(-1)
        dni.innerHTML = e.dni
    })
}

window.onload = () => {
    const sortBtn = document.getElementById("sortBtn")
    sortBtn.addEventListener("click", () => optionSort())
}