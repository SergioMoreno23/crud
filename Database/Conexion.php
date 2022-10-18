<?php

class Database{ 

  public $conn;

  function __construct(){ 
      $servername = "localhost";
      $username = "root";
      $password = "";
      

      // Create connection
    $this->conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($this->conn->connect_errno) {
      die("Connection failed: " . $this->conn->connect_errno);
    }
  }
    
}


?> 