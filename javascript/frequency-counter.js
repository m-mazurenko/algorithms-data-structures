// Frequency counter
function sameFrequency(num1, num2){
    const n1 = num1.toString();
    const n2 = num2.toString();
    if (n1.length !== n2.length) {
        return false;
    }
    const obj = {};
    for (let i = 0; i < n1.length; i += 1) {
        obj[n1[i]] = obj[n1[i]] ? obj[n1[i]] + 1 : 1;
    }
    for (let j = 0; j < n2.length; j += 1) {
        if (!obj[n2[j]]) {
            return false;
        }
        obj[n2[j]] -= 1;
    }
    return true;
}


console.log(sameFrequency(182,281));
console.log(sameFrequency(3589578,5879385));
