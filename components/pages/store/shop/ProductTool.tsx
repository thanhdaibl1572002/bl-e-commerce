import { FC, memo } from 'react'
import styles from '@/components/pages/store/shop/producttool.module.sass'
import { useAppSelector } from '@/redux'
import Select from '@/components/forms/Select'
import Button from '@/components/forms/Button'
import { whiteColor, themeColors, getColorLevel } from '@/variables/variables'
import { PiFaders } from 'react-icons/pi'

interface IProductTool {

}

const ProductTool: FC<IProductTool> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)

    return (
        <div className={styles[`_container__${theme}`]}>
            <div className={styles._tool__left}>
                <div className={styles._sort}>
                    <Select
                        width={190}
                        height={40}
                        selectedBackground={whiteColor}
                        selectedTextSize={13.5}
                        selectedArrowColor={themeColors[theme]}
                        selectedBorder={'none'}
                        selectedBoxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                        listBackground={whiteColor}
                        listBorder={'none'}
                        listBoxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                        itemTextSize={13.5}
                        itemHoverBackground={getColorLevel(themeColors[theme], 8)}
                        itemHoverTextColor={themeColors[theme]}
                        itemHoverIconColor={themeColors[theme]}
                        options={[
                            { label: 'Mới nhất', value: 'Mới nhất' },
                            { label: 'Giá thấp đến cao', value: 'Giá thấp đến cao' },
                            { label: 'Giá cao đến thấp', value: 'Giá cao đến thấp' },
                            { label: 'Đánh giá thấp đến cao', value: 'Đánh giá thấp đến cao' },
                            { label: 'Đánh giá cao đến thấp', value: 'Đánh giá cao đến thấp' },
                        ]}
                        onChange={value => console.log(value)}
                    />
                </div>
            </div>
            <div className={styles._tool__right}>
                
            </div>
        </div>
    )
}

export default memo(ProductTool)