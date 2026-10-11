class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) {
        let count = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                

                if (grid[i][j] === "0") continue;
                if (grid[i][j] === "1") {
                    count += 1;
                   
                }
                _numIslands(i, j, grid);
            }
        }
        function _numIslands(row, col, visited) {
            if (row < 0 || row >= rows || col < 0 || col >= cols) return;
            if (grid[row][col] === "0") return;
            grid[row][col] = "0";
            _numIslands(row, col + 1, visited);
            _numIslands(row, col - 1, visited);
            _numIslands(row - 1, col, visited);
            _numIslands(row + 1, col, visited);
        }

        return count;
    }
}
