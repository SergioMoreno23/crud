$.ajax({
    type:"get",
    url:"http://localhost/crud/api/show.php", dataType: "json",
    success: function(response){
        console.log(response);
        if(response.success == true){
            let table = "";
            table=$("#example").DataTable({
                data:response.data,
                destroy:true,
                columns:[
                    {data:"Contador",title:"id"}, 
                    {data:"Nombre",title:"Nombre"},
                    {data:"Nacimiento",title:"Lugar de Nacimiento"},
                    {data:"Edad",title:"Edad"},
                    {data:"Domicilio",title:"Domicilio"},
                    {data:"Telefono",title:"Telefono"},
                    {data:"Sexo",title:"Sexo"}
                ]
            })
        }

    }
})