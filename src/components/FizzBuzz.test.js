import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FizzBuzz } from './FizzBuzz'

describe('FizzBuzz UI', () => {
  it('should not show result when not input number', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    const result = queryByTestId('number-result')

    expect(result).toBeNull()
  })
  it('should show result when input number not divisible by 3 or 5', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), '2')
    userEvent.click(queryByTestId('check-button'))

    const result = queryByTestId('number-result').textContent
    expect(result).toEqual('2')
  })
  it('should show result when input number divisible by 3', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), '3')
    userEvent.click(queryByTestId('check-button'))

    const result = queryByTestId('number-result').textContent
    expect(result).toEqual('Fizz')
  })
  it('should show result when input number divisible by 55', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), '5')
    userEvent.click(queryByTestId('check-button'))

    const result = queryByTestId('number-result').textContent
    expect(result).toEqual('Buzz')
  })
  it('should show result when input number divisible by 3 and 5', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), '15')
    userEvent.click(queryByTestId('check-button'))

    const result = queryByTestId('number-result').textContent
    expect(result).toEqual('FizzBuzz')
  })
  it('should show error message when input number out of scope', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), '101')

    const result = queryByTestId('error-result').textContent
    expect(result).toEqual('invalid input: 101')
  })

  it('should show error message when input invalid string', () => {
    const { queryByTestId } = render(<FizzBuzz />)

    userEvent.type(queryByTestId('input-number'), 'error')

    const result = queryByTestId('error-result').textContent
    expect(result).toEqual('invalid input: error')
  })
})
