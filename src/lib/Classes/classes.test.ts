/* eslint-disable no-undef */
import { Classes } from './classes'

describe('test classes', () => {
    test('test function add classes', () => {
        const input1 = 'row'
        const input2 = 'justify-content-center'
        const output = `${input1} ${input2}`
        expect(Classes.set([input1, input2])).toBe(output)
    })
    test('test function remove classes', () => {
        const input1 = 'row justify-content-center'
        const input2 = 'row'
        const output = 'justify-content-center'
        expect(Classes.remove(Classes.get(input1), input2)).toBe(output)
    })
    test('test function get classes', () => {
        const output = 'justify-content-center'
        expect(Classes.print(Classes.get(output))).toBe(output)
    })
    test('test function removeAll classes', () => {
        const input = 'row justify-content-center'
        const output = ''
        expect(Classes.removeAll(Classes.get(input))).toBe(output)
    })
})
