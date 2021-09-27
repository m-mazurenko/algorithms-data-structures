// https://leetcode.com/problems/remove-vowels-from-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
  let vowels = 'aeiou';
  let splitted = s.split('');
  let result = [];
  for (let i = 0; i < splitted.length; i++) {
    if (vowels.indexOf(splitted[i]) === -1) {
      result.push(splitted[i]);
    }
  }
  return result.join('');
};

console.log(removeVowels('leetcodeisacommunityforcoders'));
console.log(removeVowels('aeiou'));

