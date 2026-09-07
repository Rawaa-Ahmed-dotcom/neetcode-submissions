class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 1;
        let h = nums.length;
        while(l <= h) {
            let mid = Math.floor((l + h) / 2);
            if(target === nums[mid - 1]) {
                return mid - 1;
            }else if(target < nums[mid - 1]) {
                h = mid - 1;
            }else {
                l = mid + 1;
            }
        }
        return -1;
    }
}
