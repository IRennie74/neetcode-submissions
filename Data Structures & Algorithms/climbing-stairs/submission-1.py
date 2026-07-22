class Solution:
    def climbStairs(self, n: int) -> int:
        cache = [-1] * n # creates cache

        def dfs(i):
            # base case
            if i >= n:
                return i == n # valid path

            if cache[i] != -1:
                return cache[i] # invalid
            
            cache[i] = dfs(i + 1) + dfs(i + 2)
            return cache[i]

        return dfs(0)