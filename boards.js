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
    [12, 6, 6,  8, 8, 6, 6, 12],
    [0, 4, 6,  8, 8, 6, 4, 0],
    [0, 0, 4,  8, 8, 4, 0, 0],
    [0, 0, 2,  4, 4, 2, 0, 0],
    [0, 0, 0,  2, 2, 0, 0, 0],  
    [0, 0, 0,  0, 0, 0, 0, 0]
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
    [0, 0, 0, 6,  8, 6,  0, 0], // Internal gaps
    [0, 0, 4, 8, 10, 8,  4, 0],
    [0, 0, 0, 0,  4, 0,  0, 0],  // Another gap row
    [0, 0, 0, 0,  2, 0,  0, 0]
];

let layerDimensions6 = [
    [12, 9,  9, 10, 10,  9, 9, 12], 
    [0,  6,  7,  9,  9,  7, 6, 0],  
    [0,  0,  5,  7,  7,  5, 0, 0],
    [0,  0,  0,  5,  5,  0, 0, 0], 
    [0,  0,  0,  0,  2,  0, 0, 0],
    [0,  0,  0,  0,  0,  0, 0, 0]
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
    [0,  6,  7,  9,  9,  7, 6, 0],  
    [0,  0,  5,  7,  7,  5, 0, 0],
    [0,  0,  0,  5,  5,  0, 0, 0] 
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
    return smallerBoard
}