<?php

function repeated($f, $n) // function yung f at g
{
    return function($x) use($f, $n) { 
        //return ($f($x)) ;
        $ans = ($f($x));
        for($i = 1;$i < $n; $i++){
            $ans = ($f($ans)) ;
        }   
        return $ans;
    };
}

$square = function($i){ 
    return $i * $i;
};  

$inc = function($i){ 
    return $i + 1;
}; 

echo repeated($square, 1)(5);

?>