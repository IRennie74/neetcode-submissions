class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let concatenatedList = new Array(2*nums.length);

        for (let i = 0; i < nums.length; i++) {
            concatenatedList[i] = concatenatedList[i + nums.length] = nums[i]
        }
        return concatenatedList;
    }
}
