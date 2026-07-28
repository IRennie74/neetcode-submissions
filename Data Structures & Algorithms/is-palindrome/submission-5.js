class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length == 0) return true;
const letters = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = letters.length - 1;
        while (left < right) {
            if(letters[left] != letters[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
