<?php

$a = 123; $b = 213;

function gcd(int $a, int $b){

    /*Get the GCD $t = temporary storage of denominator
     $b = denominator
     $a = numerator
    */
    if($a < $b)
    {
    while ($b != 0) // while the remainder of $b / $a not equal to zero
        {
        $t = $b; // temporary holds the present value of b;
        $b = $a % $b; // b will be assigned with the new value which is the remainder of b/a
        $a = $t; // a will be assigned the past value of b which is stored in the temp
        }
    return $a;
    }
    else
    {
        $temp = $a; $a = $b; $b = $temp; //exchange
        while ($b != 0) // while the remainder of $b / $a not equal to zero
        {
           $t = $b; // temporary holds the present value of b;
           $b = $a % $b; // b will be assigned with the new value which is the remainder of b/a
           $a = $t; // a will be assigned the past value of b which is stored in the temp
        }
        return $a;
    }
}
$lowestNum = $a / gcd($a, $b);
$lowestDen = $b / gcd($a, $b);
echo "$a and $b <br>Greatest Common Denominator is: " . gcd($a, $b) . "<br> <u> $lowestNum </u> <br> $lowestDen <br>";

?>