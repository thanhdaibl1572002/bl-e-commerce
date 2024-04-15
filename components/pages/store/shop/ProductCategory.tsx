/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from '@/components/pages/store/shop/productcategory.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

interface IProductCategory {
    categories: Array<{
        link: string
        imageSrc: string
        title: string
    }>
}

const ProductCategory: FC<IProductCategory> = ({
    categories,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                {categories && categories.length > 0 && categories.map((category, index) => (
                    <li key={index}>
                        <Link href={category.link}>
                            <img src={category.imageSrc} alt='' />
                            <h4>{category.title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductCategory