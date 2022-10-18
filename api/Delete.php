<?php 
    require_once "../Database/Conexion.php";

    class Delete extends Database{
        private $Id;
      

        public function __construct($id)
        {
            parent::__construct();
            $this->Id = $id;

        }

        public function deleteDate(){
            $data = [];
            $message = "";
            $query = "DELETE FROM practica.usuarios WHERE idUsuario = ?";
    
            $result = $this->conn->prepare($query);
            $result->bind_param("i", $this->Id);
            $result->execute();
            if($result){
                $data = ["success"=> true, "message"=>"Se ELIMINO el registro correctamente"];
            }else{
                $data = ["success"=> false, "message"=>"Ocurrio un error al realizar el registro"];
            }
            return json_encode($data);
        }

    }

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;


    $delete = new Delete ($id);

    echo $delete->deleteDate();