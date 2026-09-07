class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    
     kClosest(points, k) {
   

    const getDistance = (p) => p[0] * p[0] + p[1] * p[1];
    const partition = (left, right) => {
        const pivotDist = getDistance(points[right]);
        let i  = left;

        for(let j = left; j < right; j++) {
            if(getDistance(points[j]) <= pivotDist) {
                [points[i] , points[j]] = [points[j] , points[i]];
                i++;
            }
        }
        [points[i] , points[right]] = [points[right] , points[i]];
        return i;
    }
    let left = 0;
    let right = points.length - 1;
    while(left < right) {
    let pivotIndex = partition(left , right);
        if(pivotIndex === k ) {
            break;
        } else if(pivotIndex < k) {
            left = pivotIndex + 1;
        } else if(pivotIndex > k) {
            right = pivotIndex - 1;
        }
    }
    return points.slice(0,k);
  }
}
