class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        best_sum = current_sum = nums[0]
        for i in nums[1:]:
            current_sum = max(i, current_sum + i)
            best_sum = max(current_sum, best_sum)
        return best_sum


solution = Solution()
print(solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
