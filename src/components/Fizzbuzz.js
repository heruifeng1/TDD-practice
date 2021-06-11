import React, { useState } from 'react'
import { fizzbuzzGame } from '../utils/fizzbuzzGame'
import styled from 'styled-components'

export function FizzBuzz() {
  const [value, setValue] = useState(0)

  function selectNumber(num) {
    if (typeof value === 'number') {
      setValue(value * 10 + num)
    } else {
      setValue(num)
    }
  }

  return (
    <div>
      <Result data-testid='result'>{value}</Result>
      <ButtonPanel>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
          <Button key={num} onClick={() => selectNumber(num)}>
            {num}
          </Button>
        ))}
        <Button onClick={() => setValue(0)}>C</Button>
        <Button onClick={() => setValue(fizzbuzzGame(value))} orange>=</Button>
      </ButtonPanel>

    </div>
  )
}

const Result = styled.div`
  background-color: #858694;
  color: white;
  text-align: right;
  font-weight: 200;
  font-size: 2.5rem;
  padding: 20px;
`
const ButtonPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  background-color: #858694;
`
const Button = styled.button`
  color: ${props => (props.orange ? '#fff' : '#000')};
  background-color: ${props => (props.orange ? '#f5923e' : '#e0e0e0')};
  flex-basis: calc(33.3% - 1px);
  text-align: center;
  font-size: 1.5rem;
  margin: 0 1px 1px 0;
  padding: 30px 0;
`
