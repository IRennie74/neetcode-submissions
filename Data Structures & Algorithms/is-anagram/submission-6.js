class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Different lenghts
        if (s.length !== t.length) {
            return false;
        }

        // Declare hashsets
        const countS = {};
        const countT = {};

        // Maps each value to number of times it has been seen
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        // Loops through countS hashset comparing counts of values in each set
        for (const key in countS) {
            if(countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
}
