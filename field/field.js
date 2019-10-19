function handleCellClick(event) {
    var domCell = event.target;
    var x = domCell.dataset.x;
    var y = domCell.dataset.y;
    console.log('cell clicked at', x, y)
}

function Field(cellSize, width, height, frameID) {
    this.cellSize=cellSize;
    this.width = width;
    this.height = height;
    this.domGridCells = [];
    this.domFrame = document.getElementById(frameID);
    this.domGrid = document.createElement('div');
    this.domGrid.className = 'space-grid';
    this.domFrame.appendChild(this.domGrid);

    for (var y = 0; y < height; y++) {
        var domRow = document.createElement('div');
        var row = [];
        domRow.className = 'row';
        for (var x = 0; x < width; x++) {
            var domCell = document.createElement('div');
            domCell.dataset.x = x;
            domCell.dataset.y = y;
            domCell.className = 'cell';
            domCell.style.setProperty('width', cellSize+'px');
            domCell.style.setProperty('height', cellSize+'px');
            domCell.addEventListener('click', handleCellClick);
            row.push(domCell);
            domRow.appendChild(domCell);
        }
        this.domGridCells.push(row);
        this.domGrid.appendChild(domRow);
    }
}

