import { ChangeEvent, FC, memo, useState } from 'react'
import styles from '@/components/forms/double-range.module.sass'
import { formatCurrency } from '@/utils/format'

interface IDoubleRangeProps {
    doubleRangeMinValue: number
    doubleRangeMaxValue: number
    doubleRangeGap?: number
    doubleRangeStep?: number
    doubleRangeCurrent?: {
        countryCode: string, 
        currencyCode: string
    }
}

const DoubleRange: FC<IDoubleRangeProps> = ({
    doubleRangeMinValue = 0,
    doubleRangeMaxValue = 100,
    doubleRangeGap = 10,
    doubleRangeStep,
    doubleRangeCurrent,
}) => {

    const [minValue, setMinValue] = useState<number>(doubleRangeMinValue)
    const [maxValue, setMaxValue] = useState<number>(doubleRangeMaxValue)

    const minPercentage = (minValue / doubleRangeMaxValue) * 100
    const maxPercentage = (maxValue / doubleRangeMaxValue) * 100
    const progressLeft = `${minPercentage}%`
    const progressRight = `${100 - maxPercentage}%`

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = parseInt(event.target.value)
        setMinValue(Math.min(newMinValue, maxValue - doubleRangeGap))
    }

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = parseInt(event.target.value)
        setMaxValue(Math.max(newMaxValue, minValue + doubleRangeGap))
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
            <span className={styles._min}>
                {
                    doubleRangeCurrent 
                    ? formatCurrency(
                        minValue, 
                        doubleRangeCurrent.countryCode, 
                        doubleRangeCurrent.currencyCode
                    ) 
                    : minValue
                }
            </span>
            <span className={styles._max}>
                {
                    doubleRangeCurrent 
                    ? formatCurrency(
                        maxValue, 
                        doubleRangeCurrent.countryCode, 
                        doubleRangeCurrent.currencyCode
                    ) 
                    : maxValue
                }    
            </span>
            <input
                type='range'
                value={minValue}
                min={doubleRangeMinValue}
                max={doubleRangeMaxValue}
                step={doubleRangeStep}
                onChange={handleMinChange}
            />
            <input
                type='range'
                value={maxValue}
                min={doubleRangeMinValue}
                max={doubleRangeMaxValue}
                step={doubleRangeStep}
                onChange={handleMaxChange}
            />
        </div>
    )
}

export default memo(DoubleRange)