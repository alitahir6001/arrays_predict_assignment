// Predict 1

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    // going through each value in the index   
    console.log(arr[i]); // log those values as it goes through each inxex
}

// Output = 8,6,7,5,3,0,9


// Predict 2

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){  //Go through each index in the array
    if(arr[i] % 2 == 0){ // If the value of that index is divided by 2 and has no remainder...
        console.log(arr[i]); // log that index
    } 
    else{ // otherwise
        console.log("That is odd!"); //console log "that is odd!"
    }
}

//Output = ["That is Odd!"], ["That is odd!"], [8], [4], [2], [0], ["That is odd!"]


//Predict 3

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = []; //creating a new array
for(var i = 0; i< arr.length; i++){ //go through each index in the array 
    if(arr[i] < 0){ // if the index i of the array is less than 0
        newArr.push(arr[i]); // replace the last value of that index with i
        arr[i] = arr[i] * -1; // set the new value of that index to the the previous value * negative 1
    }
    else if(arr[i] == 0){ //Or if the value of that index is zero
        arr[i] = "Zero"; // set that index value to say the word "zero" as a string instead of int
    }
    else{// otherwise
        arr[i] = arr[i] * -1;// set the value of index i to the previous value * negative 1
    }
}
console.log(arr); // Output = [1,3,8,-5,"Zero",-2,4,-1]
console.log(newArr); // Output the values that are < 0 in this new array = [-5,-2,-1]