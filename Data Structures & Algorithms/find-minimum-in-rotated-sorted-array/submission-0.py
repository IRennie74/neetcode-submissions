class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        result = nums[0];

        while left <= right: # loop
            if nums[left] < nums[right]: # regular check to find smaller number
                result = min(result, nums[left])
                break
            
            # find middle, check value in middle
            middle = (left + right) // 2
            result = min(result, nums[middle])

            # move right or left side to new middle
            if nums[middle] >= nums[left]:
                left = middle + 1
            else:
                right = middle - 1
            
        return result