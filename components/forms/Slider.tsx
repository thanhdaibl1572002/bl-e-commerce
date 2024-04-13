'use client'
import { ChangeEvent, FC, memo, useState } from 'react'
import styles from '@/components/forms/slider.module.sass'

interface SliderProps {
    min: number
    max: number
    value?: number
    onChange: (value: number) => void
}

const Slider: FC<SliderProps> = ({ min, max, value, onChange }) => {
    const [sliderValue, setSliderValue] = useState<number>(value || 0)

    const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10)
        setSliderValue(newValue)
        onChange(newValue)
    }

    return (
        <div className={styles._container}>
            <input
                type='range'
                min={min}
                max={max}
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <div>{sliderValue}</div>
        </div>
    )
}

export default memo(Slider)
