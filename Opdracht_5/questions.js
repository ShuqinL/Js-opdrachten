/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function (text) {
    return(text.length);
}

// Replace the first word in the chain to a C
var ReplaceThis = function (text) {
    console.log(text);
   let begin=text.split(" ",1)[0];
   console.log(begin);
   let beginLength = begin.length;
   console.log(beginLength);
   let restLength = text.length - beginLength;
   console.log(restLength);
   let rest = text.slice(-restLength);
   console.log(rest);
   console.log("C"+ rest)
   return("C"+ rest);
  
}


// Concatenate the two strings
var ConcatString = function (text1, text2) {
    return(text1.concat(text2));
}

// Display the fifth character of the string
var DisplayChar5 = function (text) {
   return(text.slice(4,5));
}


// Display the first 9 characters
var DisplayChar9 = function (text) {
    return(text.slice(0,9));
}
// Capitalize the string

var CapitalString = function (text) {
    return(text.toUpperCase());
}

// Put the string in lowercase
var MinimalizeString = function (text) {
    return(text.toLowerCase());
}

// Delete spaces before and after the chain
var SupprEspaceString = function (text) {
    return(text.trim());
}

// Show true if the input parameter of the function is of type string
var IsString = function (text) {
    if(typeof text === "string"){
        return(true);
    }
}

// Display the file extension
var ExtensionString = function (text) {
    return (text.split('.').pop());
}

// Count the number of spaces in the chain
var NumberEspaceString = function (text) {
    return(text.split(" ").length-1);

}

// Reverse a string of characters
var InverseString = function (text) {
    let newString="";
    for(var i=text.length-1;i>=0;i--){
        newString+=text[i];
    }
    return(newString);
}

// Oefeningen over getallen en wiskundige berekeningen


 // Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function (x, y) {
    return(Math.pow(x,y));
}

// Display the absolute value of a number
var ValueAbsolute = function (number) {
   return(Math.abs(number));
}

// Display the absolute values of several numbers
var ValueAbsoluteArray = function (array) {
   let newArray=[];
   for(var i=0;i<array.length;i++){  
     newArray.push(Math.abs(array[i]));
   } 
   return(newArray);
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function (radius) {
    let surface=radius*radius*3.1415926;
    return(Math.ceil(surface));
}

// Calculate the hypothenuse of a rectangular triangle
var Hypothenuse = function (ab, ac) {
   return(Math.hypot(ab,ac));
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function (weight, height) {
    let bmi=weight/(height*height);
    return(parseFloat(bmi.toFixed(2)));
}
 

