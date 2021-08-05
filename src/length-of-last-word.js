/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) {
        return 0;
    }
    const arr = s.split(' ').filter(i => i.length && i);
    return arr[arr.length - 1].length;
};

const s = "Hello World";
const s2 = "   fly me   to   the moon  ";
const s3 = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));
