class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // returns string if only 1
        if(strs.length == 1) {
            return strs[0];
        }

        // Sorts list of strings
        strs.sort();

        // Finds longest possible common prefix
        let longestPrefixLength = Math.min(strs[0].length, strs[strs.length - 1].length);
        for (let i = 0; i < longestPrefixLength; i++) {
            if (strs[0][i] !== strs[strs.length - 1][i]) {
                return strs[0].slice(0, i);
            }
        }
        return strs[0]
    }
}
