
function Position(x, y) {
    this.x = x;
    this.y = y;
}

function Thing(position) {
    this.position = position;
}

Thing.prototype.getElement = function(screen) {
    throw 'invalid thing';
};

Thing.prototype.getType = function() {
    return 'THING';
};

function Plane(position) {
    this.position = position;
}

Plane.prototype = new Thing();
Plane.prototype.constructor = Plane;

Plane.prototype.getElement = function(screen) {

    var element = d3.select('svg').append('circle')
        .attr('r', '10')
        .attr('style', 'fill:white;stroke:black;stroke-width:5');

    console.log(element);
};

Plane.prototype.getType = function() {
    return 'PLANE';
};


function Screen(element) {
    this.element = element;
}

Screen.prototype.addThing = function(thing) {
    var element = thing.getElement(this);
    this.element.append(element);
};

function init() {

    var screen = new Screen($('#screen'));

    screen.addThing(new Plane());

}




