<?php 
    require_once "../Database/Conexion.php";

    class Show extends Database{

        public function __construct(){
            parent::__construct();

        }

        public function showalldata() {
            $data = [];
            $query = "SELECT idUsuario, Nombre, Nacimiento, Edad, Domicilio, Telefono, Sexo FROM practica.usuarios";
            $result = $this->conn->prepare($query);
            $result->execute();
            $result->store_result();
            $conta = 0;

            if($result->num_rows>0){

                //$contador = $result->num_rows;
               

                $data["success"]=true;

                $result->bind_result($Id, $Nombre, $Nacimiento, $Edad, $Domicilio, $Telefono, $Sexo);

                while($result->fetch()){

                   // if($contador>0){
                        $conta++;
                   // }

                    $data["data"][]=[

                        "Contador"=>$conta, "idUsuario"=>$Id, "Nombre"=>$Nombre, "Nacimiento"=>$Nacimiento, "Edad"=>$Edad, "Domicilio"=>$Domicilio, "Telefono"=>$Telefono, "Sexo"=>$Sexo
                    ];

                }
            }else{
                $data["success"]=true;
                $data["message"] = "no existen registros";
            }
            return json_encode($data);
        }
    
    }

    $showall = new Show();

   echo $showall->showalldata();

    