/* eslint-disable @next/next/no-img-element */
import { FC, memo, useEffect, useRef, useState } from 'react'
import styles from '@/components/pages/store/shop/productfilter.module.sass'
import { Theme } from '@/redux/slices/themeSlice'
import { getColorLevel, themeColors, themeGradientColors, whiteColor } from '@/variables/variables'
import { PiArrowClockwise, PiFaders, PiFunnel, PiX } from 'react-icons/pi'
import DoubleSlider from '@/components/forms/DoubleSlider'
import ThemeButton from '@/components/themes/ThemeButton'
import Button from '@/components/forms/Button'
import { useAppSelector } from '@/redux'

export interface IFilterImageProps {
    title: string
    options: Array<{
        src: string
        alt?: string
        label: string
        value: string
    }>
    onChange: (selectedValues: string[]) => void
    reset?: string
}
const FilterImage: FC<IFilterImageProps> = memo(({
    title,
    options,
    onChange,
    reset,
}) => {

    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }

    useEffect(() => setSelectedValues([]), [reset])

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


export interface IFilterCheckProps {
    title: string
    options: Array<{
        label: string
        value: string
    }>,
    onChange: (selectedValues: string[]) => void
    reset?: string
}
const FilterCheck: FC<IFilterCheckProps> = memo(({
    title,
    options,
    onChange,
    reset,
}) => {

    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }

    useEffect(() => setSelectedValues([]), [reset])

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


export interface IFilterRangeProps {
    title: string
    max: number,
    min: number,
    values: [number, number]
    onChange: (values: [number, number, string | null, string | null]) => void
    reset?: string,
    currencyLocales?: string
    currencyCode?: string,
    theme: Theme
}
const FilterRange: FC<IFilterRangeProps> = memo(({
    title,
    max,
    min,
    values,
    onChange,
    reset,
    currencyLocales,
    currencyCode,
    theme,
}) => {
    return (
        <div className={styles._filter__check}>
            <h4>{title}</h4>
            <DoubleSlider
                min={min}
                max={max}
                values={values}
                onChange={values => onChange([...values, currencyLocales || null, currencyCode || null])}
                labelTextSize={14}
                thumbSize={20}
                thumbBorder={`2px solid ${themeColors[theme]}`}
                trackHeight={2}
                trackBackground={getColorLevel(themeColors[theme], 10)}
                progressBackground={themeGradientColors[theme]}
                currencyLocales={currencyLocales}
                currencyCode={currencyCode}
                reset={reset}
            />
        </div>
    )
})
FilterRange.displayName = 'FilterRange'


export interface IFilterColorProps {
    title: string
    options: Array<{
        code: string
        value: string
    }>,
    onChange: (selectedValues: string[]) => void
    reset?: string
}
const FilterColor: FC<IFilterColorProps> = memo(({
    title,
    options,
    onChange,
    reset,
}) => {

    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const handleSelect = (value: string): void => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter(val => val !== value)
            : [...selectedValues, value]
        setSelectedValues(updatedValues)
        onChange(updatedValues)
    }

    useEffect(() => setSelectedValues([]), [reset])

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
    applyButton: string
    resetButton?: string
    currencyLocales?: string
    currencyCode?: string
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
    onFilter: (values: { [key: string]: string[] | [number, number, string | null, string | null] }) => void
}

const ProductFilter: FC<IProductFilterProps> = ({
    applyButton,
    resetButton,
    currencyLocales,
    currencyCode,
    filters,
    onFilter,
}) => {
    const { theme } = useAppSelector(state => state.theme)

    const filterObjectRef = useRef<{ [key: string]: string[] | [number, number, string | null, string | null] }>({})
    const [reset, setReset] = useState<string>(new Date().getTime().toString())

    const filterRef = useRef<HTMLDivElement>(null)

    const handleChange = (name: string, values: string[] | [number, number, string | null, string | null]): void => {
        if (values.length > 0) {
            const newFilterObject = { ...filterObjectRef.current, [name]: values }
            filterObjectRef.current = newFilterObject
        } else {
            const { [name]: values, ...newFilterObject } = filterObjectRef.current
            filterObjectRef.current = newFilterObject
        }
    }

    const handleReset = (): void => {
        if (Object.keys(filterObjectRef.current).length > 0) {
            setReset(new Date().getTime().toString())
            filterObjectRef.current = {}
        }
    }

    const handleApply = (): void => {
        if (Object.keys(filterObjectRef.current).length > 0) {
            onFilter(filterObjectRef.current)
        }
    }

    const handleClose = (): void => {
        if (filterRef.current) {
            filterRef.current.style.left = '-100%'
        }
    }

    return (
        <div className={styles[`_container__${theme}`]} ref={filterRef}>
            <div className={styles._top}>
                <Button
                    width={35}
                    height={35}
                    icon={<PiX />}
                    iconSize={22}
                    iconColor={themeColors[theme]}
                    background={whiteColor}
                    animateDuration={300}
                    boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                    bubbleColor={themeColors[theme]}
                    onClick={handleClose}
                />
            </div>
            <div className={styles._center}>
                {filters && filters.length > 0 && filters.map((filter, index) => {
                    switch (filter.type) {
                        case 'image':
                            return (
                                <FilterImage
                                    key={index}
                                    title={filter.title}
                                    options={filter.imageOptions!}
                                    onChange={values => handleChange(filter.name, values)}
                                    reset={reset}
                                />
                            )
                        case 'check':
                            return (
                                <FilterCheck
                                    key={index}
                                    title={filter.title}
                                    options={filter.checkOptions!}
                                    onChange={values => handleChange(filter.name, values)}
                                    reset={reset}
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
                                    onChange={values => handleChange(filter.name, values)}
                                    currencyLocales={currencyLocales}
                                    currencyCode={currencyCode}
                                    reset={reset}
                                    theme={theme}
                                />
                            )
                        case 'color':
                            return (
                                <FilterColor
                                    key={index}
                                    title={filter.title}
                                    options={filter.colorOptions!}
                                    onChange={values => handleChange(filter.name, values)}
                                    reset={reset}
                                />
                            )
                    }
                })}
            </div>
            <div className={styles._bottom}>
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
                        onClick={handleReset}
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
                        onClick={handleApply}
                    />
                )}
            </div>
        </div>
    )
}

export default memo(ProductFilter)