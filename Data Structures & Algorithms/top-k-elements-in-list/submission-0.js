class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const contains = new Map();
        for (let num of nums) {
            contains.set(num, (contains.get(num) || 0) + 1);
        }

        const sorted = [...contains.entries()].sort((a, b) => b[1] - a[1]);

        const output = new Array();
        for (let i = 0; i < k; i++) {
            output[i] = sorted[i][0];
        }
        return output;
    }
}