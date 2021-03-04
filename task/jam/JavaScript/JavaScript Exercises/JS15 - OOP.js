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

let sum2 = new Sum(9,2)
console.log(sum2.add())

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
//

const Employee = function(name, salary) {
    let empName = name;
    let empSalary = salary;
    
    this.
    
}
const Salary = function(baseSalary, overtime, rate){
    let base = baseSalary;
    let ot = overtime;
    let rt = rate;

    const computeSalary = function(){
        return base + (ot * rt);
    }

    this.salary = function(){
        return computeSalary();
    }
}
let employee = new Employee(1000, 3, 500)
console.log(employee.salary())