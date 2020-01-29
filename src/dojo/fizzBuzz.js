export const inScope = number => number > 0 && number < 100
export const isNumber = number => number && !isNaN(number) && typeof number === 'number'

export function fizzBuzz(number) {
  let result = ''
  if (number % 3 === 0) {
    result += 'Fizz'
  }
  if (number % 5 === 0) {
    result += 'Buzz'
  }
  return result || number
}
