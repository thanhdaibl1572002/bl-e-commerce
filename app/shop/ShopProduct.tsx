import { FC } from 'react'
import styles from '@/app/shop/shopproduct.module.sass'
import { useAppSelector } from '@/redux'
import Image from 'next/image'
import Link from 'next/link'
import ThemeButton from '@/components/themes/ThemeButton'
import Button from '@/components/forms/Button'
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from 'react-icons/io5'
import { PiHandbag, PiHeartStraightLight } from 'react-icons/pi'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'
import { useProductContext } from '@/app/shop/ShopProductContext'

export interface IShopProductProps {
    id: string | number
    imageSrc: string
    discountPercentage?: number
    brand: string
    name: string
    rating: number
    ratingCount: number
    currentPrice: number
    features: Array<string>
    cartButton?: string
}

const ShopProduct: FC<IShopProductProps> = ({
    imageSrc,
    discountPercentage = 0,
    brand,
    name,
    rating,
    ratingCount,
    currentPrice,
    features,
    cartButton,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { currency } = useAppSelector(state => state.currency)
    const { productState } = useProductContext()

    const formatCurrentPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(currentPrice)

    const formatOriginalPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(discountPercentage !== 0 ? currentPrice / (1 - discountPercentage / 100) : currentPrice)

    return (
        <Link href={'#'} className={styles[`_container__${productState.productView}__${theme}`]}>
            <div className={styles._top}>
                <Image src={imageSrc} alt='' width={180} height={180} />
                {discountPercentage !== 0 && <span>-{discountPercentage}%</span>}
            </div>
            <div className={styles._bottom}>
                <label>{brand}</label>
                <h3>{name}</h3>
                <ul>
                    {Array.from({ length: 5 }, (_, index) => (
                        <li key={index}>
                            {index < Math.floor(rating) ? (
                                <IoStarSharp />
                            ) : index < rating ? (
                                <IoStarHalfSharp />
                            ) : (
                                <IoStarOutline />
                            )}
                        </li>
                    ))}
                    <li>({ratingCount})</li>
                </ul>

                <strong>{formatCurrentPrice}{discountPercentage !== 0 && <span>{formatOriginalPrice}</span>}</strong>
                <ol>
                    {features && features.length > 0 && features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ol>
                <div className={styles._buttons}>
                    <ThemeButton
                        theme={theme}
                        width={'fit-content'}
                        height={40}
                        textSize={14.5}
                        text={cartButton}
                        icon={<PiHandbag />}
                        iconSize={22}
                        animateDuration={500}
                        boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 30)}`}
                        onClick={e => e.preventDefault()}
                    />
                    <Button
                        width={40}
                        height={40}
                        icon={<PiHeartStraightLight />}
                        iconSize={24}
                        iconColor={themeColors[theme]}
                        background={whiteColor}
                        animateDuration={300}
                        boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                        bubbleColor={themeColors[theme]}
                        onClick={e => e.preventDefault()}
                    />
                </div>
            </div>
        </Link>
    )
}

export default ShopProduct