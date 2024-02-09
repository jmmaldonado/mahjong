
const gameBoard = document.getElementById('game-board');
const header = document.getElementById('header');


//  3D Array for Tiles
const mapTiles = [];
const maxCols = 12;

let currentBoard = getRandomBoard()

const tileTypes = [
    { type: "Circles", value: 2, color: "#FFBC42" },
    { type: "Circles", value: 4, color: "#D81159" },
    { type: "Circles", value: 6, color: "#218380" },
    { type: "Circles", value: 1, color: "#73D2DE" },
    { type: "Squares", value: 1, color: "#FFBC42" },
    { type: "Squares", value: 6, color: "#D81159" },
    { type: "Squares", value: 4, color: "#218380" },
    { type: "Squares", value: 2, color: "#73D2DE" },
];

let selectedTile = null;
let selectedTileType = null;
let selectedTilePosition = {};
let movements = 0;
let strictMode = true; //Tiles are only exposed if they can be moved left or right, otherwise they can be moved N/S too

function generateTiles() {
    // Iterate over base layer 
    for (let layer = 0; layer < currentBoard.length; layer++) {
        let rowArray = mapTiles[layer] ? mapTiles[layer] : [];
        for (let row = 0; row < currentBoard[layer].length; row++) {
            let columnArray = rowArray[row] ? rowArray[row] : [];

            let finishedRowTiles = false
            const columnsInCurrentRow = currentBoard[layer][row]
            let currentRowTiles = 0
            let currentRowStartColumn = Math.ceil((maxCols - columnsInCurrentRow) / 2)

            for (let col = 0; col < maxCols; col++) {
                if (columnsInCurrentRow == 0) {
                    columnArray[col] = null;
                    continue; //Next iteration
                }

                if (!finishedRowTiles) {
                    if (col < currentRowStartColumn) {
                        columnArray[col] = null;
                    } else {
                        let randomTileType = tileTypes[Math.floor(Math.random() * tileTypes.length)];
                        columnArray[col] = randomTileType;
                        currentRowTiles++;
                        finishedRowTiles = currentRowTiles >= currentBoard[layer][row];
                    }
                } else {
                    columnArray[col] = null;
                }
            }

            rowArray[row] = columnArray;
        }
        mapTiles[layer] = rowArray;
    }
}

function handleTileClick(tile, layerIndex, rowIndex, colIndex) {
    if (!selectedTile) {
        selectedTile = tile
        selectedTileType = mapTiles[layerIndex][rowIndex][colIndex];
        selectedTilePosition = {
            layer: layerIndex,
            row: rowIndex,
            col: colIndex
        };
        tile.classList.add('selected')
        console.log('Selected tile', tile)
        return;
    }

    const secondTileType = mapTiles[layerIndex][rowIndex][colIndex];
    const secondTilePosition = {
        layer: layerIndex,
        row: rowIndex,
        col: colIndex
    };

    if (canRemoveTiles(selectedTilePosition, secondTilePosition)) {
        removeTiles(selectedTilePosition, secondTilePosition);
        paintTiles();
    } else {
        console.log('Selected tile: ', selectedTile)
        selectedTile.classList.remove('selected')
        selectedTile = null
        selectedTilePosition = {}
    }
    movements++;

}


function canRemoveTiles(tile1pos, tile2pos) {
    if (isSameTile(tile1pos, tile2pos))
        return false;

    const tile1 = mapTiles[tile1pos.layer][tile1pos.row][tile1pos.col];
    const tile2 = mapTiles[tile2pos.layer][tile2pos.row][tile2pos.col];
    if (tile1 && tile2) {
        if (tile1 == tile2) {
            return isTileExposed(tile1pos, strictMode) && isTileExposed(tile2pos, strictMode);
        }
    }
    return false;
}

function isSameTile(tile1pos, tile2pos) {
    if (tile1pos.layer == tile2pos.layer) {
        if (tile1pos.row == tile2pos.row) {
            if (tile1pos.col == tile2pos.col) {
                return true
            }
        }
    }
    return false

}

function isTileExposed(tilePos, strictMode) {

    let tileLeft
    if (tilePos.col > 0)
        tileLeft = mapTiles[tilePos.layer][tilePos.row][tilePos.col - 1]
    else
        tileLeft = null

    let tileRight
    if (tilePos.col < maxCols - 1)
        tileRight = mapTiles[tilePos.layer][tilePos.row][tilePos.col + 1]
    else
        tileRight = null

    let tileNorth
    if (tilePos.row > 0)
        tileNorth = mapTiles[tilePos.layer][tilePos.row - 1][tilePos.col]
    else
        tileNorth = null

    let tileSouth
    if (tilePos.row < mapTiles[tilePos.layer].length - 1)
        tileSouth = mapTiles[tilePos.layer][tilePos.row + 1][tilePos.col]
    else
        tileSouth = null

    if (strictMode)
        return !tileLeft || !tileRight;
    else
        return !tileLeft || !tileRight || !tileNorth || !tileSouth;
}


function removeTiles(tile1pos, tile2pos) {
    mapTiles[tile1pos.layer][tile1pos.row][tile1pos.col] = null
    mapTiles[tile2pos.layer][tile2pos.row][tile2pos.col] = null
    selectedTile = null
    selectedTilePosition = {}
}


function createTileShapeContainer(tile) {
    // Create shape container
    const shapeContainer = document.createElement('div');
    shapeContainer.classList.add('shape-container');

    // Create shapes 
    for (let i = 0; i < tile.value; i++) {
        let shapeDiv = document.createElement('div');
        if (tile.type === "Circles") {
            shapeDiv.classList.add('circle');
        } else {
            shapeDiv.classList.add('square');
        }

        shapeDiv.style.backgroundColor = tile.color;
        shapeContainer.appendChild(shapeDiv);
    }
    return shapeContainer;
}


function paintTiles() {
    gameBoard.innerHTML = '';

    // Iterate over base layer 
    for (let currentLayer = 0; currentLayer < mapTiles.length; currentLayer++) {
        for (let currentRow = 0; currentRow < currentBoard[currentLayer].length; currentRow++) {
            const availableColumns = currentBoard[currentLayer][currentRow];
            const startingColumn = Math.floor((12 - availableColumns) / 2);

            for (let tileIndexInRow = 0; tileIndexInRow < maxCols; tileIndexInRow++) {
                const currentTile = mapTiles[currentLayer][currentRow][tileIndexInRow];



                // Create tile div)
                let tileDiv = document.createElement('div');
                tileDiv.classList.add('tile');

                if (!currentTile) {
                    tileDiv.classList.add('tile-empty');
                } else {

                    // Assuming 'type' property stores your tile type information
                    tileDiv.style.color = currentTile.color;

                    // Dynamic grid placement 
                    tileDiv.style.gridRow = currentRow + 1;
                    tileDiv.style.gridColumn = tileIndexInRow + 1;
                    tileDiv.style.zIndex = currentLayer;
                    tileDiv.id = `${currentLayer}-${currentRow}-${tileIndexInRow}`;
                    tileDiv.style.left = (currentLayer * 5) + 'px';
                    tileDiv.style.top = (currentLayer * -5) + 'px';

                    tileDiv.addEventListener('click', () => {

                        handleTileClick(tileDiv, currentLayer, currentRow, tileIndexInRow); // Pass indices
                    });
                    tileDiv.appendChild(createTileShapeContainer(currentTile));

                }

                gameBoard.appendChild(tileDiv);
            }
        }
    }
}

generateTiles();
paintTiles()
viewportResize();

function viewportResize() {
    const currentZoom = window.visualViewport.scale;
    const currentWidth = window.visualViewport.width;
    const realWidth = Math.floor(currentWidth / currentZoom)
    header.style.width = currentWidth + 'px';
    console.log('Real width: ', realWidth, window.visualViewport)
}

window.addEventListener('resize', viewportResize);
