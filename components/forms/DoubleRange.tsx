import { ChangeEvent, FC, memo, useState } from 'react'
import styles from '@/components/forms/double-range.module.sass'
import { formatVND } from '@/utils/format'

interface IDoubleRangeProps {

}

const DoubleRange: FC<IDoubleRangeProps> = ({

}) => {

    const [minValue, setMinValue] = useState<number>(10000000)
    const [maxValue, setMaxValue] = useState<number>(90000000)

    const minPercentage = (minValue / 100000000) * 100
    const maxPercentage = (maxValue / 100000000) * 100
    const progressLeft = `${minPercentage}%`
    const progressRight = `${100 - maxPercentage}%`
    const gap = 20000000

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = parseInt(event.target.value)
        newMinValue = Math.round(newMinValue / 1000000) * 1000000
        setMinValue(Math.min(newMinValue, maxValue - gap))
    }

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = parseInt(event.target.value)
        newMaxValue = Math.round(newMaxValue / 1000000) * 1000000
        setMaxValue(Math.max(newMaxValue, minValue + gap))
    }


    return (
        <div className={styles._container}>
            <div className={styles._track}></div>
            <div
                className={styles._progress}
                style={{
                    left: progressLeft,
                    right: progressRight
                }}
            >
            </div>
            <span className={styles._min}>{formatVND(minValue)}</span>
            <span className={styles._max}>{formatVND(maxValue)}</span>
            <input
                type='range'
                value={minValue}
                min={0}
                max={100000000}
                onChange={handleMinChange}
            />
            <input
                type='range'
                value={maxValue}
                min={0}
                max={100000000}
                onChange={handleMaxChange}
            />
        </div>
    )
}

export default memo(DoubleRange)