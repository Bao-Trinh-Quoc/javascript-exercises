const repeatString = function(string, time) {
    if (time < 0) {
        return 'ERROR';
    }
    let res = '';
    for (let i = 0; i < time; i++) {
        res += string;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
