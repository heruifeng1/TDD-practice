import React, { useState } from 'react'
import { fizzBuzz } from '../dojo/fizzBuzz'

function Result({ number }) {
  return <div data-testid="number-result">{fizzBuzz(number)}</div>
}

export function FizzBuzz() {
  const [number, setNumber] = useState('')
  return (
    <div>
      <input
        type="number"
        data-testid="input-number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      {number && <Result number={number} />}
    </div>
  )
}
