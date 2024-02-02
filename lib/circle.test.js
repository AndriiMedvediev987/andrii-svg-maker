const Circle = require('./circle.js');

describe('Circle', () => {
    describe('render', () => {
        it('should check render', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>');
        });
    });
});