/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from '@/components/pages/store/shop/productbrand.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import { useSearchParams, useRouter } from 'next/navigation'

interface IProductBrand {
    brands: Array<{
        name: string
        imageSrc: string
        imageAlt?: string
    }>
}

const ProductBrand: FC<IProductBrand> = ({
    brands,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()

    const router = useRouter()
    const searchParams = useSearchParams()
    
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                {brands && brands.length > 0 && brands.map((brand, index) => (
                    <li key={index} onClick={() => router.push(`?brand=${brand.name}`)}>
                        <img loading='lazy' src={brand.imageSrc} alt={brand.imageAlt} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductBrand