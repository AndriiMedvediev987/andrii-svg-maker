const Triangle = require('./triangle.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should check render', () => {
            const shape = new Triangle();
            shape.setColor("#ff0000");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#ff0000" />');
        });
    });
});