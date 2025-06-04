const sumAll = function(start, end) {
    // only positive interger allow
    if (typeof start === 'number' && Number.isInteger(start) && start > 0 && typeof end === 'number' && Number.isInteger(end) && end > 0) {
        let total = 0;

        if (start > end) {
            [start, end] = [end, start];
        }

        for (let i = start; i <= end; i++) {
            total += i;
        }

        return total;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
