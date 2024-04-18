/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from '@/components/pages/store/shop/productbrand.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

interface IProductBrand {
    brands: Array<{
        link: string
        imageSrc: string
        imageAlt?: string
    }>
}

const ProductBrand: FC<IProductBrand> = ({
    brands,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                {brands && brands.length > 0 && brands.map((brand, index) => (
                    <li key={index}>
                        <Link href={brand.link}>
                            <img src={brand.imageSrc} alt={brand.imageAlt} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductBrand