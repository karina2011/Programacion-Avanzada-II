var contComment=0;
class Post
{
    constructor(id,title,body,date)
    {
        this.id=id;
        this.title=title;
        this.body=body;
        this.date=date;
    }
    getId() 
    {
        return this.id;    
    }
}

class Comment
{
    constructor(author,text,post_id)
    {
        this.id=contComment;
        this.author=author;
        this.text=text;
        this.post_id=post_id;
        this.date=Date.now();
        contComment++;
    }
}

function promiseGet(url)
{
    return new Promise(function(resolve,reject)
    {
            var request=new XMLHttpRequest();
            request.open("GET",url);
            request.responseType="json";
            request.onload=function()
                            {
                                getArrayToJson(request,resolve,reject);
                            }
            request.onerror=function()
                            {
                                reject(Error("error no se pudo accder"));
                            }
            request.send();  
    })
    
}

function getArrayToJson(request,resolve,reject)
{
    if(request.status==200){
        var json= request.response;
        var onePost;
        var arrayPost=[];
        if(Array.isArray(json))
        {
            json.forEach(post => 
            {
                onePost=new Post(post.id,post.title,post.body,post.date);
                arrayPost.push(onePost);
            })
        }
        else{
            onePost=new Post(json.id,json.title,json.body,json.date);
            arrayPost.push(onePost);
        }
        resolve(arrayPost);//retorna el arreglo creado en base a json
    }
    else{
        reject(Error("error: "+request.statusText));
    }
}

function showPosts(url)
{
    promiseGet(url).then(arrayPost=>
    arrayPost.forEach(post=>{
        showOnePost(post);
    }))
    .catch((reason)=>{
        console.log("soy catch"+reason);
    })
}

function showOnePost(post)
{
    var etiquetah2=document.createElement("h2");
    etiquetah2.innerHTML=post.title;
    var etiquetah5=document.createElement("h5");
    etiquetah5.innerHTML=post.date;
    var etiquetah6=document.createElement("h6");
    etiquetah6.innerHTML=post.id;
    var etiquetaP=document.createElement("p");
    etiquetaP.innerHTML=post.body;
    var etiquetaDiv=document.getElementById("post");
    
    etiquetaDiv.appendChild(etiquetah2);
    etiquetaDiv.appendChild(etiquetah5);
    etiquetaDiv.appendChild(etiquetah6);
    etiquetaDiv.appendChild(etiquetaP);
   
}

function getOnePostForId(url)
{
    var id=document.form.id.value
    url=url+id;
    promiseGet(url).then(onePost=>
                        {
                            if(onePost[0].getId()==id)
                            {
                                var etiquetaDiv=document.getElementById("post");
                                etiquetaDiv.innerHTML="";
                                showOnePost(onePost[0]);
                                
                            }          
                        })
                        .catch((reason)=>{
                            var etiquetaDiv=document.getElementById("post");
                            etiquetaDiv.innerHTML="";
                            etiquetaDiv.innerHTML="el id no existe"
                            console.log("el id no existe"+reason);
                        })
                
                        
}

function promisePost(url)
{
    return new Promise(function(resolve,reject)
    {
            var request=new XMLHttpRequest();
            request.open("POST",url);
            request.onload=function()
                            {
                                resolve(request.response);
                            }
            request.onerror=function()
                            {
                                reject(Error("error no se pudo accder"));
                            }
            request.send();  
    })
    
}

function createPost(url)
{
    var title1=document.getElementById("titulo").value;
    var body1=document.getElementById("posteo").value;
    url+="?title="+title1+"&body="+body1;
    promisePost(url).then(alert("title: "+title1+" body: "+body1));
    
}


