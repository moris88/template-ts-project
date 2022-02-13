/* eslint-disable no-undef */
import { Classes } from '../src/lib/classes'

describe('test classes', () => {
  test('test function add classes', () => {
    const input1 = 'row'
    const input2 = 'justify-content-center'
    const output = `${input1} ${input2}`
    expect(Classes.add([input1, input2])).toBe(output)
  })
  test('test function remove classes', () => {
    const input = 'row'
    const output = 'justify-content-center'
    expect(Classes.remove(input)).toBe(output)
  })
  test('test function get classes', () => {
    const output = 'justify-content-center'
    expect(Classes.get(output)).toBe(output)
  })
  test('test function removeAll classes', () => {
    const output = ''
    expect(Classes.removeAll()).toBe(output)
  })
})
