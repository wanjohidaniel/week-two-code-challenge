let string = 'The Quick Brown Fox';
//Define your string.

function swapCase(inputString) {
    //Split each character of the string 
    return inputString.split('').map(function(char) {
        if (char === char.toUpperCase()) {
            //If characters are in uppercase , they are returned in lowercase.
            return char.toLowerCase();
        } else {
            //If characters are in lowercase , they are returned in uppercase.
            return char.toUpperCase();
        }
        //The characters are then re-joined to form the new string.
    }).join('');
}