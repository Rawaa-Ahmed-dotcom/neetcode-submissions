class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map();

        let map2 = new Map();
        for (let i = 0; i < s.length; i++) {
            let value = map1.get(s[i]);
            if (map1.has(s[i])) {
                map1.set(s[i], ++value);
            } else {
                map1.set(s[i], 1);
            }
        }
        for (let i = 0; i < t.length; i++) {
            let value = map2.get(t[i]);
            if (map2.has(t[i])) {
                map2.set(t[i], ++value);
            } else {
                map2.set(t[i], 1);
            }
        }
        if(map1.size !== map2.size) return false;
        for(let [key , val] of map1) {
            if(!map2.has(key) || map2.get(key) !== val) return false;
        } 
        return true;
    }
}
