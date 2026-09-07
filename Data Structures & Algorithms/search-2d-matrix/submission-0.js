class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let array = [];
        // for(let i = 0 ; i < matrix.length; i++) {
        //    array.push(...matrix[i]);
        // }
        let l = 1;
        let h = matrix.length;
        while(l <= h) {
            let mid = Math.floor((l + h) / 2);
            if(matrix[mid - 1].includes(target)) {
                return true;
            }else if(target < matrix[mid - 1][0]) {
                h = mid - 1;
            }else {
                l = mid + 1;
            }
        }
        return false;
    }
}
