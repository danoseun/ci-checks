const addNumber = require('./add');

test('adds 3 + 5 to equal 8', () => {
    expect(addNumber.add(3,5)).toBe(8);
})

test('adds 4 + 5 to equal 9', () => {
    expect(addNumber.add(4,5)).toBe(9);
});

test('adds -3 + -5 to equal -8', () => {
    expect(addNumber.add(-3,-5)).toBe(-8);
})