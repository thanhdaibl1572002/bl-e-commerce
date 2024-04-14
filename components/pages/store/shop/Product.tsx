import { FC } from 'react'
import styles from '@/components/pages/store/shop/product.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import Link from 'next/link'
import ThemeButton from '@/components/themes/ThemeButton'
import { PiHandbag } from 'react-icons/pi'

interface IProduct {
    imageSrc: string
    discountPercentage?: number
    brand: string
    name: string
    rating: number
    ratingCount: number
    currentPrice: number
    originalPrice: number
    features: string[]
}

const Product: FC<IProduct> = ({
    imageSrc,
    discountPercentage,
    brand,
    name,
    rating,
    ratingCount,
    currentPrice,
    originalPrice,
    features,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { currency } = useAppSelector(state => state.currency)
    const { t } = useTranslation()

    const formatCurrentPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(currentPrice)

    const formatOriginalPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(originalPrice)

    return (
        <Link href={'#'} className={styles[`_container__${theme}`]}>
            <div className={styles._top}>
                <Image src={imageSrc} alt='' width={180} height={180} />
                {discountPercentage && <span>-{discountPercentage}%</span>}
            </div>
            <div className={styles._bottom}>
                <label>{brand}</label>
                <h3>{name}</h3>
                <ul>
                    {Array.from({ length: rating }, (_, index) => (
                        <li key={index}><IoStarSharp /></li>
                    ))}
                    <li>({ratingCount})</li>
                </ul>
                <strong>{formatCurrentPrice}<span>{formatOriginalPrice}</span></strong>
                <ol>
                    {features && features.length > 0 && features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ol>
                <ThemeButton
                    theme={theme}
                    width={'100%'}
                    height={40}
                    textSize={14.5}
                    text={'Thêm Giỏ Hàng'}
                    icon={<PiHandbag />}
                    iconSize={22}
                    animateDuration={800}
                />
            </div>
        </Link>
    )
}

export default Product