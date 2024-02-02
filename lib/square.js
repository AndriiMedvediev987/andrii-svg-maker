const Shape = require('./shapes.js');

class Square extends Shape{
    constructor(){
        super();
    }

    render(){
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
    }
}

module.exports = Square;