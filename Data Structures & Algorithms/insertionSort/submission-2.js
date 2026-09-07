/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(pairs.length === 0) return [];
    let finalList = [];
    finalList.push(pairs);
    
    let sortedList = [pairs[0]];
    
    for(let i = 1; i < pairs.length; i++) {
        let tempList = sortedList;
        for(let j = sortedList.length - 1; j >= 0 ;j--) {
            if(sortedList[j].key > pairs[i].key) {
                let temp = tempList[j];
                tempList[j + 1] = temp;
                if(j === 0) {
                    tempList[j] = pairs[i];
                    sortedList = tempList;
                     
                    break;
                }
                
            }else {
                sortedList[j + 1] = pairs[i];
                  
                break;
            }
           
        }
        let pair = pairs.slice(i + 1  , pairs.length );
        finalList.push([...sortedList , ...pair]);
    }
    return finalList;
    
    
}
}
