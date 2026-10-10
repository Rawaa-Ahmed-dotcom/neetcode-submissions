class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */

    floodFill(image, sr, sc, color) {
        const originalColor = image[sr][sc];
        if (originalColor === color) return image;
        let rows = image.length;
        let cols = image[0].length;
        function _flooFill(row, col) {
            if (row >= rows || row < 0 || col >= cols || col < 0) return;
            if (image[row][col] !== originalColor) return;
            image[row][col] = color;

            _flooFill(row - 1, col);
            _flooFill(row + 1, col);
            _flooFill(row, col - 1);
            _flooFill(row, col + 1);
        }
        _flooFill(sr, sc);
        return image;
    }
}
