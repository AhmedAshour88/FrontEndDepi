const Rectangle = function(width, height){
    this.width  = width;
    this.height = height;
}
Rectangle.prototype.getArea = function () {
    return this.width*this.height;
} 
Rectangle.isSquare = function (shape) {
    return (shape.width == shape.height);
} 
let r = new Rectangle (10, 20);
console.log(r);
console.log('r.getArea()', r.getArea());
console.log('Rectangle.isSquare()', Rectangle.isSquare(r));