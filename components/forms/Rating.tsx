'use client'
import { FC, memo, useState } from 'react'

interface RatingProps {
  maxValue: number
  defaultValue: number
  onChange: (value: number) => void
}

const Rating: FC<RatingProps> = ({ maxValue, defaultValue, onChange }) => {
  const [ratingValue, setRatingValue] = useState<number>(defaultValue)

  const handleRatingChange = (value: number) => {
    setRatingValue(value)
    onChange(value)
  }

  return (
    <div className="rating">
      {[...Array(maxValue)].map((_, index) => (
        <span
          key={index}
          className={index < ratingValue ? "star-filled" : "star-empty"}
          onClick={() => handleRatingChange(index + 1)}
        >
          &#9733
        </span>
      ))}
    </div>
  )
}

export default memo(Rating)
