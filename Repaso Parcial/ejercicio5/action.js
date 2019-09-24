function getFormvalue(){
    let firstName=document.getElementsByName('fname')[0].value;
    if(firstName==''){
        alert('debe completar el primer nombre');
    }
    else{
        let lastName=document.getElementsByName('lname')[0].value;
        if(lastName==''){
            alert('debe completar el segundo nombre');
        }
    }
}