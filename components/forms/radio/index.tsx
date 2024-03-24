'use client'
import { FC, ReactElement, ReactNode, useEffect, useRef, useId, useState, memo, ChangeEvent } from 'react'
import styles from '@/components/forms/radio/radio.module.sass'
import { IoCheckmark } from 'react-icons/io5'
import { blackColor, mainColor, whiteColor } from '@/variables/variables'
import { IRadioGroupValue } from '@/components/forms/radio-group'

export interface IRadioValue {
    name: string
    value: string | number
    label?: string
    defaultChecked?: boolean
}

interface RadioProps {
    width?: number | string
    height?: number | string
    checkSize?: number
    radioSize?: number
    radioBorder?: string
    radioBorderRadius?: number | string
    radioColor?: string
    radioBackground?: string
    labelText?: string
    labelTextSize?: number
    labelTextColor?: string
    labelTextWeight?: number
    defaultChecked?: boolean
    checked?: boolean
    name: string
    value: string | number
    className?: string
    onChange?: (value: IRadioGroupValue) => void
}

const Radio: FC<RadioProps> = ({
    width,
    height,
    checkSize = 13,
    radioSize = 16,
    radioBorder,
    radioBorderRadius = '50%',
    radioColor = whiteColor,
    radioBackground = mainColor,
    labelText,
    labelTextSize = 16,
    labelTextColor = blackColor,
    labelTextWeight = 400,
    name,
    value,
    defaultChecked = false,
    checked,
    className,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)
    const id = useId()

    useEffect(() => setIsChecked(checked!) ,[checked])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newValue: IRadioValue = {
            name: event.target.name,
            value: event.target.value,
            label: labelText,
            defaultChecked: defaultChecked ? true : false,
        }

        setIsChecked(true)
        onChange && onChange(newValue)
    }

    const radioClassName = `${styles._container} ${className || ''}`.trim()

    return (
        <div 
            className={radioClassName}
            style={{
                width: width,
                height: height
            }}
        >
            <input
                type="radio"
                id={id}
                name={name}
                checked={isChecked}
                value={value}
                onChange={handleChange}
            />
            <label htmlFor={id}>
                <div
                    className={styles._check}
                    style={{
                        width: radioSize,
                        height: radioSize,
                        fontSize: checkSize,
                        color: radioColor,
                        background: isChecked ? radioBackground : whiteColor,
                        border: radioBorder,
                        borderRadius: radioBorderRadius,
                    }}
                >
                    {isChecked && <IoCheckmark />}
                </div>
                {labelText && (
                    <span
                        style={{
                            fontSize: labelTextSize,
                            color: labelTextColor,
                            fontWeight: labelTextWeight,
                        }}
                    >
                        {labelText}
                    </span>
                )}
            </label>
        </div>
    )
}

export default memo(Radio)
