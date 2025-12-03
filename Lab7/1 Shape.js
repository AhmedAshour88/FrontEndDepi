class Shape {
    calculateArea() {
        throw new Error("calculateArea() must be implemented by subclass");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    static compareAreas(rect1, rect2) {
        return rect1.calculateArea() - rect2.calculateArea();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    static compareAreas(c1, c2) {
        return c1.calculateArea() - c2.calculateArea();
    }
}


const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(15, 15);

console.log("Rectangle 1 Area:", rect1.calculateArea());
console.log("Rectangle 2 Area:", rect2.calculateArea());
console.log("Rectangle comparison:", Rectangle.compareAreas(rect1, rect2));

const cir1 = new Circle(5);
const cir2 = new Circle(8);

console.log("Circle 1 Area:", cir1.calculateArea());
console.log("Circle 2 Area:", cir2.calculateArea());
console.log("Circle comparison:", Circle.compareAreas(cir1, cir2));
