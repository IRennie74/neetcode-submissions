class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();

        // Loops through list of nums
        for (let i = 0; i < nums.length; i++) {
            // Each iteration difference is calculated
            const difference = target - nums[i];

            // If difference is == 0 then numbers are added to set
            if(numsMap.has(difference)) {
                return [numsMap.get(difference), i];
            }
            numsMap.set(nums[i], i);
        }

        return [];
    }
}
