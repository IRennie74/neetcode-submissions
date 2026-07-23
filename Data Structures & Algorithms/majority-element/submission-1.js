class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort();
        // return center element (will always be something taking 50%)
        return nums[Math.floor(nums.length / 2)];
    }
}
