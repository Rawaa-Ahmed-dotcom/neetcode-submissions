class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let res = high;
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            let hoursNeeded = 0;
            for(let pile of piles) {
               hoursNeeded += Math.ceil(pile / mid);
            }
            if(hoursNeeded <= h) {
                res = mid;
                high = mid - 1;
            }else if(hoursNeeded > h) {
                low = mid + 1;
            }
        }
        return res;
    }
}
