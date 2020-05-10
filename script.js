// TODO: isEven
// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

function isEven(num){
    return num % 2 === 0;
}


// TODO: Factorial

// function factorial(num){
//     //define a result var
//     var result = 1;
//     //calculate factorial and store value in result
//     for(var i = 1; i <= num; i++){
//         // result = result * i;
//         result *= i;
//     }
//     return result
// }


function factorial(num){
    if(num === 0){
        return 1
    }
    var result = num;
    for(var i = num-1; i >= 1; i--){
        result *= i;
    }
    return result;
}


// kebabToSnake() where takes a kebab-cased to make it the snaked_cased

function kebabToSnake(str){
    //replace all '-' with '_'
    var newStr = str.replace(/-/g, "_");
    return newStr;
}