<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type,Content-Range,Content-Disposition,Content-Description');
header('Content-type: application/json');
require_once "../Database/Conexion.php";

class Insert extends Database{
    private $Nombre ; 
    private $Nacimiento ;
    private $Edad ;
    private $Domicilio ;
    private $Telefono ;
    private $Sexo ;
    
    public function __construct($Nombre,$Nacimiento,$Edad,$Domicilio,$Telefono,$Sexo){
        parent::__construct();
        $this->Nombre = $Nombre;
        $this->Nacimiento = $Nacimiento;
        $this->Edad = $Edad;
        $this->Domicilio = $Domicilio;
        $this->Telefono = $Telefono;
        $this->Sexo = $Sexo;
    }

    public function insertData()
    {
        $data = [];
        $message = "";
        $query = "INSERT INTO practica.usuarios (Nombre, Nacimiento, Edad, Domicilio, Telefono, Sexo)
        VALUES (?,?,?,?,?,?)";

        $result = $this->conn->prepare($query);
        $result->bind_param("ssisss", $this->Nombre,$this->Nacimiento, $this->Edad, $this->Domicilio, $this->Telefono,$this->Sexo);
        $result->execute();
        if($result){
            $data = ["success"=> true, "message"=>"Se inserto el registro correctamente"];
        }else{
            $data = ["success"=> false, "message"=>"Ocurrio un error al realizar el registro"];
        }
        return json_encode($data);
    }

}

$data = json_decode(file_get_contents("php://input"));
$Nombre = $data->nombre; 
$Nacimiento = $data->nacimiento;
$Edad = $data->edad;
$Domicilio = $data->domicilio;
$Telefono = $data->telefono;
$Sexo = $data->sexo;


$insertar = new Insert($Nombre,$Nacimiento,$Edad,$Domicilio,$Telefono,$Sexo);

echo $insertar->insertData();