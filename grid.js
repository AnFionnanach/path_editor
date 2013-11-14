function drawGrid() {
    for (var i = -1; i < floorWidth; i = i + gridStep) {
        for (var j = -1; j < floorHeight; j = j + gridStep) {
            context.fillRect(i, j, 3, 3);
        }
    }
}
