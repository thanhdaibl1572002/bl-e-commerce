'use client'
import { ChangeEvent, FC, memo, useState, CSSProperties } from 'react'
import styles from '@/components/forms/doubleslider.module.sass'
import { blueColor, getColorLevel, whiteColor } from '@/variables/variables'

interface RangeCssProperties extends CSSProperties {
  '--thumb-size': string
  '--thumb-border': string
  '--thumb-border-radius': number | string
  '--thumb-background': string
}

interface DoubleSliderProps {
  min: number
  max: number
  values: [number, number]
  gap?: number
  step?: number
  thumbSize?: number
  thumbBorder?: string
  thumbBorderRadius?: number | string
  thumbBackground?: string
  trackWidth?: number | string
  trackHeight?: number | string
  trackBackground?: string
  progressBackground?: string
  labelWidth?: number | string
  labelHeight?: number | string
  labelPadding?: number
  labelBackground?: string
  labelTextColor?: string
  labelTextSize?: number
  labelTextWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  labelBorder?: string,
  labelBorderRadius?: number,
  currencyLocales?: string
  currencyCode?: string
  onChange: (values: [number, number]) => void
}

const DoubleSlider: FC<DoubleSliderProps> = ({
  min,
  max,
  values,
  step,
  gap = max / 5,
  thumbSize = 20,
  thumbBorder = `4px solid ${blueColor}`,
  thumbBorderRadius = '50%',
  thumbBackground = whiteColor,
  trackWidth = '100%',
  trackHeight = 5,
  trackBackground = getColorLevel(blueColor, 10),
  progressBackground = blueColor,
  labelWidth,
  labelHeight,
  labelPadding ,
  labelBackground,
  labelTextColor,
  labelTextSize = 13.5,
  labelTextWeight,
  labelBorder,
  labelBorderRadius = 3,
  currencyLocales = 'en-US',
  currencyCode = 'USD',
  onChange
}) => {
  const [leftValue, setLeftValue] = useState<number>(values[0])
  const [rightValue, setRightValue] = useState<number>(values[1])

  const handleLeftSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
      setLeftValue(isNaN(newValue) ? min : newValue)
    if (newValue > rightValue - gap && newValue >= min) 
      setLeftValue(newValue + gap > rightValue ? rightValue - gap : newValue)
    onChange([newValue, rightValue])
  }

  const handleRightSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    setRightValue(isNaN(newValue) || newValue > max ? max : newValue)
    if (newValue < leftValue + gap) 
      setRightValue(newValue - gap < leftValue ? leftValue + gap : newValue)
    onChange([leftValue, newValue])
  }

  const progressLeft = ((leftValue - min) / (max - min)) * 100 + '%'
  const progressRight = ((rightValue - max) / (min - max)) * 100 + '%'

  const rangeStyles: RangeCssProperties = {
    '--thumb-size': `${thumbSize}px`,
    '--thumb-border': thumbBorder,
    '--thumb-border-radius': typeof thumbBorderRadius === 'number' ? `${thumbBorderRadius}px` : thumbBorderRadius,
    '--thumb-background': thumbBackground,
  }

  const formaLeftValue = currencyLocales && currencyCode 
    ? new Intl.NumberFormat(currencyLocales, { style: 'currency', currency: currencyCode }).format(leftValue)
    : leftValue

  const formaRightValue = currencyLocales && currencyCode 
  ? new Intl.NumberFormat(currencyLocales, { style: 'currency', currency: currencyCode }).format(rightValue)
  : rightValue

  return (
    <div className={styles._container}>
      <div className={styles._number}>
        <span 
          style={{
            width: labelWidth,
            height: labelHeight,
            padding: labelPadding,
            background: labelBackground,
            color: labelTextColor,
            fontSize: labelTextSize,
            fontWeight: labelTextWeight,
            border: labelBorder,
            borderRadius: labelBorderRadius,
          }}
        >
          {formaLeftValue}
        </span>
        <span
          style={{
            width: labelWidth,
            height: labelHeight,
            padding: labelPadding,
            background: labelBackground,
            color: labelTextColor,
            fontSize: labelTextSize,
            fontWeight: labelTextWeight,
            border: labelBorder,
            borderRadius: labelBorderRadius,
          }}
        >
          {formaRightValue}
        </span>
      </div>
      <div 
        className={styles._range} 
        style={{
          width: trackWidth,
          height: trackHeight,
          background: trackBackground,
        }}
      >
        <div 
          className={styles._progress} 
          style={{ 
            left: progressLeft, 
            right: progressRight,
            background: progressBackground,
          }}
        >
        </div>
        <input
          type='range'
          min={min}
          max={max}
          value={leftValue}
          step={step}
          style={rangeStyles}
          onChange={handleLeftSliderChange}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={rightValue}
          step={step}
          style={rangeStyles}
          onChange={handleRightSliderChange}
        />
      </div>
    </div>
  )
}

export default memo(DoubleSlider)
