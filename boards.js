const tileTypes = [
    { type: "circle", value: 2, color: "#FFBC42" },
    { type: "circle", value: 4, color: "#D81159" },
    { type: "circle", value: 6, color: "#218380" },
    { type: "circle", value: 1, color: "#73D2DE" },

    { type: "square", value: 2, color: "#FFBC42" },
    { type: "square", value: 4, color: "#D81159" },
    { type: "square", value: 6, color: "#218380" },
    { type: "square", value: 1, color: "#73D2DE" },

    { type: "star", value: 2, color: "#FFBC42" },
    { type: "star", value: 4, color: "#D81159" },
    { type: "star", value: 6, color: "#218380" },
    { type: "star", value: 1, color: "#73D2DE" },

    { type: "car", value: 2, color: "#FFBC42" },
    { type: "car", value: 4, color: "#D81159" },
    { type: "car", value: 6, color: "#218380" },
    { type: "car", value: 1, color: "#73D2DE" },

    { type: "cloud", value: 2, color: "#FFBC42" },
    { type: "cloud", value: 4, color: "#D81159" },
    { type: "cloud", value: 6, color: "#218380" },
    { type: "cloud", value: 1, color: "#73D2DE" },

    { type: "house", value: 2, color: "#FFBC42" },
    { type: "house", value: 4, color: "#D81159" },
    { type: "house", value: 6, color: "#218380" },
    { type: "house", value: 1, color: "#73D2DE" },

    { type: "padlock", value: 2, color: "#FFBC42" },
    { type: "padlock", value: 4, color: "#D81159" },
    { type: "padlock", value: 6, color: "#218380" },
    { type: "padlock", value: 1, color: "#73D2DE" },

    { type: "rocket", value: 2, color: "#FFBC42" },
    { type: "rocket", value: 4, color: "#D81159" },
    { type: "rocket", value: 6, color: "#218380" },
    { type: "rocket", value: 1, color: "#73D2DE" },

    { type: "umbrella", value: 2, color: "#FFBC42" },
    { type: "umbrella", value: 4, color: "#D81159" },
    { type: "umbrella", value: 6, color: "#218380" },
    { type: "umbrella", value: 1, color: "#73D2DE" },
];

// 2D Array for Layer Dimensions
let layerDimensions1 = [
    [12, 8, 10, 12, 12, 10, 8, 12],
    [0, 6, 8, 10, 10, 8, 6, 0],
    [0, 0, 6, 8, 8, 6, 0, 0],
    [0, 0, 0, 6, 6, 0, 0, 0],
    [0, 0, 0, 4, 4, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0]
];

// Board 2:  Wider in the middle 
let layerDimensions2 = [
    [12, 6, 8, 10, 12, 10, 8, 12],
    [0, 4, 6, 10, 12, 10, 4, 0],
    [0, 0, 6, 10, 10, 6, 0, 0],
    [0, 0, 0, 8, 8, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0] // A 'hole' row
];

// Board 3: Steeper sides 
let layerDimensions3 = [
    [12, 6, 6, 8, 8, 6, 6, 12],
    [0, 4, 6, 8, 8, 6, 4, 0],
    [0, 0, 4, 8, 8, 4, 0, 0],
    [0, 0, 2, 4, 4, 2, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let layerDimensions4 = [
    [12, 8, 9, 10, 11, 9, 7, 12],
    [0, 4, 6, 9, 10, 8, 5, 0],
    [0, 0, 4, 7, 8, 6, 0, 0],
    [0, 0, 2, 5, 6, 0, 0, 0],
    [0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let layerDimensions5 = [
    [12, 6, 7, 9, 11, 9, 7, 12],
    [0, 4, 8, 10, 12, 10, 6, 0],
    [0, 0, 0, 6, 8, 6, 0, 0], // Internal gaps
    [0, 0, 4, 8, 10, 8, 4, 0],
    [0, 0, 0, 0, 4, 0, 0, 0],  // Another gap row
    [0, 0, 0, 0, 2, 0, 0, 0]
];

let layerDimensions6 = [
    [12, 9, 9, 10, 10, 9, 9, 12],
    [0, 6, 7, 9, 9, 7, 6, 0],
    [0, 0, 5, 7, 7, 5, 0, 0],
    [0, 0, 0, 5, 5, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let layerDimensionsTallPyramid = [
    [2, 4, 7, 10, 12, 12, 10, 7, 4, 2],
    [1, 2, 5, 8, 12, 12, 8, 5, 2, 1],
    [0, 1, 3, 6, 10, 10, 6, 3, 1, 0],
    [0, 0, 1, 4, 8, 8, 4, 1, 0, 0],
    [0, 0, 0, 2, 6, 6, 2, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
];

let layerDimensionsPyramid = [
    [4, 8, 12, 12, 12, 12, 8, 4],
    [2, 6, 10, 10, 10, 10, 6, 2],
    [1, 4, 8, 12, 12, 8, 4, 1],
    [0, 2, 6, 10, 10, 6, 2, 0],
    [0, 0, 4, 8, 8, 4, 0, 0],
    [0, 0, 0, 6, 6, 0, 0, 0]
];

let smallerBoard = [
    [0, 6, 7, 9, 9, 7, 6, 0],
    [0, 0, 5, 7, 7, 5, 0, 0],
    [0, 0, 0, 5, 5, 0, 0, 0]
];

let singleLayerBoard = [
    [4, 6, 8, 10, 10, 8, 6, 4]
]

let superProBoard = [
    [12, 8, 10, 12, 12, 10, 8, 12, 12, 8, 10, 12, 12, 10],
    [0, 6, 8, 10, 10, 8, 6, 0, 0, 6, 8, 10, 10, 8],
    [0, 0, 6, 8, 8, 6, 0, 0, 0, 0, 6, 8, 8, 6],
    [0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 0],
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0]
];

let boards = [
    layerDimensions1,
    layerDimensions2,
    layerDimensions3,
    layerDimensions4,
    layerDimensions5,
    layerDimensions6,
    layerDimensionsTallPyramid,
    layerDimensionsPyramid
]

function getRandomBoard() {
    return boards[Math.floor(Math.random() * boards.length)]
}

function getEasyBoard() {
    return singleLayerBoard
}

function getBoardByDifficultyLevel(difficultyLevel) {
    if (difficultyLevel == 0)
        return singleLayerBoard

    if (difficultyLevel == 1)
        return smallerBoard

    if (difficultyLevel == 2)
        return getRandomBoard()

    if (difficultyLevel == 3) 
        return superProBoard
}

function canRemoveTiles(tile1pos, tile2pos) {
    if (isSameTile(tile1pos, tile2pos))
        return false;

    const tile1 = mapTiles[tile1pos.layer][tile1pos.row][tile1pos.col];
    const tile2 = mapTiles[tile2pos.layer][tile2pos.row][tile2pos.col];
    if (tile1 && tile2) {
        //Check if tiles are stacked (fix zoom in trick)
        if (tile1pos.row == tile2pos.row && tile1pos.col == tile2pos.col && Math.abs(tile1pos.layer - tile2pos.layer) == 1)
            return false;

        if (isSameTileType(tile1, tile2)) {
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

function isSameTileType(tile1, tile2) {
    return tile1.type == tile2.type && tile1.value == tile2.value && tile1.color == tile2.color
}

function isTileExposed(tilePos, strictMode = true) {

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

function totalBoardTiles(board) {
    let total = 0
    for (let layer = 0; layer < board.length; layer++) {
        const currentRow = board[layer]
        for (let column = 0; column < currentRow.length; column++) {
            total += currentRow[column]
        }
    }
    return total
}

function tilesRemainingIn3DMap(map) {
    let total = 0
    for (let layer = 0; layer < map.length; layer++) {
        const currentLayer = map[layer]
        for (let row = 0; row < currentLayer.length; row++) {
            const currentRow = currentLayer[row]
            for (let column = 0; column < currentRow.length; column++) {
                total += currentRow[column] ? 1 : 0
            }
        }
    }
    return total
}

function getTileIdByPos(tilePos) {
    if (tilePos) {
        const tileId = tilePos.layer + "-" + tilePos.row + "-" + tilePos.col;
        return tileId
    }

    return null
}