class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;

        let queue = [];

        let directions = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0],
        ];
        let freshCount = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) queue.push([i, j, 0]);
                else if (grid[i][j] === 1) freshCount++;
            }
        }
        if (freshCount === 0) return 0;
        let head = 0;
        let minutes = 0;
        while (head < queue.length) {
            let [r, c, time] = queue[head++];
            minutes = time;
            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    freshCount--;
                    queue.push([nr, nc, time + 1]);
                }
            }
        }
        return freshCount === 0 ? minutes : -1;
    }
}
