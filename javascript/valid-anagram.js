function validAnagram(str1, str2) {
    const obj = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i += 1) {
        const letter = str1[i];
        if (!obj[letter]) {
            obj[letter] = 0;
        }
        obj[letter] += 1;
    }

    for (let j = 0; j < str2.length; j += 1) {
        const letter2 = str2[j];
        if (!obj[letter2]) {
            return false;
        }
        obj[letter2] -= 1;
    }

    return true;
}

console.log(validAnagram('aabzz', 'zzeaa'));
console.log(validAnagram('aabbzz', 'zzbbaa'));
