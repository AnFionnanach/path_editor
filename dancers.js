function Dancer() {
    this.position = {
        x : 0,
        y : 0
    };
    this.shape, this.colour;
}

Dancer.prototype.drawMe = function() {
    // set the colour
    context.fillStyle = this.colour;

    // draw the shape
    if (this.shape == "square") {
        context.fillRect(this.position.x - offsetX, this.position.y - offsetY, dancerWidth, dancerHeight);
    } else {
        context.arc(this.position.x, this.position.y +1, dancerWidth / 2, 0, 2 * Math.PI, false);
        context.fill();
    }
};

var dancers = [];

dancer1M = new Dancer();
dancer1M.position = {
    x : 180,
    y : 90
};
dancer1M.shape = "square";
dancer1M.colour = "blue";

dancer1L = new Dancer();
dancer1L.position = {
    x : 360,
    y : 90
};
dancer1L.shape = "circle";
dancer1L.colour = "blue";

dancer2M = new Dancer();
dancer2M.position = {
    x : 180,
    y : 180
};
dancer2M.shape = "square";
dancer2M.colour = "green";

dancer2L = new Dancer();
dancer2L.position = {
    x : 360,
    y : 180
};
dancer2L.shape = "circle";
dancer2L.colour = "green";

dancer3M = new Dancer();
dancer3M.position = {
    x : 180,
    y : 270
};
dancer3M.shape = "square";
dancer3M.colour = "red";

dancer3L = new Dancer();
dancer3L.position = {
    x : 360,
    y : 270
};
dancer3L.shape = "circle";
dancer3L.colour = "red";

dancer4M = new Dancer();
dancer4M.position = {
    x : 180,
    y : 360
};
dancer4M.shape = "square";
dancer4M.colour = "black";

dancer4L = new Dancer();
dancer4L.position = {
    x : 360,
    y : 360
};
dancer4L.shape = "circle";
dancer4L.colour = "black";


dancers[0] = dancer1M;
dancers[1] = dancer1L;
dancers[2] = dancer2M;
dancers[3] = dancer2L;
dancers[4] = dancer3M;
dancers[5] = dancer3L;
dancers[6] = dancer4M;
dancers[7] = dancer4L;

function drawDancers() {
    for (var i = 0; i < dancers.length; i++) {
        dancers[i].drawMe();
    }
}
