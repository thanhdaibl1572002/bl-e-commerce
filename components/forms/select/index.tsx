'use client'
import { FC, ReactElement, ReactNode, useEffect, useRef, useState, memo } from 'react'
import styles from '@/components/forms/select/select.module.sass'
import { PiCaretDownFill } from 'react-icons/pi'
import { getColorLevel, mainColor, redColor } from '@/variables/variables'
import { ISelectGroupOption } from '@/components/forms/select-group'

export interface ISelectOption {
    key: string
    value?: string | number
    label: string
    icon?: ReactNode | ReactElement
}

interface ISelectProps {
    options: ISelectOption[]
    required?: boolean
    selectedLabel?: string
    selectedLabelFontSize?: number
    selectedLabelFontWeight?: number
    selectedLabelFontColor?: string
    selectedLabelIcon?: ReactNode | ReactElement
    selectedLabelIconSize?: string | number
    selectedLabelIconColor?: string
    selectedLabelBackground?: string
    selectedWidth?: string | number
    selectedHeight?: string | number
    selectedFontSize?: number
    selectedFontWeight?: number
    selectedFontColor?: string
    selectedIconSize?: string | number
    selectedIconColor?: string
    selectedArrowSize?: string | number
    selectedArrowColor?: string,
    selectedBorder?: string
    selectedBorderRadius?: string | number
    selectedBoxShadow?: string
    optionsWidth?: string | number
    optionsHeight?: string | number
    optionsMaxHeight?: string | number
    optionsBorder?: string
    optionsBorderRadius?: string | number
    optionsBoxShadow?: string
    optionHeight?: string | number
    optionFontSize?: number
    optionFontWeight?: number
    optionFontColor?: string
    optionIconSize?: string | number
    optionIconColor?: string
    className?: string
    onChange?: (option: ISelectOption | ISelectGroupOption) => void
}

const Select: FC<ISelectProps> = ({
    options,
    required,
    selectedLabel,
    selectedLabelFontSize,
    selectedLabelFontWeight,
    selectedLabelFontColor,
    selectedLabelBackground,
    selectedLabelIcon,
    selectedLabelIconSize,
    selectedLabelIconColor,
    selectedWidth,
    selectedHeight,
    selectedFontSize,
    selectedFontWeight,
    selectedFontColor,
    selectedIconSize,
    selectedIconColor,
    selectedArrowSize,
    selectedArrowColor = mainColor,
    selectedBorder,
    selectedBorderRadius,
    selectedBoxShadow,
    optionsWidth,
    optionsHeight,
    optionsMaxHeight,
    optionsBorder,
    optionsBorderRadius,
    optionsBoxShadow,
    optionHeight,
    optionFontSize,
    optionFontWeight,
    optionFontColor,
    optionIconSize,
    optionIconColor,
    className,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<ISelectOption>(options[0])
    const selectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent): void => {
            selectRef.current
                && !selectRef.current.contains(event.target as Node)
                && setIsOpen(false)
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    const handleToggle = (): void => setIsOpen(!isOpen)

    const handleChange = (selectedOption: ISelectOption): void => {
        setIsError(selectedOption.value || !required ? false : true)
        const { icon, ...optionWithoutIcon } = selectedOption
        const newSelectedOption = options.find(option => option.value === optionWithoutIcon.value)
        newSelectedOption && setSelectedOption(newSelectedOption)
        setIsOpen(false)
        onChange && onChange({...optionWithoutIcon, required: required ? true : false })
    }

    const selectClassName = `${styles._container} ${className || ''}`.trim()

    return (
        <div
            className={selectClassName}
            ref={selectRef}
            style={{
                width: selectedWidth,
                height: selectedHeight,
            }}
        >
            {selectedLabel && (
                <label
                    className={styles._label}
                    style={{
                        fontSize: selectedLabelFontSize,
                        fontWeight: selectedLabelFontWeight,
                        color: selectedLabelFontColor,
                        background: selectedLabelBackground,
                    }}
                >
                {selectedLabelIcon && (
                    <span 
                    style={{
                        fontSize: selectedLabelIconSize,
                        color: selectedLabelIconColor,
                    }}
                    >
                    {selectedLabelIcon}
                    </span>
                )}
                {selectedLabel}
                </label>
            )}
            <div
                className={styles._selected}
                onClick={handleToggle}
                style={{
                    fontSize: selectedFontSize,
                    fontWeight: selectedFontWeight,
                    color: selectedFontColor,
                    border: isError ? `1px solid ${getColorLevel(redColor, 10)}` : selectedBorder,
                    borderRadius: selectedBorderRadius,
                    boxShadow: selectedBoxShadow,
                }}
            >
                <div className={styles._selected__content}>
                    {selectedOption.icon && (
                        <span
                            className={styles._selected__icon}
                            style={{
                                fontSize: selectedIconSize,
                                color: selectedIconColor,
                            }}
                        >
                            {selectedOption.icon}
                        </span>
                    )}
                    {selectedOption.label}
                </div>

                <PiCaretDownFill 
                    className={styles._selected__arrow}
                    style={{
                        fontSize: selectedArrowSize,
                        color: isError ? redColor : selectedArrowColor,
                    }}
                />
            </div>
            {required && isError && (
                <span className={styles._required}>Bắt buộc</span>
            )}
            {isOpen && (
                <ul
                    className={isError ? styles._options__error : styles._options}
                    style={{
                        width: optionsWidth,
                        height: optionsHeight,
                        maxHeight: optionsMaxHeight,
                        border: isError ? `1px solid ${getColorLevel(redColor, 10)}` : optionsBorder,
                        borderRadius: optionsBorderRadius,
                        boxShadow: optionsBoxShadow,
                    }}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleChange(option)}
                            style={{
                                height: optionHeight,
                                fontSize: optionFontSize,
                                fontWeight: optionFontWeight,
                                color: optionFontColor,
                            }}
                        >
                            {option.icon && (
                                <span
                                    style={{
                                        fontSize: optionIconSize,
                                        color: optionIconColor,
                                    }}
                                >
                                    {option.icon}
                                </span>
                            )}{option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default memo(Select)

