class Shape {
    constructor() {
        this.textColor = "white";
        this.color = "white";
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        throw new Error('This is an abstract method');
    }
}

module.exports = Shape;