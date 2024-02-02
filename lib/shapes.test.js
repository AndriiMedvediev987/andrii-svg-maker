const Shape = require('./shapes.js');

describe('Shapes', () => {
    describe('render', () => {
        it('should check abstract method', () => {
            const shape = new Shape();
            const cb = () => shape.render();
            const err = new Error(
                'This is an abstract method'
            );
            expect(cb).toThrowError(err);
        });
    });
});