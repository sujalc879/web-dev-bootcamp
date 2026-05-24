class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height =    height;
        this.color = color;
        
    }

    area() {
        return this.width * this.height;
    }

    getcolor() {
        return "the color of the rectangle is " + this.color;
        
    }
}

const rectangle1 = new Rectangle(2, 3, "yello");
const color = rectangle1.getcolor();
console.log(color);


