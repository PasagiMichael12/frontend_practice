<?php
$arr = array(1,2,3,4);

$square = function($x) { return $x*$x; };

function map($fn, $a)
{
    $array = array();
    for($i = 0; $i < count($a); $i++){
        $array[$i] = $fn($a[$i]);
    }
    
    return $array;
}

print_r(map($inc = function($x) { return $x+1; }, $arr));
echo "<br>";
print_r(map($inc, $arr));

?>