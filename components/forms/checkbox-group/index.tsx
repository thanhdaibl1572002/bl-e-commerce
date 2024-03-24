import { ChangeEvent, FC, ReactElement, ReactNode, memo, useEffect, useState } from 'react'
import styles from '@/components/forms/checkbox-group/checkbox-group.module.sass'
import Checkbox from '@/components/forms/checkbox'

export interface ICheckBoxGroupValue {
    key?: string | number
    name: string
    value: string | number
    label?: string
    defaultChecked?: boolean
}


interface ICheckBoxGroupProps {
    groupOptions: ICheckBoxGroupValue[]
    groupWidth?: string | number
    groupHeight?: string | number
    groupPadding?: string | number
    groupBorder?: string
    groupBorderRadius?: string | number
    groupBoxShadow?: string
    groupLabel?: string
    groupLabelFontSize?: number
    groupLabelFontWeight?: number
    groupLabelFontColor?: string
    groupLabelIcon?: ReactNode | ReactElement
    groupLabelIconSize?: string | number
    groupLabelIconColor?: string
    groupLabelBackground?: string
    groupItemPerRow?: number
    groupItemRowSpacing?: number
    groupItemColSpacing?: number
    itemCheckSize?: number
    itemCheckBoxSize?: number
    itemCheckBoxBorder?: string
    itemCheckBoxBorderRadius?: number | string
    itemCheckBoxColor?: string
    itemCheckBoxBackground?: string
    itemCheckBoxMinWidth?: number
    itemlabelTextSize?: number
    itemlabelTextColor?: string
    itemlabelTextWeight?: number
    className?: string
    onChange?: (values: { values: ICheckBoxGroupValue[], isMissing: boolean }) => void
    getInitSelectedValues?: (values: { values: ICheckBoxGroupValue[], isMissing: boolean }) => void
}

const CheckBoxGroup: FC<ICheckBoxGroupProps> = ({
    groupOptions,
    groupWidth,
    groupHeight,
    groupPadding,
    groupBorder,
    groupBorderRadius,
    groupBoxShadow,
    groupLabel,
    groupLabelFontSize,
    groupLabelFontWeight,
    groupLabelFontColor,
    groupLabelIcon,
    groupLabelIconSize,
    groupLabelIconColor,
    groupLabelBackground,
    groupItemPerRow = 3,
    groupItemRowSpacing = 10,
    groupItemColSpacing = 10,
    itemCheckBoxMinWidth = 200,
    itemCheckSize,
    itemCheckBoxSize = 14,
    itemCheckBoxBorder,
    itemCheckBoxBorderRadius,
    itemCheckBoxColor,
    itemCheckBoxBackground,
    itemlabelTextSize = 14,
    itemlabelTextColor,
    itemlabelTextWeight,
    className,
    onChange,
    getInitSelectedValues,
}) => {

    const initSelectedValues: ICheckBoxGroupValue[] = groupOptions.map(item => ({
        key: item.key,
        name: item.name,
        value: item.defaultChecked ? item.value : '',
        label: item.label,
        defaultChecked: item.defaultChecked ? true : false,
    }))

    useEffect(() => {
        getInitSelectedValues && getInitSelectedValues({ 
            values: initSelectedValues, 
            isMissing: !initSelectedValues.some(value => value.value)
        })
    }, [])
    
    const [selectedValues, setSelectedValues] = useState<ICheckBoxGroupValue[]>(initSelectedValues)

    const handleChange = (newValue: ICheckBoxGroupValue): void => {
        const updateIndex = selectedValues.findIndex(value => value.key === newValue.key)
        setSelectedValues(prevSelectedValues => {
            const updatedValues = [...prevSelectedValues]
            updatedValues[updateIndex] = newValue
            onChange && onChange({ 
              values: updatedValues, 
              isMissing: !updatedValues.some(value => value.value)
            })
            return updatedValues
        })
    }

    const checkBoxGroupClassName = `${styles._container} ${className || ''}`.trim()

    return (
        <div
            className={checkBoxGroupClassName}
            style={{
                width: groupWidth ? groupWidth : itemCheckBoxMinWidth * (groupItemPerRow + 1),
                height: groupHeight,
                padding: groupPadding,
                border: groupBorder,
                borderRadius: groupBorderRadius,
                boxShadow: groupBoxShadow,
                rowGap: groupItemRowSpacing,
                columnGap: groupItemColSpacing,
                gridTemplateColumns: `repeat(auto-fill, minmax(${itemCheckBoxMinWidth}px, 1fr))`
            }}
        >
            {groupLabel && (
                <label
                    className={styles._label}
                    style={{
                        fontSize: groupLabelFontSize,
                        fontWeight: groupLabelFontWeight,
                        color: groupLabelFontColor,
                        background: groupLabelBackground,
                    }}
                >
                    {groupLabelIcon && (
                        <span
                            style={{
                                fontSize: groupLabelIconSize,
                                color: groupLabelIconColor,
                            }}
                        >
                            {groupLabelIcon}
                        </span>
                    )}
                    {groupLabel}
                </label>
            )}
            {groupOptions && groupOptions.length > 0 && groupOptions.map((option, optionIndex) => (
                <Checkbox
                    key={optionIndex}
                    checkSize={itemCheckSize}
                    checkBoxSize={itemCheckBoxSize}
                    checkBoxBorder={itemCheckBoxBorder}
                    checkBoxBorderRadius={itemCheckBoxBorderRadius}
                    checkBoxColor={itemCheckBoxColor}
                    checkBoxBackground={itemCheckBoxBackground}
                    name={option.name}
                    labelText={option.label}
                    value={option.value}
                    labelTextSize={itemlabelTextSize}
                    labelTextColor={itemlabelTextColor}
                    labelTextWeight={itemlabelTextWeight}
                    defaultChecked={option.defaultChecked}
                    onChange={newValue => handleChange(newValue.key === option.key ? newValue : { key: option.key, ...newValue })}
                />
            ))}
        </div>
    )
}

export default memo(CheckBoxGroup)