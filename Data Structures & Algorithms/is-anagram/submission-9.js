class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        // Adds letters from first set to map
        const first = new Map();
        for(let i = 0; i < s.length; i++) {
            first.set(s[i], (first.get(s[i]) || 0) + 1)
        }

        for(let i = 0; i < t.length; i++) {
            first.set(t[i], (first.get(t[i]) || 0) - 1)
        }

        for(const count of first.values()) {
            if(count !== 0) {
                return false;
            }
        }
        return true;
    }
}
