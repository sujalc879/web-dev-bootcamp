class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return "the color is " + this.color;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color)
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape{
    constructor(radius, color) {
        super(color)
        this.radius = radius;
    }

    area() {
        return 3.14 * (this.radius * this.radius);
    }
}

const rectangle = new Rectangle(12, 10, "red");

const result1 = rectangle.area();
console.log("the rectangle area is " + result1 + " sqcm");

const result2 = rectangle.perimeter();
console.log("the rectangle perimeter is " + result2);

const result3 = rectangle.getColor();
console.log("the rectangel color is " + result3);



console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");



const circle = new Circle(5, "yellow");

const circleResult1 = circle.area();
console.log("the area of circle is " + circleResult1 + " sqcm");

const circleResult2 = circle.getColor();
console.log("the color of circle is " + circleResult2);

