class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort();
        // return center element
        return nums[Math.floor(nums.length / 2)];
    }
}
