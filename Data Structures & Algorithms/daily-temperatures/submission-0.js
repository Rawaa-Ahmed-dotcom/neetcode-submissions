class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    let result = [];
    for(let i = 0; i < temperatures.length; i++) {
        let current = temperatures[i];
        let isZero = true;
        for(let j = i + 1; j < temperatures.length; j++) {
            if(temperatures[j] > current) {
                result.push(j - i);
                isZero = false;
                break;
            }
        }
        if(isZero) result.push(0);
    }
    return result;
}
}
