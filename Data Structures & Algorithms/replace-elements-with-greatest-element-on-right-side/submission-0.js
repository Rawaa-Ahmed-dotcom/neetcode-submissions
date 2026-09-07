class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
   replaceElements(arr) {
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let max = 0;
        for(let j = i + 1; j < arr.length ; j++) {
            if(arr[j] > max) {
                max = arr[j];
            }
        }
        if(i === arr.length - 1) {
            arr[i] = -1;
        }else arr[i] = max;
        
    }
    return arr;
}
}
