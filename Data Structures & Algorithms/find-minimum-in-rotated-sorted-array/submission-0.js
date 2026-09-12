class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    _findMin(nums, low, high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid - 1] > nums[high - 1]) {
            low = mid + 1;
            return this._findMin(nums , low, high);
        }
        if(nums[mid - 1] < nums[high - 1]) {
            high = mid;
            return this._findMin(nums, low , high);
        }else return nums[mid - 1];
    }
    findMin(nums) {
        if (nums.length === 0) return null;
        let low = 1;
        let high = nums.length;
        return this._findMin(nums, low, high);
    }
}
