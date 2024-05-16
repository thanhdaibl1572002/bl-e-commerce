/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from '@/app/shop/shopproductbrand.module.sass'
import { useAppSelector } from '@/redux'
import { useRouter } from 'next/navigation'

interface IShopProductBrand {
    brands: Array<{
        name: string
        imageSrc: string
        imageAlt?: string
    }>
}

const ShopProductBrand: FC<IShopProductBrand> = ({
    brands,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const router = useRouter()
    
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

export default ShopProductBrand