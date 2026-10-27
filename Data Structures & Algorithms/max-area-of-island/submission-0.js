class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let cols = grid[0].length;
        let rows = grid.length;
        let max = 0;
        function getIslandArea(r, c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
            grid[r][c] = 0;

            return (
                1 +
                getIslandArea(r + 1, c) +
                getIslandArea(r - 1, c) +
                getIslandArea(r, c + 1) +
                getIslandArea(r, c - 1)
            );
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    let area = getIslandArea(i, j);
                    max = Math.max(max, area);
                }
            }
        }
        return max;
    }
}
