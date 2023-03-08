// Importing Dependencies
const { Triangle, Square, Circle } = require('../lib/shapes')

describe('shape', () => {
    // testing triangle
    describe('triangle', () => {
        test('all properties of triangle', () => {
            const triangle = new Triangle('black');
            expect(triangle.color).toEqual('black');
            expect(triangle.shape).toEqual('polygon');
        });
        test('render a triangle', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
        });
    })
    // testing circle
    describe('circle', () => {
        test('all properties of circle', () => {
            const circle = new Circle('black');
            expect(circle.color).toEqual('black');
            expect(circle.shape).toEqual('circle');
        });
        test('render a circle', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toEqual(`<circle cx="150" cy="120" r="80" fill="blue"/>`);
        })
    })
    // testing square
    describe('square', () => {
        test('all properties of square', () => {
            const square = new Square('black');
            expect(square.color).toEqual('black');
            expect(square.shape).toEqual('rect');
        });
        test('render a square', () => {
            const square = new Square('blue');
            expect(square.render()).toEqual(`<rect x="75" y="45" width="150" height="150" fill="blue"/>`);
        });
    })
})