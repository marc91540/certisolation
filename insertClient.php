

<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "root", "qualiso");

// Check connection
if($link === false){
  die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$civility = mysqli_real_escape_string($link, $_REQUEST['civility']);
$name = mysqli_real_escape_string($link, $_REQUEST['name']);
$surname = mysqli_real_escape_string($link, $_REQUEST['surname']);
$numberStreet = mysqli_real_escape_string($link, $_REQUEST['numberStreet']);
$nameStreet = mysqli_real_escape_string($link, $_REQUEST['nameStreet']);
$CP = mysqli_real_escape_string($link, $_REQUEST['CP']);
$city = mysqli_real_escape_string($link, $_REQUEST['city']);
$typeLogement = mysqli_real_escape_string($link, $_REQUEST['typeLogement']);
$revenu = mysqli_real_escape_string($link, $_REQUEST['revenu']);
$nbPersonne = mysqli_real_escape_string($link, $_REQUEST['nbPersonne']);
$tel1 = mysqli_real_escape_string($link, $_REQUEST['tel1']);
$tel2 = mysqli_real_escape_string($link, $_REQUEST['tel2']);
$mail = mysqli_real_escape_string($link, $_REQUEST['mail']);
$preference = mysqli_real_escape_string($link, $_REQUEST['preference']);


//$first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']);
//$last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']);
//$email = mysqli_real_escape_string($link, $_REQUEST['email']);

// attempt insert query execution
$sql = "INSERT INTO client (civilite, nom, prenom, numeroRue, nomRue, codePostale, ville, type, revenu, personneFoyer, telephone1, telephone2, mail, disponibilite) VALUES ('$civility','$name','$surname','$numberStreet','$nameStreet','$CP','$city','$typeLogement','$revenu','$nbPersonne','$tel1','$tel2','$mail','$preference')";

if(mysqli_query($link, $sql)){
  echo "Records added successfully.";
} else{
  echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
 
}

// close connection
mysqli_close($link);
?>

