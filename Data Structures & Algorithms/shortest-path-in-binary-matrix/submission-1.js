class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let n = grid.length;

        if(grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
        if(n === 1)return 1;
        let directions = [
            [-1 , -1] , [-1 , 0] , [-1 , 1],
            [0 , -1] ,            [0 , 1],
            [1 , -1] , [1, 0] , [1 , 1]
        ]

        let queue = [[0 , 0 , 1]];
        grid[0][0] = 1;
        let head = 0;
        while(head < queue.length) {
            let [r , c, dist] = queue[head++];
            for(let [dr , dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;
                if(nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0) {
                    if(nr === n - 1 && nc === n - 1)return 1 + dist;
                    grid[nr][nc] = 1;
                    queue.push([nr,nc, dist + 1]);
                }
            }
        }
        return -1;
    }
}
