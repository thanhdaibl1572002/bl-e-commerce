'use client'
import { FC, memo, useState, ChangeEvent, useId } from 'react'
import styles from '@/components/forms/checkbox/checkbox.module.sass'
import { IoCheckmark } from 'react-icons/io5'
import { mainColor, whiteColor, blackColor } from '@/variables/variables'
import parse from 'html-react-parser'
import { ICheckBoxGroupValue } from '@/components/forms/checkbox-group'

export interface ICheckBoxValue {
    name: string
    value: string | number
    label?: string
    defaultChecked?: boolean
}

interface CheckBoxProps {
    width?: number | string
    height?: number | string
    checkSize?: number
    checkBoxSize?: number
    checkBoxBorder?: string
    checkBoxBorderRadius?: number | string
    checkBoxColor?: string
    checkBoxBackground?: string
    labelText?: string
    labelTextSize?: number
    labelTextColor?: string
    labelTextWeight?: number
    defaultChecked?: boolean
    name: string
    value: string | number
    className?: string
    onChange?: (value: ICheckBoxGroupValue) => void
}

const CheckBox: FC<CheckBoxProps> = ({
    width,
    height,
    checkSize = 14,
    checkBoxSize = 16,
    checkBoxBorder,
    checkBoxBorderRadius = 2,
    checkBoxColor = whiteColor,
    checkBoxBackground = mainColor,
    labelText,
    labelTextSize = 16,
    labelTextColor = blackColor,
    labelTextWeight = 400,
    name,
    value,
    defaultChecked = false,
    className,
    onChange,
}) => {

    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)

    const id = useId()

    const handleToggle = (): void => setIsChecked(!isChecked)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        handleToggle()
        onChange && onChange ({
            name: event.target.name,
            value: event.target.checked ? event.target.value : '',
            label: labelText,
            defaultChecked: defaultChecked ? true : false,
        })
    }

    const checkBoxClassName = `${styles._container} ${className || ''}`.trim()

    return (
        <div 
            className={checkBoxClassName}
            style={{
                width: width,
                height: height
            }}
        >
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={isChecked}
                value={value}
                onChange={handleChange}
            />
            <label 
                htmlFor={id} 
                style={{ 
                    fontSize: labelTextSize,
                    color: labelTextColor,
                    fontWeight: labelTextWeight,
                }}
            >
                <div 
                    className={styles._check}
                    style={{ 
                        width: checkBoxSize,
                        height: checkBoxSize,
                        fontSize: checkSize,
                        color: checkBoxColor,
                        background: isChecked ? checkBoxBackground : whiteColor,
                        border: checkBoxBorder,
                        borderRadius: checkBoxBorderRadius,
                    }}
                >
                    {isChecked && <IoCheckmark />}
                </div>
                {labelText && <span>{parse(labelText)}</span>}
            </label>
        </div>
    )
}

export default memo(CheckBox)