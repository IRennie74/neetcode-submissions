class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyIndex = 0
        sellIndex = 1
        
        maxProfit = 0

        while sellIndex < len(prices): # loop

            if prices[sellIndex] > prices[buyIndex]: # profit so buy
                profit = prices[sellIndex] - prices[buyIndex]
                maxProfit = max(maxProfit, profit)
            else: 
                buyIndex = sellIndex
            
            sellIndex += 1

        return maxProfit