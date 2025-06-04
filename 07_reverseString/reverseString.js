const reverseString = function(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;

    // harness the power of method
    // split str -> arr then reverse then join -> str
    // str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
