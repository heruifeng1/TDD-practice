import React, { useState } from 'react'
import { fizzBuzz, inScope, isNumber } from '../dojo/fizzBuzz'

function Result({ number }) {
  return <div data-testid="number-result">{fizzBuzz(number)}</div>
}

export function FizzBuzz() {
  const [value, setValue] = useState('')
  const [showError, setShowError] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleValueChange = e => {
    const newValue = e.target.value

    if (isNumber(+newValue) && inScope(+newValue)) {
      setShowError(false)
    } else {
      setShowError(true)
    }

    setValue(newValue)
    setShowResult(false)
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          data-testid="input-number"
          value={value}
          onChange={handleValueChange}
        />
        <button
          onClick={() => setShowResult(true)}
          disabled={!value || showError}
          data-testid="check-button"
        >
          =
        </button>
        {showResult && <Result number={parseInt(value)} />}
      </div>
      {value && showError && (
        <div data-testid="error-result" style={{ color: 'red' }}>
          invalid input: {value}
        </div>
      )}
    </>
  )
}
