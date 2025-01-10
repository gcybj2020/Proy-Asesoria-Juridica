<?php 

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['telefono']) >= 1 && strlen($_POST['tipocaso']) >= 1) {
	    $name = trim($_POST['name']);
	    $email = trim($_POST['email']);
	    $telefono = trim($_POST['telefono']);
		$tipocaso = trim($_POST['tipocaso']);
		
	    //$consulta = "INSERT INTO datos(nombre, email, fecha_reg) VALUES ('$name','$email','$fechareg')";
	   
	   $consulta = INSERT INTO datos(nombre, email, telefono, tipocaso) VALUES ('$name','$email','$telefono','$tipocaso')";
		$resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {
	    	?> 
	    	<h3 class="ok">¡Te has inscripto correctamente!</h3>
           <?php
	    } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    }   else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>

