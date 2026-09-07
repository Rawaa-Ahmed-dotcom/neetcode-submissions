class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucketArray = Array.from({ length: 3 }).fill(null);
        while (nums.length > 0) {
            const element = nums.shift();
            if (bucketArray[element] === null) {
                bucketArray[element] = [];
                bucketArray[element].push(element);
            } else bucketArray[element].push(element);
        }
        for (let i = 0; i < bucketArray.length; i++) {
            if(bucketArray[i] === null) continue;
            nums.push(...bucketArray[i]);
        }

        return nums;
    }
}
