<?php
$servername = "localhost";
$username = "root";
$dbname = "laravel";
$password = "";

$conn = new mysqli($servername, $username, $password, $dbname);
$query = "SELECT id, name FROM users";
$result = $conn->query($query) or die(mysqli_error($conn)) ;
$array = array();//create empty array
$id = array();//create empty array
while($row = $result->fetch_array()){//loop to get all results
    $array[] = $row['name'];//grab everything and store inside array
    $id[] = $row['id'];
}
//print_r ($array);


$x = rand(0, (count($array) - 1));
function getCall(){
    
    
    $b = array('Pogi ', 'Cute ', 'Chubby ', 'Babaero ', 'Pagod');
    $a = rand(0, (count($b) - 1));
    return $b[$a];
}



echo "
<input type='text' name='focus' required class='search-box' value='". getCall() ."' placeholder='Enter search term' />
<br> ". ($id[$x]) . " $array[$x]
<a class='close-icon' href='http://localhost/exercise/random.php' type='reset'>Get name<a/>";
?>