class Solution:
    def numUniqueEmails(self, emails: list[str]) -> int:
        result = []
        for i in emails:
            splitted_email = i.split('@')
            domain = splitted_email.pop(-1)
            if len(splitted_email) > 1:
                # Invalid email. What to do with it?
                pass
            valid_local_name = splitted_email[0].split('+')[0].replace('.', '')
            res_email = valid_local_name + '@' + domain
            if res_email not in result:
                result.append(res_email)
        return len(result)


solution = Solution()
solution.numUniqueEmails(emails=["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
