class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    backtrack(start, combination, remaining, nums, combinations) {
        if (remaining === 0) {
            combinations.push([...combination]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (remaining >= nums[i]) {
                combination.push(nums[i]);
                remaining -= nums[i];
                this.backtrack(i, combination, remaining, nums ,combinations);
                combination.pop();
                remaining += nums[i];
            }
        }
    }
    combinationSum(nums, target) {
        let combinations = [];
        this.backtrack(0, [], target, nums, combinations);
        return combinations;
    }
}
