// Frequency counter
function areThereDuplicates() {
    if (!arguments.length) {
        return false;
    }
    const obj = {};
    for (let i = 0; i < arguments.length; i += 1) {
        if (obj[arguments[i]]) {
            return true;
        } else {
            obj[arguments[i]] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2, 3))
console.log(areThereDuplicates('a', 'b', 'c'))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
