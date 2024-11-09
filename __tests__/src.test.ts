import { prueba } from '../src/index';

describe('prueba jest', () => {
    test('return same than input', () => {
        const value = 1123
        expect(prueba(value)).toBe(value)
    })
})