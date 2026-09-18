class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    backtrack(index, nums, subsets , subset) {

        if (index === nums.length) {
            subsets.push([...subset]);
            return;
        }
        subset.push(nums[index]);
        this.backtrack(index + 1, nums, subsets, subset);

        subset.pop();
        this.backtrack(index + 1, nums, subsets , subset);
        return subsets;
    }
    subsets(nums) {
        let subsets = [];
        return this.backtrack(0, nums, subsets, []);
    }
}
