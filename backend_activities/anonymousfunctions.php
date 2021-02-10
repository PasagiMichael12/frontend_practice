<?php

$x = 4;
    $getNum = function () use ($x)
    {
        
        return $x += 5;
    };

    function double ($getNum){  
        return function() use ($getNum)  
        {  return $getNum;  }; 
    }

    echo double(double($getNum)($getNum))()() ;

#Define a procedure double that takes a procedure of one argument as argument 
#and returns a procedure that applies the original procedure twice.


?>

