export const inScope = number => number > 0 && number < 100
export const isNumber = number => number && typeof number === 'number'

export function fizzBuzz(number) {
  let result = ''
  if (!inScope(+number) || !isNumber(+number)) {
    return `invalid input: ${number}`
  }
  if (number % 3 === 0) {
    result += 'Fizz'
  }
  if (number % 5 === 0) {
    result += 'Buzz'
  }
  return result || number
}
