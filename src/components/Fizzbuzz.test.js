import React from 'react'
import { FizzBuzz } from './Fizzbuzz'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
it('should show number when click 3', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/3/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('3')
})
it('should show fizz when click 3 and press "=" button ', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/3/))
  userEvent.click(comp.queryByText(/=/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('fizz')
})
it('should show Buzz when click 5 and press "=" button ', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/5/))
  userEvent.click(comp.queryByText(/=/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('buzz')
})
it('should show Buzz when click 15 and press "=" button ', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/1/))
  userEvent.click(comp.queryByText(/5/))
  userEvent.click(comp.queryByText(/=/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('fizzbuzz')
})
it('should re-input number after calculate result ', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/1/))
  userEvent.click(comp.queryByText(/5/))
  userEvent.click(comp.queryByText(/=/))
  userEvent.click(comp.queryByText(/3/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('3')
})
it('should reset result to 0 when press "c" button ', function() {
  // give
  const comp = render(<FizzBuzz />)
  // when
  userEvent.click(comp.queryByText(/1/))
  userEvent.click(comp.queryByText(/5/))
  userEvent.click(comp.queryByText(/C/))
  // then
  expect(comp.queryByTestId('result')).toHaveTextContent('0')
})
