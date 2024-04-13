import { FC, memo } from 'react'
import styles from '@/components/layouts/store/header/headercart.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import Image from 'next/image'
import ThemeButton from '@/components/themes/ThemeButton'
import Link from 'next/link'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'

const HeaderCart: FC = ({

}) => {

    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                <li>
                    <Link href={'#'}>
                        <Image src={'/images/product-1.png'} alt='' width={90} height={90} />
                        <div className={styles._info}>
                            <h4>2022 Apple iMac with Retina 5K Display</h4>
                            <strong>1 x 19.900.000đ</strong>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'#'}>
                        <Image src={'/images/product-1.png'} alt='' width={90} height={90} />
                        <div className={styles._info}>
                            <h4>2022 Apple iMac with Retina 5K Display</h4>
                            <strong>1 x 19.900.000đ</strong>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className={styles._summary}>
                <div className={styles._total}>
                    Tổng cộng: <strong>50.000.000đ</strong>
                </div>
                <div className={styles._buttons}>
                    <Button 
                        width={100}
                        height={35}
                        textSize={14}
                        textColor={themeColors[theme]}
                        background={whiteColor}
                        border={`1px solid ${getColorLevel(themeColors[theme], 10)}`}
                        bubbleColor={themeColors[theme]}
                        text='Giỏ Hàng'
                    />
                    <ThemeButton
                        theme={theme}
                        width={100}
                        height={35}
                        textSize={14}
                        text='Thanh Toán'
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(HeaderCart)