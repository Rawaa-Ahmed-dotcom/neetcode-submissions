class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let areas = [];
        stack.push(0);
        heights.push(0);
        for(let i = 1; i < heights.length ; i++) {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let index = stack.pop();
                let right = i ;
                let left = stack.length > 0 ? stack[ stack.length - 1] : -1;
                let area = (right - left - 1) * heights[index];
                areas.push(area);
                
            }
            stack.push(i);
        }
        return areas.length > 0 ? Math.max(...areas) : 0; 
    }
}
