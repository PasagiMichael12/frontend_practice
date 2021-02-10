function Compute()
{
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value; 
    let operator = document.getElementById('operator').value;
    let message = document.getElementById("answer");
    let result = 0;
 
    //checking if textboxes is set
    if(firstNumber.length == 0 || secondNumber.length == 0)
    { alert('Please Provide the following: '); return false;}

    //if no operator
    if(operator == 'op')
    { alert('Please provide Operator'); return false;}

    const first = parseInt(firstNumber, 10);
    const second = parseInt(secondNumber, 10);

    switch(operator)
    {
        case '+':
            result = first + second;
            message.innerHTML = 'The answer is: '+ result;
            break;
        case '-':
            result = first - secondNumber;
            message.innerHTML = 'The answer is: '+ result;
            break;
        case '*':
            result = first * secondNumber;
            message.innerHTML = 'The answer is: '+ result;
            break;
        case '/':
            result = first / secondNumber;
            message.innerHTML = 'The answer is: '+ result;
            break;
        default:
            break;
    }
}
function reload()
{
    location.reload();
}

function getDate()
{
    let today = new Date();
    //getting the current day
    let daylist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let current_day = today.getDay();//<- displays number of what is the date today

    //getting right hours
    let current_hr = today.getHours();//<--- the value of this is on a 24-hr format
    //getting meridiem
    let meridiem = current_hr >= 12 ? "PM" : "AM";
    current_hr = current_hr - 12; //<-- minus 12 to fix at 12-hr format
    
    //getting minutes
    let minutes = today.getMinutes();
    
    //getting seconds
    let seconds = today.getSeconds();

    return document.getElementById('date').innerHTML = "Today is: " + daylist[current_day]+ '   ' 
    +'Time: '+ current_hr + ':' + minutes + ':' + seconds + meridiem;

}

function timeFormat()
{
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth()
    let listOfMOnths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let current_month = listOfMOnths[month];
    let year = time.getFullYear();
    console.log("day = " +current_month);

    return document.getElementById('timeformat').innerHTML = current_month + '-' + day + '-' + year;
    
}