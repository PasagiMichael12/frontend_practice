<?php

Class Bank{
	private $balance;
	function __construct($balance){
		$this->balance = $balance;
	}
	function getBalance(){
		return $this->balance;
	}
	function deposit($amount){
		return $this->balance += $amount;
		
	}
function withdraw($amount){
if($amount > $this->balance){
	throw new Exception("Invalid Transaction: Amount must be less than balance");
	
}
else{
	return $this->balance -= $amount;
}
}
	function transfer($amount, $receiver){
		
		
		$this->withdraw($amount);
		$receiver->deposit($amount);
		
	}
	function exchange($receiver){
		//return $receiver + $amount;
		$holder = 0;
		$holder = $this->balance;
		$this->balance = $receiver->balance;
		$receiver->balance = $holder;
	}
}

$bank1 = new Bank(5000);
$bank2 = new Bank(5000);
try{
$bank1->transfer(5000, $bank2);}
catch (Exception $e){
	echo $e->getMessage();
}
echo $bank1->getBalance();
echo "<br>" . $bank2->getBalance();



?>

