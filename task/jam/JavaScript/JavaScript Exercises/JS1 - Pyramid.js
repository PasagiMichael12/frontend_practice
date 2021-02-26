//#1 Print half pyramid of numbers

const numPyramid = (r) => {
    let result = '';
    
    for (let x = 1; x <= r; x++){
      
        for (let y = 1; y <= x; y++){
            result += y + ' ';
        }
        
        console.log(result)
        result = ''; 
   }
}

numPyramid(3);