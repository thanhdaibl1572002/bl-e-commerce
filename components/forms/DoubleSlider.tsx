'use client'
import { ChangeEvent, FC, memo, useState } from 'react'

interface DoubleSliderProps {
  min: number
  max: number
  values: [number, number]
  onChange: (values: [number, number]) => void
}

const DoubleSlider: FC<DoubleSliderProps> = ({ min, max, values, onChange }) => {
  const [leftValue, setLeftValue] = useState<number>(values[0])
  const [rightValue, setRightValue] = useState<number>(values[1])

  const handleLeftSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    setLeftValue(newValue)
    if (newValue > rightValue) {
      setRightValue(newValue)
    }
    onChange([newValue, rightValue])
  }

  const handleRightSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    setRightValue(newValue)
    if (newValue < leftValue) {
      setLeftValue(newValue)
    }
    onChange([leftValue, newValue])
  }

  return (
    <div className="double-slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={leftValue}
        onChange={handleLeftSliderChange}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={rightValue}
        onChange={handleRightSliderChange}
      />
      <div>
        <span>{leftValue}</span> - <span>{rightValue}</span>
      </div>
    </div>
  )
}

export default memo(DoubleSlider)
