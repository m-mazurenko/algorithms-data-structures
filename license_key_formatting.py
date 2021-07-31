class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s = s.upper().replace('-', '')
        s = s[::-1]
        print(s)
        groups = []
        # The idea is to get groups of size 'k' from the reversed string and add them to a list
        # and then join it with '-'
        for i in range(0, len(s), k):
            groups.append(s[i:i + k])

        return '-'.join(groups)[::-1]


solution = Solution()
test = solution.licenseKeyFormatting(s='2-5g-3-J', k=2)
print(test)
