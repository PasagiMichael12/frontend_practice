//exercise
// convert these procedural functions into an OOP function.

// 1.
let a = 100;
let b = 200;

function oldWay(a,b,ans){
    return a + b;
}

//OOP
const Sum = function(a, b) {
    let num1 = a;
    let num2 = b;

    const computeSum = function(){
        return num1 + num2
    }

    this.add = function(){
        return computeSum();
    }
}

let sum1 = new Sum(2,2)
console.log(sum1.add())

//2.
let baseSalary=12000;
let overtime = 40;
let rate = 20
function computeSalary(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}
function  employee(name, salary){
    this.name= name;
    this.salary= salary;
    this.getSalary = function(){
        console.log(this.salary * 7);
    }
}

let emp1 = new employee('nicole', 1000);
emp1.salary=2000;
emp1.getSalary();
{}