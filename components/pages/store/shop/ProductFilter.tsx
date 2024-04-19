/* eslint-disable @next/next/no-img-element */
import { FC, memo, useState } from 'react'
import styles from '@/components/pages/store/shop/productfilter.module.sass'
import { useAppSelector } from '@/redux'
import { getColorLevel, themeColors, themeGradientColors, whiteColor } from '@/variables/variables'
import DoubleSlider from '@/components/forms/DoubleSlider'
import ThemeButton from '@/components/themes/ThemeButton'
import { PiArrowClockwise, PiFunnel } from 'react-icons/pi'
import Button from '@/components/forms/Button'

export interface IFilterImageProps {
    title: string
    options: Array<{
        src: string
        alt?: string
        label: string
        value: string
    }>,
    onChange: (selectedValues: string[]) => void
}

const FilterImage: FC<IFilterImageProps> = memo(({
    title,
    options,
    onChange,
}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }
    return (
        <div className={styles._filter__image}>
            <h4>{title}</h4>
            <ul>
                {options && options.length > 0 && options.map((option, index) => (
                    <li key={index} onClick={() => handleSelect(option.value)}>
                        <img loading='lazy' src={option.src} alt={option.alt} />
                        <span className={selectedValues.includes(option.value) ? styles._active : ''}>
                            {option.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
})
FilterImage.displayName = 'FilterImage'

// =================================================================================================================

export interface IFilterCheckProps {
    title: string
    options: Array<{
        label: string
        value: string
    }>,
    onChange: (selectedValues: string[]) => void
}
const FilterCheck: FC<IFilterCheckProps> = memo(({
    title,
    options,
    onChange,
}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }
    return (
        <div className={styles._filter__check}>
            <h4>{title}</h4>
            <ul>
                {options && options.length > 0 && options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option.value)}
                        className={selectedValues.includes(option.value) ? styles._active : ''}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
})
FilterCheck.displayName = 'FilterCheck'

// =================================================================================================================

export interface IFilterRangeProps {
    title: string
    max: number,
    min: number,
    values: [number, number]
    onChange: (values: [number, number]) => void
}
const FilterRange: FC<IFilterRangeProps> = memo(({
    title,
    max,
    min,
    values,
    onChange,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    return (
        <div className={styles._filter__check}>
            <h4>{title}</h4>
            <DoubleSlider
                min={min}
                max={max}
                values={values}
                onChange={onChange}
                labelTextSize={14}
                thumbSize={20}
                thumbBorder={`2px solid ${themeColors[theme]}`}
                trackHeight={2}
                trackBackground={getColorLevel(themeColors[theme], 10)}
                progressBackground={themeGradientColors[theme]}
            />
        </div>
    )
})
FilterRange.displayName = 'FilterRange'

// =================================================================================================================

export interface IFilterColorProps {
    title: string
    options: Array<{
        code: string
        value: string
    }>,
    onChange: (selectedValues: string[]) => void
}
const FilterColor: FC<IFilterColorProps> = memo(({
    title,
    options,
    onChange,
}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }
    return (
        <div className={styles._filter__color}>
            <h4>{title}</h4>
            <ul>
                {options && options.length > 0 && options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option.value)}
                        className={selectedValues.includes(option.value) ? styles._active : ''}
                    >
                        <span style={{ background: option.code }}></span>
                    </li>
                ))}
            </ul>
        </div>
    )
})
FilterColor.displayName = 'FilterColor'

export interface IProductFilterProps {
    applyButton?: string
    resetButton?: string
    filters: Array<{
        type: 'image' | 'check' | 'range' | 'color'
        title: string
        name: string
        imageOptions?: IFilterImageProps['options']
        checkOptions?: IFilterCheckProps['options']
        colorOptions?: IFilterColorProps['options']
        rangeOptions?: {
            max: IFilterRangeProps['max']
            min: IFilterRangeProps['min']
            values: IFilterRangeProps['values']
        }
    }>
}

const ProductFilter: FC<IProductFilterProps> = ({
    applyButton,
    resetButton,
    filters,
}) => {
    const { theme } = useAppSelector(state => state.theme)

    return (
        <div className={styles[`_container__${theme}`]}>
            {filters && filters.length > 0 && filters.map((filter, index) => {
                switch (filter.type) {
                    case 'image':
                        return (
                            <FilterImage
                                key={index}
                                title={filter.title}
                                options={filter.imageOptions!}
                                onChange={values => console.log(values)}
                            />
                        )
                    case 'check':
                        return (
                            <FilterCheck
                                key={index}
                                title={filter.title}
                                options={filter.checkOptions!}
                                onChange={values => console.log(values)}
                            />
                        )
                    case 'range':
                        return (
                            <FilterRange
                                key={index}
                                title={filter.title}
                                min={filter.rangeOptions!.min}
                                max={filter.rangeOptions!.max}
                                values={[filter.rangeOptions!.values[0], filter.rangeOptions!.values[1]]}
                                onChange={values => console.log(values)}
                            />
                        )
                    case 'color':
                        return (
                            <FilterColor
                                key={index}
                                title={filter.title}
                                options={filter.colorOptions!}
                                onChange={values => console.log(values)}
                            />
                        )
                }
            })}
            {(applyButton || resetButton) && (
                <div className={styles._buttons}>
                    {resetButton && (
                        <Button
                            width={105}
                            height={40}
                            textSize={14.5}
                            text={resetButton}
                            textColor={themeColors[theme]}
                            icon={<PiArrowClockwise />}
                            iconSize={21}
                            iconColor={themeColors[theme]}
                            background={whiteColor}
                            animateDuration={500}
                            boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                            bubbleColor={themeColors[theme]}
                        />
                    )}
                    {applyButton && (
                        <ThemeButton
                            theme={theme}
                            width={105}
                            height={40}
                            textSize={14.5}
                            text={applyButton}
                            icon={<PiFunnel />}
                            iconSize={21}
                            animateDuration={500}
                            boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 30)}`}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default ProductFilter