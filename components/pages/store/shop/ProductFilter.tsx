/* eslint-disable @next/next/no-img-element */
import { FC, memo, useMemo, useState } from 'react'
import styles from '@/components/pages/store/shop/productfilter.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import { themeColors } from '@/variables/variables'

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
                        <img src={option.src} alt={option.alt} />
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
    onChange: (max: number, min: number) => void
}
const FilterRange: FC<IFilterRangeProps> = memo(({
    title,
    max,
    min,
    onChange,
}) => {
    return (
        <div className={styles._filter__check}>
            <h4>{title}</h4>
        </div>
    )
})
FilterRange.displayName = 'FilterRange'

interface IProductFilter {

}

const ProductFilter: FC<IProductFilter> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <FilterImage 
                title={'Nhu cầu'}
                options={useMemo(() => [
                    { src: '/images/filter-1.jpeg', label: 'Chơi game', value: 'game' },
                    { src: '/images/filter-2.jpeg', label: 'Chụp ảnh', value: 'camera' },
                    { src: '/images/filter-3.jpeg', label: 'Pin khủng', value: 'battery' },
                    { src: '/images/filter-4.jpeg', label: 'Xem phim', value: 'screen' },
                ], [])}   
                onChange={values => console.log(values)}       
            />
            <FilterCheck
                title={'Bộ nhớ RAM'}
                options={useMemo(() => [
                    { label: '2 GB', value: '2' },
                    { label: '4 GB', value: '4' },
                    { label: '6 GB', value: '6' },
                    { label: '8 GB', value: '8' },
                    { label: '12 GB', value: '12' },
                    { label: '16 GB', value: '16' },
                ], [])}   
                onChange={values => console.log(values)}     
            />
            <FilterCheck
                title={'Bộ nhớ ROM'}
                options={useMemo(() => [
                    { label: '16 GB', value: '16' },
                    { label: '32 GB', value: '32' },
                    { label: '64 GB', value: '64' },
                    { label: '128 GB', value: '128' },
                    { label: '256 GB', value: '256' },
                    { label: '512 GB', value: '512' },
                ], [])}   
                onChange={values => console.log(values)}     
            />
            <FilterCheck
                title={'Hãng'}
                options={useMemo(() => [
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Samsung', value: 'Samsung' },
                    { label: 'Xiaomi', value: 'Xiaomi' },
                    { label: 'Oppo', value: 'Oppo' },
                    { label: 'Vivo', value: 'Vivo' },
                ], [])}   
                onChange={values => console.log(values)}     
            />
            {/* <FilterRange 
                title={'Giá tiền'}
                min={0}
                max={100}
                onChange={(max, min) => console.log(max, min)}
            /> */}
            <FilterCheck
                title={'Tiêu chí khác'}
                options={useMemo(() => [
                    { label: 'Giảm giá', value: 'Giảm giá' },
                    { label: 'Nổi bật', value: 'Nổi bật' },
                    { label: 'Hỗ trợ 5G', value: 'Hỗ trợ 5G' },
                    { label: 'Kháng nước', value: 'Kháng nước' },
                    { label: 'Sạc nhanh', value: 'Sạc nhanh' },
                    { label: 'Live stream', value: 'Live stream' },
                ], [])}   
                onChange={values => console.log(values)}     
            />
        </div>
    )
}

export default ProductFilter