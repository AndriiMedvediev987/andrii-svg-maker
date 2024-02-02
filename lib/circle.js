const Shape = require('./shapes.js');

class Circle extends Shape{
    constructor(){
        super();
    }

    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
    }
}

module.exports = Circle;