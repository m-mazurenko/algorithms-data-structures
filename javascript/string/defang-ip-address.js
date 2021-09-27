// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  // return address.split('.').join('[.]'); - 64ms;
  return address.replace(/\./g, '[.]') // 76ms
};

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));
