//finding the second highest inside the array

function getSecondHighest()
{
    let input = document.getElementById('input').value;
    let splittedValues = input.split(',');
    const getMaxValue = (value => value = Math.max(...value));//define function wherein finding the highest value in an array

    let maxValue = getMaxValue(splittedValues);
    document.getElementById('postResult').innerHTML = 'Highest Number in array is '+maxValue;

    let newsplittedValues = splittedValues.filter(value => value != maxValue); //removing the highest value in an array

    let newMaxValue = getMaxValue(newsplittedValues); //getting the max value using function again
    document.getElementById('result').innerHTML = 'Second Highest Number in array is '+newMaxValue; 
}

const numbers = [1,2,3,4,5];
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
}
console.log(result);