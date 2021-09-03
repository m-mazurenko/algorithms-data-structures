// Multiple pointers
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i += 1;
        }
        j += 1;
    }
    return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'adbsawwcddf'))
console.log(isSubsequence('abc', 'acb'))
