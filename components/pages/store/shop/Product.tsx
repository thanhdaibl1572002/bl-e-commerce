import { FC, useMemo } from 'react'
import styles from '@/components/pages/store/shop/product.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import Link from 'next/link'
import ThemeButton from '@/components/themes/ThemeButton'
import { PiArrowsCounterClockwise, PiArrowsCounterClockwiseLight, PiEye, PiEyeLight, PiHandbag, PiHeartStraight, PiHeartStraightLight } from 'react-icons/pi'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'
import useMediaScreen from '@/hooks/useMediaScreen'

interface IProduct {

}

const Product: FC<IProduct> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    const screenWidth = useMediaScreen()
    const imageWidth = screenWidth >= 650 ? 200 : 130
    const imageHeight = screenWidth >= 650 ? 200 : 130
    return (
        <Link href={'#'} className={styles[`_container__${theme}`]}>
            <div className={styles._top}>
                <Image src={'/images/product-3.png'} alt='' width={imageWidth} height={imageHeight} />
                <span>-20%</span>
                <ul>
                    <li><PiHeartStraight /></li>
                    <li><PiArrowsCounterClockwise /></li>
                    <li><PiEye /></li>
                </ul>
            </div>
            <div className={styles._bottom}>
                <label>Apple</label>
                <h3>2022 Apple iMac with Retina 5K Display</h3>
                <ul>
                    <li><IoStarSharp /></li>
                    <li><IoStarSharp /></li>
                    <li><IoStarSharp /></li>
                    <li><IoStarSharp /></li>
                    <li><IoStarSharp /></li>
                    <li>(100)</li>
                </ul>
                <strong>19.900.000đ <span>21.900.000đ</span></strong>
                <ol>
                    <li>27-inch (diagonal) Retina 5K display</li>
                    <li>{'AMD Radeon Pro 5300 graphics'.slice(0, 20)}</li>
                </ol>
                <ThemeButton
                    theme={theme}
                    width={'100%'}
                    height={40}
                    textSize={screenWidth >= 650 ? 15 : 13.5}
                    text='Thêm Giỏ Hàng'
                    icon={useMemo(() => <PiHandbag />, [])}
                    iconSize={22}
                    animateDuration={800}
                />
            </div>
        </Link>
    )
}

export default Product