const calc = require('../src/calculatrice');

test('addition', () => {
  expect(calc.addition(2, 3)).toBe(5);
});

test('soustraction', () => {
  expect(calc.soustraction(5, 3)).toBe(2);
});

test('multiplication', () => {
  expect(calc.multiplication(2, 4)).toBe(8);
});

test('division', () => {
  expect(calc.division(6, 3)).toBe(2);
});

test('division par zéro', () => {
  expect(() => calc.division(5, 0)).toThrow();
});
