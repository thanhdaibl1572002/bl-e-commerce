import { FC } from 'react'
import styles from '@/app/products/products.module.sass'
import ProductFilter from '@/components/layouts/store/product-filter/ProductFilter'
import ProductGrid from '@/components/layouts/store/product-grid/ProductGrid'

const Products: FC = () => {
    return (
        <div className={styles._container}>
            <div className={styles._filter}>
                <ProductFilter />
            </div>
            <div className={styles._grid}>
                <ProductGrid />
            </div>
        </div>
    )
}

export default Products