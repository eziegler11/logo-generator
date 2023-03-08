// Classes - Parents and Children
// Parent Class
class Shape {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
    setColor(color) {
        this.color = color;
    }
};

// Triangle/Child Class
class Triangle extends Shape {
    constructor(color) {
        super(color, "polygon");
    }

    render() {
        return `<${this.shape} points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

// Square/Child Class
class Square extends Shape {
    constructor(color) {
        super(color, "rect")
    }

    render() {
        return `<${this.shape} x="75" y="45" width="150" height="150" fill="${this.color}"/>`
    }
}

// Circle/Child Class
class Circle extends Shape {
    constructor(color) {
        super(color, "circle")
    }

    render() {
        return `<${this.shape} cx="150" cy="120" r="80" fill="${this.color}"/>`
    }
}

// Exporting for use on other pages
module.exports = { Triangle, Square, Circle };