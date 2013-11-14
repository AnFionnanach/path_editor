var dancerWidth = 24;
var dancerHeight = 60;
var xGap = dancerHeight * 3;
var yGap = 160;
//Math.ceil(dancerHeight * 2.66667);

function Dancer() {
    this.shape
}

snapToGrid = function(shape) {
    x = shape.getPosition().x;
    y = shape.getPosition().y;
    shape.setPosition(Math.round(x / gridStep) * gridStep, Math.round(y / gridStep) * gridStep);
};

Dancer.prototype.whereAmI = function() {
    return this.shape.getPosition();
};

var dancers = [];

var dancer1M = new Dancer();
dancer1M.shape = new Kinetic.Rect({
    x : dancerWidth * 5,
    y : dancerHeight * 1.5,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'blue',
    draggable : true
});
dancer1M.shape.on('dragend', function() {
    snapToGrid(dancer1M.shape);
    animLayer.draw();
});

var dancer1L = new Dancer();
dancer1L.shape = new Kinetic.Rect({
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer1M.shape.getPosition().y,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'blue',
    draggable : true
});
dancer1L.shape.on('dragend', function() {
    snapToGrid(dancer1L.shape);
    animLayer.draw();
});

var dancer2M = new Dancer();
dancer2M.shape = new Kinetic.Rect({
    x : dancerWidth * 5,
    y : dancer1M.shape.getPosition().y + yGap,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'green',
    draggable : true
});
dancer2M.shape.on('dragend', function() {
    snapToGrid(dancer2M.shape);
    animLayer.draw();
});

var dancer2L = new Dancer();
dancer2L.shape = new Kinetic.Rect({
    x : dancer2M.shape.getPosition().x + xGap,
    y : dancer2M.shape.getPosition().y,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'green',
    draggable : true
});
dancer2L.shape.on('dragend', function() {
    snapToGrid(dancer2L.shape);
    animLayer.draw();
});

var dancer3M = new Dancer();
dancer3M.shape = new Kinetic.Rect({
    x : dancerWidth * 5,
    y : dancer2M.shape.getPosition().y + yGap,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'red',
    draggable : true
});
dancer3M.shape.on('dragend', function() {
    snapToGrid(dancer3M.shape);
    animLayer.draw();
});

var dancer3L = new Dancer();
dancer3L.shape = new Kinetic.Rect({
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer3M.shape.getPosition().y,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'red',
    draggable : true
});
dancer3L.shape.on('dragend', function() {
    snapToGrid(dancer3L.shape);
    animLayer.draw();
});

var dancer4M = new Dancer();
dancer4M.shape = new Kinetic.Rect({
    x : dancerWidth * 5,
    y : dancer3M.shape.getPosition().y + yGap,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'black',
    draggable : true
});
dancer4M.shape.on('dragend', function() {
    snapToGrid(dancer4M.shape);
    animLayer.draw();
});

var dancer4L = new Dancer();
dancer4L.shape = new Kinetic.Rect({
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer4M.shape.getPosition().y,
    offset : [dancerWidth / 2, dancerHeight / 2],
    width : dancerWidth,
    height : dancerHeight,
    fill : 'black',
    draggable : true
});
dancer4L.shape.on('dragend', function() {
    snapToGrid(dancer4L.shape);
    animLayer.draw();
});

dancers[0] = dancer1M;
dancers[1] = dancer1L;
dancers[2] = dancer2M;
dancers[3] = dancer2L;
dancers[4] = dancer3M;
dancers[5] = dancer3L;
dancers[6] = dancer4M;
dancers[7] = dancer4L;

var startPositions = [];

startPositions[0] = {
    x : dancerWidth * 5,
    y : dancerHeight * 1.5
};
startPositions[1] = {
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer1M.shape.getPosition().y
};
startPositions[2] = {
    x : dancerWidth * 5,
    y : dancer1M.shape.getPosition().y + yGap
};
startPositions[3] = {
    x : dancer2M.shape.getPosition().x + xGap,
    y : dancer2M.shape.getPosition().y
};
startPositions[4] = {
    x : dancerWidth * 5,
    y : dancer2M.shape.getPosition().y + yGap
};
startPositions[5] = {
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer3M.shape.getPosition().y
};
startPositions[6] = {
    x : dancerWidth * 5,
    y : dancer3M.shape.getPosition().y + yGap
};
startPositions[7] = {
    x : dancer1M.shape.getPosition().x + xGap,
    y : dancer4M.shape.getPosition().y
};

