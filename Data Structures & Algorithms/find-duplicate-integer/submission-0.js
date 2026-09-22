class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findDuplicate(nums) {
        let start = 0;
        let end = nums.length - 1;
        while (true) {
            let left = start + 1;
            let right = end;
            let num = nums[start];
            for (let i = left; i <= right; i++) {
                if (nums[i] === num) {
                    return num;
                } else {
                    continue;
                }
            }
            start++;
        }
    }
}
