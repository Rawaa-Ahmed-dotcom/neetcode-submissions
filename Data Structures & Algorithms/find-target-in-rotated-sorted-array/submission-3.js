class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    _search(nums, low, high, target) {
        if (low > high) return -1;
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
                return this._search(nums, low, high, target);
            } else {
                low = mid + 1;
                return this._search(nums, low, high, target);
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
                return this._search(nums, low, high, target);
            } else {
                high = mid - 1;
                return this._search(nums, low, high, target);
            }
        }
    }
    search(nums, target) {
        if (nums.length === 0) return null;
        let low = 0;
        let high = nums.length - 1;
        return this._search(nums, low, high, target);
    }
}
