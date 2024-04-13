import { FC } from 'react'
import styles from '@/components/pages/store/shop/productgrid.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Product from '@/components/pages/store/shop/Product'

interface IProductGrid {

}

const ProductGrid: FC<IProductGrid> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductGrid