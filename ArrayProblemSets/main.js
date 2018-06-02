

//Reverse Array
function reverse(arr) {

    arr.forEach(function (elements) {
        console.log(elements);
    });


    for (let index = arr.length; index >= 0; index--) {
        console.log(arr[index]);
    }
}


function isUniform(arr) {
    
    var temp = arr[0];

    for (var index = 1; index < arr.length; index++) {
        if (arr[index] !== temp) {
            return false;
        }
    }
    return true;

}

function sumOfArray(arr) {
    
    var sum = 0;

    arr.forEach(function(elements) {
        sum = elements + sum;
    });

    return sum;


}

function max(arr) {
    //5 6 2 8 2

    var maxElement = arr[0];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxElement) {
            maxElement = arr[index];
        }
    }
    return maxElement;

}