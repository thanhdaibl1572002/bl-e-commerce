import { FC, memo, useState } from 'react'
import styles from '@/components/pages/store/shop/producttag.module.sass'
import { useAppSelector } from '@/redux'
import { IoAddOutline } from 'react-icons/io5'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'

interface IProductTag {
    options: Array<{
        label: string
        value: string
    }>
    onChange: (selectedValue: string | null) => void
}

const ProductTag: FC<IProductTag> = ({
    options,
    onChange,
}) => {
    const { theme } = useAppSelector(state => state.theme)

    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const handleSelect = (value: string): void => {
        if (selectedValue === value) {
            setSelectedValue(null)
            onChange(null)
        } else {
            setSelectedValue(value)
            onChange(value)
        }
    }

    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                {options && options.length > 0 && options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option.value)}
                        className={selectedValue === option.value ? styles._active : ''}
                    >
                        {option.label}
                    </li>
                ))}
                <li>
                    <Button
                        width={'fit-content'}
                        height={35}
                        borderRadius={'30px'}
                        text={'Thêm thẻ mới'}
                        textSize={14}
                        textColor={themeColors[theme]}
                        icon={<IoAddOutline />}
                        iconSize={20}
                        iconColor={themeColors[theme]}
                        background={whiteColor}
                        animateDuration={400}
                        boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                        bubbleColor={themeColors[theme]}
                    />
                </li>
            </ul>
        </div>
    )
}

export default memo(ProductTag)
