import { FC, memo } from 'react'
import styles from '@/app/shop/shopproducttool.module.sass'
import Select from '@/components/forms/Select'
import Button from '@/components/forms/Button'
import { whiteColor, themeColors, getColorLevel } from '@/variables/variables'
import { PiArrowClockwise, PiListDashes } from 'react-icons/pi'
import { IoGridOutline } from 'react-icons/io5'
import { useAppSelector } from '@/redux'
import { useProductContext } from '@/app/shop/ShopProductContext'

interface IShopProductTool {}

const ShopProductTool: FC<IShopProductTool> = ({}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { productDispatch } = useProductContext()

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
                        onChange={value => productDispatch({ type: 'TOOL/SORT', payload: value })}
                    />
                </div>
            </div>
            <div className={styles._tool__right}>
                <Button
                    width={40}
                    height={40}
                    icon={<IoGridOutline />}
                    iconSize={21}
                    iconColor={themeColors[theme]}
                    background={whiteColor}
                    animateDuration={300}
                    boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                    bubbleColor={themeColors[theme]}
                    onClick={() => productDispatch({ type: 'TOOL/VIEW', payload: 'grid' })}
                />
                <Button
                    width={40}
                    height={40}
                    icon={<PiListDashes />}
                    iconSize={25}
                    iconColor={themeColors[theme]}
                    background={whiteColor}
                    animateDuration={300}
                    boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                    bubbleColor={themeColors[theme]}
                    onClick={() => productDispatch({ type: 'TOOL/VIEW', payload: 'list' })}
                />
                <Button
                    width={40}
                    height={40}
                    icon={<PiArrowClockwise />}
                    iconSize={23}
                    iconColor={themeColors[theme]}
                    background={whiteColor}
                    animateDuration={300}
                    boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                    bubbleColor={themeColors[theme]}
                    onClick={() => productDispatch({ type: 'TOOL/RESET' })}
                />
            </div>
        </div>
    )
}

export default memo(ShopProductTool)