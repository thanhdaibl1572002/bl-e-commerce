'use client'
import { FC, ReactElement, ReactNode, memo, useEffect, useState } from 'react'
import styles from '@/components/forms/select-group/select-group.module.sass'
import Select, { ISelectOption } from '@/components/forms/select'

export interface ISelectGroupOptions {
  required?: boolean
  requiredMessage?: string
  options: ISelectOption[]
}

export interface ISelectGroupOption extends ISelectOption {
  required?: boolean
}

interface ISelectGroupProps {
  groupOptions: ISelectGroupOptions[]
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
  itemSelectedMinWidth?: number
  itemSelectedFontSize?: number
  itemSelectedFontWeight?: number
  itemSelectedFontColor?: string
  itemSelectedIconSize?: string | number
  itemSelectedIconColor?: string
  itemSelectedArrowSize?: string | number
  itemSelectedArrowColor?: string
  itemSelectedBorder?: string
  itemSelectedBorderRadius?: string | number
  itemSelectedBoxShadow?: string
  itemOptionsWidth?: string | number
  itemOptionsHeight?: string | number
  itemOptionsMaxHeight?: string | number
  itemOptionsBorder?: string
  itemOptionsBorderRadius?: string | number
  itemOptionsBoxShadow?: string
  itemOptionHeight?: string | number
  itemOptionFontSize?: number
  itemOptionFontWeight?: number
  itemOptionFontColor?: string
  itemOptionIconSize?: string | number
  itemOptionIconColor?: string
  className?: string
  onChange?: (values: { values: ISelectGroupOption[], isMissing: boolean }) => void
  getInitSelectedValues?: (values: { values: ISelectGroupOption[], isMissing: boolean }) => void
}

const SelectGroup: FC<ISelectGroupProps> = ({ 
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
  groupLabelBackground,
  groupLabelIcon,
  groupLabelIconSize,
  groupLabelIconColor,
  groupItemPerRow = 3,
  groupItemRowSpacing = 10,
  groupItemColSpacing = 10,
  itemSelectedMinWidth = 200,
  itemSelectedFontSize,
  itemSelectedFontWeight,
  itemSelectedFontColor,
  itemSelectedIconSize,
  itemSelectedIconColor,
  itemSelectedArrowSize,
  itemSelectedArrowColor,
  itemSelectedBorder,
  itemSelectedBorderRadius,
  itemSelectedBoxShadow,
  itemOptionsWidth,
  itemOptionsHeight,
  itemOptionsMaxHeight,
  itemOptionsBorder,
  itemOptionsBorderRadius,
  itemOptionsBoxShadow,
  itemOptionHeight,
  itemOptionFontSize,
  itemOptionFontWeight,
  itemOptionFontColor,
  itemOptionIconSize,
  itemOptionIconColor,
  className,
  onChange,
  getInitSelectedValues,
}) => {

  const initSelectedOptions: ISelectGroupOption[] = groupOptions.map(options => options.options.slice(0, 1)).flatMap(arr => arr)
  initSelectedOptions.map((selectedOption, selectedOptionIndex) => selectedOption.required = groupOptions[selectedOptionIndex].required ? true : false)

  useEffect(() => {
    getInitSelectedValues && getInitSelectedValues({
      values: initSelectedOptions,
      isMissing: initSelectedOptions.some(option => option.required && !option.value)
    })
  }, [])

  const [selectedOptions, setSelectedOptions] = useState<ISelectGroupOption[]>(initSelectedOptions)

  const handleChange = (newOption: ISelectGroupOption): void => {
    const updateIndex = selectedOptions.findIndex(option => option.key === newOption.key)
    if (updateIndex !== -1) {
      setSelectedOptions(prevSelectedOptions => {
        const updatedOptions = [...prevSelectedOptions]
        updatedOptions[updateIndex] = newOption
        onChange && onChange({ 
          values: updatedOptions, 
          isMissing: updatedOptions.some(option => option.required && !option.value)
        })
        return updatedOptions
      })
    } 
  }

  const selectGroupClassName = `${styles._container} ${className || ''}`.trim()

  return (
    <div 
      className={selectGroupClassName}
      style={{
        width: groupWidth ? groupWidth : itemSelectedMinWidth * (groupItemPerRow + 1),
        height: groupHeight,
        border: groupBorder,
        borderRadius: groupBorderRadius,
        boxShadow: groupBoxShadow,
        padding: groupPadding,
        rowGap: groupItemRowSpacing,
        columnGap: groupItemColSpacing,
        gridTemplateColumns: `repeat(auto-fill, minmax(${itemSelectedMinWidth}px, 1fr))`
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
      {groupOptions && groupOptions.length > 0 && groupOptions.map((options, optionsIndex) => (
        <Select
          key={optionsIndex}
          required={options.required}
          options={options.options}
          selectedFontSize={itemSelectedFontSize}
          selectedFontWeight={itemSelectedFontWeight}
          selectedFontColor={itemSelectedFontColor}
          selectedIconSize={itemSelectedIconSize}
          selectedIconColor={itemSelectedIconColor}
          selectedArrowSize={itemSelectedArrowSize}
          selectedArrowColor={itemSelectedArrowColor}
          selectedBorder={itemSelectedBorder}
          selectedBorderRadius={itemSelectedBorderRadius}
          selectedBoxShadow={itemSelectedBoxShadow}
          optionsWidth={itemOptionsWidth}
          optionsHeight={itemOptionsHeight}
          optionsMaxHeight={itemOptionsMaxHeight}
          optionsBorder={itemOptionsBorder}
          optionsBorderRadius={itemOptionsBorderRadius}
          optionsBoxShadow={itemOptionsBoxShadow}
          optionHeight={itemOptionHeight}
          optionFontSize={itemOptionFontSize}
          optionFontWeight={itemOptionFontWeight}
          optionFontColor={itemOptionFontColor}
          optionIconSize={itemOptionIconSize}
          optionIconColor={itemOptionIconColor}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

export default memo(SelectGroup)