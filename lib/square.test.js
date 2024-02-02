const Square = require('./square.js');

describe('Square', () => {
    describe('render', () => {
        it('should check render', () => {
            const shape = new Square();
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="yellow"/>');
        });
    });
});