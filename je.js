const url = 'http://localhost:8087/api/robos'
const listarrobos =async()=>{
    let body= document.getElementById('contenido');
    if(body){
        let mensaje=''

        fetch(url)
        .then(res=> res.json())
        .then(function(data){
            let listarrobos=data.robo
            listarrobos.map((robo)=>{
                mensaje+= 
                `<td>${robo.Direccion}</td>`+
                `<td>${robo.Latitud}</td>`+
                `<td>${robo.Longitud}</td>`+
                `<td>${robo.Descripcion}</td>`+
                `<td>${robo.Fecha}</td>`+

                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(robo)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${robo._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }
            )
        })

        }
    }
listarrobos()
const registrarRobos = async() =>{
    let Direccion = document.getElementById('direccion').value
    let Latitud = document.getElementById('latitud').value
    let Longitud=document.getElementById('longitud').value
    let Descripcion = document.getElementById('descripcion').value

    

    let robo = {
        Direccion: Direccion,
        Latitud:Latitud,
        Longitud:Longitud,
        Descripcion:Descripcion,

    }

    if(Latitud >= 6.13 && Latitud <= 6.217 || Longitud >= -75.34 && Longitud <= -75.567) {
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(robo),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    else{
        alert('La Latitud o Longitud no son correctos')
    }
    console.log(robo)
}
const editar = (robo) =>{
    let _id =document.getElementById('_id').value = ''
    let Direccion = document.getElementById('direccion').value=''
    let Latitud = document.getElementById('latitud').value=''
    let Longitud=document.getElementById('longitud').value=''
    let Descripcion = document.getElementById('descripcion').value=''

    document.getElementById('_id').value=robo._id
    document.getElementById('direccion').value=robo.Direccion
    document.getElementById('latitud').value=robo.Latitud
    document.getElementById('longitud').value=robo.Longitud
    document.getElementById('descripcion').value=robo.Descripcion

}
const actualizarUsuario = async() =>{
    //Captura de valores de datos enviados desde el formulario
    let Direccion = document.getElementById('direccion').value
    let Latitud = document.getElementById('latitud').value
    let Longitud=document.getElementById('longitud').value
    let Descripcion = document.getElementById('descripcion').value

    

    let robo = {
        _id: document.getElementById('_id').value,
        Direccion: Direccion,
        Latitud:Latitud,
        Longitud:Longitud,
        Descripcion:Descripcion,

        }


    if(Latitud >= 6.13 && Latitud <= 6.217 || Longitud >= -75.34 && Longitud <= -75.567  ){
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(robo),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    else{
        alert('La Latitud o Longitud no son correctos')
    }
}
const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            //Captura de valores de datos enviados desde el formulario
    let robo = {
        _id: _id
    }
    
    

       fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(robo),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })     
    }
}

if(document.querySelector('#btnRegistrar'))
{
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarRobos)
}
if(document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
    .addEventListener('click', actualizarUsuario)

}



