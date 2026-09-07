class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
    let stack = [];
    for(let i = 0; i < operations.length; i++) {
        if(!isNaN(operations[i])) {
            stack.push(operations[i]);
        }
        if(operations[i] === '+') {
            let top = stack.pop();
            let secondTop = stack.pop();
            let newTop =  Number(top) + Number(secondTop);
            stack.push(secondTop);
            stack.push(top);
            stack.push(newTop);
        }
        if(operations[i] === 'D') {
            let top = stack.pop();
            let newTop = Number(top) * 2;
            stack.push(top);
            stack.push(newTop);
        }
        if(operations[i] === 'C') {
            stack.pop();
        }
    }
    let result = 0;
    for(let i = 0; i < stack.length; i++) {
        result += Number(stack[i]);
    }
    return result;
}
}
