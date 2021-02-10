<?php

function compose($f, $g) // function yung f at g
{
    return function($x) use($f, $g) { return $f($g($x)); };
}

$inc = function($i){
    return $i + 1;
};

$square = function($i){
    return $i * $i;
};

echo compose($inc, $inc)(3);


/*
Let f and g be two one-argument functions. 
The composition f after g is defined to be the 
function x  f(g(x)). Define a procedure compose that implements composition. 
For example, if inc is a procedure that adds 1 to its argument,
*/
?>