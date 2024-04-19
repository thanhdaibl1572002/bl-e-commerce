/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from '@/components/pages/store/shop/productcategory.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import { useSearchParams, useRouter } from 'next/navigation'

interface IProductCategory {
    categories: Array<{
        name: string
        imageSrc: string
        imageAlt?: string
        title: string
    }>
}

const ProductCategory: FC<IProductCategory> = ({
    categories,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()

    const router = useRouter()
    const searchParams = useSearchParams()

    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                {categories && categories.length > 0 && categories.map((category, index) => (
                    <li key={index} onClick={() => router.push(`?category=${category.name}`)}>
                        <img loading='lazy' src={category.imageSrc} alt={category.imageAlt} />
                        <h4>{category.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductCategory