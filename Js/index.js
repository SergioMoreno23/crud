 
    $( document ).ready(function() {
        inicio();
        clear();
    });


    let enviar = document.getElementById("enviar");

    enviar.addEventListener("click",function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let edad = document.getElementById("edad").value;
    let domicilio = document.getElementById("domicilio").value;
    let telefono = document.getElementById("telefono").value;
    let sexo = document.getElementById("sexo").value;

    let data={
        nombre,nacimiento,edad,domicilio,telefono,sexo
    }
    console.log(data);


    $.ajax({
        type: "POST",
        url: "http://localhost/crud/api/insert.php",
        data:JSON.stringify(data),
        dataType: "json",

        success: function (response) {
            console.log(response);
            if(response.success){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                  inicio();
                  clear();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
        },
        complete: function(){
            $("#exampleModal").modal("hide");
        }
    });

    

})


    let actualizar = document.getElementById("actualizar");
    actualizar.addEventListener("click",function(e){

    e.preventDefault();
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre2").value;
    let nacimiento = document.getElementById("nacimiento2").value;
    let edad = document.getElementById("edad2").value;
    let domicilio = document.getElementById("domicilio2").value;
    let telefono = document.getElementById("telefono2").value;
    let sexo = document.getElementById("sexo2").value;

    let data={
       id,nombre,nacimiento,edad,domicilio,telefono,sexo
    }

    console.log(data);
    $.ajax({
        type: "POST",
        url: "http://localhost/crud/api/update.php",
        data:JSON.stringify(data),
        dataType: "json",
        
        success: function (response) {
            console.log(response);
            if(response.success){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                  inicio();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
        },
        complete: function(){
            $("#exampleModal1").modal("hide");
        }
    });

})

function inicio(){
    $.ajax({
        type:"get",
        url:"http://localhost/crud/api/show.php", dataType: "json",
        
        success:function(response){
           console.log(response);
            if(response.success == true){
                let table = "";
                table=$("#example").DataTable({
                    data:response.data,
                    destroy:true,
                    columns:[
                        {data:"Contador",title:"Id"}, 
                        {data:"Nombre",title:"Nombre"},
                        {data:"Nacimiento",title:"Lugar de Nacimiento"},
                        {data:"Edad",title:"Edad"},
                        {data:"Domicilio",title:"Domicilio"},
                        {data:"Telefono",title:"Telefono"},
                        {data:"Sexo",title:"Sexo"},
    
                        {data:null,render: function (data){
                            
                            return `<button onclick="update('${data.idUsuario}','${data.Nombre}','${data.Nacimiento}','${data.Edad}','${data.Domicilio}','${data.Telefono}','${data.Sexo}')" data-bs-toggle="modal" data-bs-target="#exampleModal1" type="button" class="btn btn-primary"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg></button>
    
                            <button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                          </svg></button>`                    
                            }, title:"acciones"
                        }
                    ]
                })
            }
    
        },complete: function(){
            console.log("dnienideni")
        }
    })

}

function clear() {
    $("#nombre").val(""); 
    $("#nacimiento").val("");
    $("#edad").val("");
    $("#domicilio").val("");
    $("#telefono").val("");
    $("#sexo").val("");
  }

  function update(id,nombre,nacimiento,edad,domicilio,telefono,sexo){
    console.log("entro")
    console.log(id,nombre,nacimiento,edad,domicilio,telefono,sexo);

    $("#id").val(id);
    $("#nombre2").val(nombre);
    $("#nacimiento2").val(nacimiento);
    $("#edad2").val(edad);
    $("#domicilio2").val(domicilio);
    $("#telefono2").val(telefono);
    $("#sexo2").val(sexo);
  }


