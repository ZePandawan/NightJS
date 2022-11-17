<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Connexion</title>
</head>
<body>
<h1>Connexion aux services de NightJS</h1>


<?php
//-----------------------Initialisation du bot----------------------------------//
	

//------------------------Connexion à la BDD------------------------------------//
	$servername = 'mysql-nightjs.alwaysdata.net';
	$username = 'nightjs';
	$password = 'toutnwar619';

	//On établit la connexion
    $conn = new mysqli($servername, $username, $password);

    //On vérifie la connexion
    if($conn->connect_error)
    {
        echo('failed');
        die('Erreur : ' .$conn->connect_error);
    }
    echo 'Connexion BDD réussie';
//-------------------------------------------------------------------------------//
//------------------------Connexion avec User------------------------------------//
	if(isset($_POST['submit']))
	{ 

    	//Récupération des données du formulaire
		$user = $_POST['user'];
		$mdp = $_POST['mdp'];

	}
	else
	{
?>
	<form action="connexion.php" method="post">
		<label>Username</label> 
		<input type="text" name="user"> <br/>
		<label>Password</label>
		<input type="text" name="mdp"> <br/>
		<input type="submit" name="submit" value="Connexion">
	</form>
<?php
	}
//--------------------------------------------------------------------------------//
?>
</body>
</html>