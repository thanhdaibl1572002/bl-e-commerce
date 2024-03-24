import { FC, useState, useEffect, memo, ReactNode, ReactElement } from 'react'
import styles from '@/components/forms/radio-group/radio-group.module.sass'
import Radio, { IRadioValue } from '@/components/forms/radio'


export interface IRadioGroupValue {
    key?: string | number
    name: string
    value: string | number
    label?: string
    defaultChecked?: boolean
}

interface IRadioGroupProps {
    groupOptions: IRadioGroupValue[]
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
    itemRadioSize?: number
    itemRadioBorder?: string
    itemRadioBorderRadius?: number | string
    itemRadioColor?: string
    itemRadioBackground?: string
    itemRadioMinWidth?: number
    itemlabelTextSize?: number
    itemlabelTextColor?: string
    itemlabelTextWeight?: number
    className?: string
    onChange?: (value: { value: IRadioGroupValue, isMissing: boolean }) => void
    getInitSelectedValue?: (value: { value: IRadioGroupValue | null, isMissing: boolean }) => void
}

const RadioGroup: FC<IRadioGroupProps> = ({
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
    itemRadioMinWidth = 200,
    itemCheckSize,
    itemRadioSize = 14,
    itemRadioBorder,
    itemRadioBorderRadius,
    itemRadioColor,
    itemRadioBackground,
    itemlabelTextSize = 14,
    itemlabelTextColor,
    itemlabelTextWeight,
    className,
    onChange,
    getInitSelectedValue,
}) => {
    
    const initSelectedValue: IRadioGroupValue | null = groupOptions.find(option => option.defaultChecked) || null

    useEffect(() => {
        getInitSelectedValue &&
            getInitSelectedValue({
                value: initSelectedValue,
                isMissing: !initSelectedValue,
            })
    }, [])

    const [selectedValue, setSelectedValue] = useState<IRadioGroupValue | null>(initSelectedValue)

    const handleChange = (newValue: IRadioValue): void => {
        setSelectedValue(newValue)
        onChange && onChange({
            value: newValue,
            isMissing: !newValue,
        })
    }

    const radioGroupClassname = `${styles._container} ${className || ''}`.trim()

    return (
        <div 
            className={radioGroupClassname}
            style={{
                width: groupWidth ? groupWidth : itemRadioMinWidth * (groupItemPerRow + 1),
                height: groupHeight,
                padding: groupPadding,
                border: groupBorder,
                borderRadius: groupBorderRadius,
                boxShadow: groupBoxShadow,
                rowGap: groupItemRowSpacing,
                columnGap: groupItemColSpacing,
                gridTemplateColumns: `repeat(auto-fill, minmax(${itemRadioMinWidth}px, 1fr))`
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
            {groupOptions.map((option, optionIndex) => (
                <Radio
                    key={optionIndex}
                    checkSize={itemCheckSize}
                    radioSize={itemRadioSize}
                    radioBorder={itemRadioBorder}
                    radioBorderRadius={itemRadioBorderRadius}
                    radioColor={itemRadioColor}
                    radioBackground={itemRadioBackground}
                    name={option.name}
                    value={option.value}
                    labelText={option.label}
                    labelTextSize={itemlabelTextSize}
                    labelTextColor={itemlabelTextColor}
                    labelTextWeight={itemlabelTextWeight}
                    checked={option.key === selectedValue?.key}
                    defaultChecked={selectedValue?.defaultChecked}
                    onChange={(newValue) => handleChange(newValue.key === option.key ? newValue : { key: option.key, ...newValue }) }
                />
            ))}
        </div>
    )
}

export default memo(RadioGroup)