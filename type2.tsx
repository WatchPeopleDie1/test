"use client"
import { useState } from "react"

export function MultipleAnswer() {
  const [number, setNumber] = useState(1)

  const handleIncreaseNumber = () => {
    setNumber((prev) => prev + 1)
  }

  const handleDecreaseNumber = () => {
    setNumber((prev) => Math.max(1, prev - 1)) 
  }

  return (
    <div>
      {[...Array(number)].map((_, index) => (
        <div key={index}>
          <input type="radio" name="answers" />
        </div>
      ))}

      <button onClick={handleIncreaseNumber}>+</button>
      <button onClick={handleDecreaseNumber}>-</button>
    </div>
  )
}
