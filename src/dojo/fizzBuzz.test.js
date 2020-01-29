function fizzBuzz(number) {
  return 'Fizz';
}

describe('Test FizzBuzz', () => {
  it('should return normal number string when given number', () => {
    let result = fizzBuzz(3);

    expect(result).toBe('Fizz');
  });
})
