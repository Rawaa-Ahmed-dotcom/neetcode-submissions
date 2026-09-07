class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
    if(m === 0) {
        for(let i = 0 ; i < n; i++) {
            nums1.pop();
        }
        for(let i = 0; i < n; i++) {
            nums1.push(nums2[i]);
        }
        return nums1;
    }
    let pointer = 0;
    let nums2Pointer = 0;
    while(nums2Pointer < n && pointer < m) {
        if(nums2[nums2Pointer] <= nums1[pointer] ) {
            for(let i = m - 1; i >= pointer; i--) {
                nums1[i + 1] = nums1[i];
            }
            nums1[pointer] = nums2[nums2Pointer];
            nums2Pointer++;
            m++;
        }else {
            pointer++;
        }
    }
    if(pointer === m) {
        let conM = nums1.length;
        for(let i = 0 ; i < conM - m; i++) {
            nums1.pop();
        }
    
        for(let i = nums2Pointer; i < n; i++) {
            nums1.push(nums2[i]);
        }
        
    }
    return nums1;
  
}


}
